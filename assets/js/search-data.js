// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "$^\star$ equal contribution",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "dropdown-faculty",
              title: "Faculty",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/faculty/";
              },
            },{id: "dropdown-students",
              title: "Students",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/students/";
              },
            },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-1-paper-is-accepted-in-cvpr-2025-smile",
          title: '1 paper is accepted in CVPR 2025 :smile:',
          description: "",
          section: "News",},{id: "news-multimodal-ai-lab-ewha-website-is-now-open",
          title: 'Multimodal AI Lab @ EWHA website is now open!👋',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{id: "students-dahyun-choi",
          title: 'Dahyun Choi',
          description: "Audio Generative Model, Multimodal Learning, Edge AI for Mobility",
          section: "Students",handler: () => {
              window.location.href = "/students/dahyun_choi/";
            },},{id: "students-eunji-shin",
          title: 'Eunji Shin',
          description: "Multimodal Generation",
          section: "Students",handler: () => {
              window.location.href = "/students/eunji_shin/";
            },},{id: "students-eunsang-lee",
          title: 'Eunsang Lee',
          description: "Computer Vision, Audio Generation",
          section: "Students",handler: () => {
              window.location.href = "/students/eunsang_lee/";
            },},{id: "students-hyemin-boo",
          title: 'Hyemin Boo',
          description: "Vision Language Model, Generative Model",
          section: "Students",handler: () => {
              window.location.href = "/students/hyemin_boo/";
            },},{id: "students-jeonghyeon-joo",
          title: 'Jeonghyeon Joo',
          description: "Visual Document Understanding, Multimodal Learning, Audiovisual Reasoning",
          section: "Students",handler: () => {
              window.location.href = "/students/jeonghyeon_joo/";
            },},{id: "students-myungjin-lee",
          title: 'Myungjin Lee',
          description: "Vision Language Model, Multimodal Generation",
          section: "Students",handler: () => {
              window.location.href = "/students/myungjin_lee/";
            },},{id: "students-yunjin-song",
          title: 'YunJin Song',
          description: "Vision Language Model",
          section: "Students",handler: () => {
              window.location.href = "/students/yunjin_song/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
