from rest_framework import serializers
from django.contrib.auth import get_user_model, authenticate
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.tokens import AccessToken
import re
from django.contrib.auth.password_validation import CommonPasswordValidator

User = get_user_model()

class UserRegisterSerializer(serializers.ModelSerializer):
    confirm_password = serializers.CharField(write_only=True)
    class Meta:
        model = User
        fields = ['id', 'username','email','password', 'confirm_password']
        extra_kwargs = {'password':{'write_only':True},'confirm_password':{'write_only':True},'email':{'required':False}}


    def validate_password(self, value):
        if len(value) < 5 :
            raise serializers.ValidationError('password must be at least 5 character.')

        if re.search('[0-9]', value) is None:
            raise serializers.ValidationError('password must contain at least one number.')

        if re.search('[A-Z]', value) is None:
            raise serializers.ValidationError('password must contain at least one uppercase letter.')

        validate_common = CommonPasswordValidator()
        validate_common.validate(password=value)
        
        return value

    def validate(self, data):
        password = data.get('password')
        password2 = data.get('confirm_password')

        if password != password2:
            raise serializers.ValidationError('passwords are not matching')

        return data

    def create(self, validated_data):
        username = validated_data.get('username')
        email = validated_data.get('email')
        password = validated_data.get('password')
        user = User.objects.create_user(username=username, password=password,email=email)
        return user


class TokenGenerateSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField(trim_whitespace=False)

    def validate(self, attrs):
        password = attrs.get('password')
        username = attrs.get('username')
        user = authenticate(request=self.context.get('request'),username=username, password=password)

        if not user:
            raise serializers.ValidationError('user with these credentials is not exist')
        attrs['user'] = user
        return attrs

class JwtTokenGenerateSerializer(TokenObtainPairSerializer):
    
    def validate(self, attrs):
        data =  super().validate(attrs)
        token = AccessToken.for_user(self.user)
        data['token'] = str(token)
        data['username'] = self.user.username
        data['is_admin'] = self.user.is_superuser
        data.pop('access')
        data.pop('refresh')
        return data

class UserSerializer(serializers.Serializer):
    username = serializers.CharField(allow_blank=True,required=False)
    email = serializers.EmailField(allow_blank=True,required=False)
    is_superuser = serializers.BooleanField(read_only=True)

    def validate_username(self,value):
        current_user = self.context.get("request").user.username
        user = User.objects.filter(username=value)
        if user.exists():
            if user[0].username != current_user:
                raise serializers.ValidationError("this username already exists.")
        return value

class UserProfileSerializer(serializers.Serializer):
    user = UserSerializer()
    old_password = serializers.CharField(trim_whitespace=False,write_only =True,allow_blank=True,required=False)
    new_password = serializers.CharField(trim_whitespace=False,write_only =True,allow_blank=True,required=False)
    confirm_new_password = serializers.CharField(trim_whitespace=False,write_only =True,allow_blank=True,required=False)


    def validate_new_password(self, value):
        if len(value) > 0:
            if len(value) < 5 :
                raise serializers.ValidationError('password must be at least 5 character.')

            if re.search('[0-9]', value) is None:
                raise serializers.ValidationError('password must contain at least one number.')

            if re.search('[A-Z]', value) is None:
                raise serializers.ValidationError('password must contain at least one uppercase letter.')

            validate_common = CommonPasswordValidator()
            validate_common.validate(password=value)
        return value



    def validate(self, data):
        old_password = data.get('old_password')
        new_password = data.get('new_password')
        confirm_new_password = data.get('confirm_new_password')
        request = self.context.get("request")
        user = User.objects.get(username=request.user.username)
        
        if not old_password  and new_password :
            raise serializers.ValidationError('please enter your old password')

        if old_password  and not new_password :
            raise serializers.ValidationError('please enter your new password')

        if new_password != confirm_new_password:
            raise serializers.ValidationError('password confirmation is not right')

        if old_password and new_password:                
                if not request.user.check_password(old_password):
                   raise serializers.ValidationError("wrong old password")
        return data