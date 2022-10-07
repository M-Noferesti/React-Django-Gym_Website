export const items = [
  {
    title: "خانه",
    url: "/",
    class: "home",
  },
  {
    title: "کلاس ها",
    url: "",
    class: "classes",
    subItems: [
      {
        title: "کلاس های حضوری",
        url: "/attending-classes",
        class: "attending-classes",
      },

      {
        title: "کلاس های انلاین",
        url: "/online-classes",
        class: "online-classes",
        subItems: [
          {
            title: "کلاس های خصوصی",
            url: "/private-online-classes",
            class: "private-online-classes",
          },

          {
            title: "کلاس های عمومی",
            url: "/public-online-classes",
            class: "public-online-classes",
          },
        ],
      },
    ],
  },
  {
    title: "مربیان",
    url: "/coaches",
    class: "coaches",
  },
  {
    title: "گالری",
    url: "/gallery",
    class: "gallery",
  },
  {
    title: "ارتباط با ما",
    url: "/contact-us",
    class: "contact-us",
  },
];
