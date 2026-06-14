// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "$^\star$ equal contribution, $^\dagger$ corresponding author(s)",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "Explore the journey of our lab’s projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-gallery",
          title: "Gallery",
          description: "Photos from Multimodal AI Lab @ EWHA",
          section: "Navigation",
          handler: () => {
            window.location.href = "/gallery/";
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
          section: "News",},{id: "projects-omnimodal-generative-xai-with-affective-and-social-intelligence-fast-omnimodal-dialogue-generation-for-explainable-robot-understanding",
          title: 'Omnimodal Generative XAI with Affective and Social Intelligence, Fast Omnimodal Dialogue Generation for...',
          description: "PI, 국가아젠다 기초연구 [2025.09-2028.08], National Research Foundation (NRF) of Korea",
          section: "Projects",handler: () => {
              window.location.href = "/projects/agenda_project/";
            },},{id: "projects-true-ai-trustworthy-and-resource-efficient-unified-evolving-ai",
          title: 'TRUE-AI: Trustworthy and Resource-efficient Unified Evolving AI',
          description: "4단계 BK21 사업 [2025.09-2027.08], Ministry of Education",
          section: "Projects",handler: () => {
              window.location.href = "/projects/bk_project/";
            },},{id: "projects-human-centered-artificial-intelligence-research-institute",
          title: 'Human-Centered Artificial Intelligence Research Institute',
          description: "G-LAMP (대학기초연구소) [2025.09-2030.08], Ministry of Education",
          section: "Projects",handler: () => {
              window.location.href = "/projects/glamp_project/";
            },},{id: "projects-development-of-multi-modal-intelligent-360-degree-environment-recognition-and-lightweight-technology",
          title: 'Development of multi-modal intelligent 360-degree environment recognition and lightweight technology',
          description: "Researcher, LIG Nex1 [2025.07-2026.12]",
          section: "Projects",handler: () => {
              window.location.href = "/projects/lig_project/";
            },},{id: "students-eunsang-lee",
          title: 'Eunsang_lee',
          description: "",
          section: "Students",handler: () => {
              window.location.href = "/students/eunsang_lee/";
            },},{id: "students-hyemin-boo",
          title: 'Hyemin_boo',
          description: "",
          section: "Students",handler: () => {
              window.location.href = "/students/hyemin_boo/";
            },},{id: "students-jeonghyeon-joo",
          title: 'Jeonghyeon_joo',
          description: "",
          section: "Students",handler: () => {
              window.location.href = "/students/jeonghyeon_joo/";
            },},{id: "students-minji-kim",
          title: 'Minji_kim',
          description: "",
          section: "Students",handler: () => {
              window.location.href = "/students/minji_kim/";
            },},{id: "students-myungjin-lee",
          title: 'Myungjin_lee',
          description: "",
          section: "Students",handler: () => {
              window.location.href = "/students/myungjin_lee/";
            },},{id: "students-new",
          title: 'New',
          description: "",
          section: "Students",handler: () => {
              window.location.href = "/students/new/";
            },},{id: "students-sungwon-moon",
          title: 'Sungwon_moon',
          description: "",
          section: "Students",handler: () => {
              window.location.href = "/students/sungwon_moon/";
            },},{id: "students-taein-ju",
          title: 'Taein_ju',
          description: "",
          section: "Students",handler: () => {
              window.location.href = "/students/taein_ju/";
            },},{id: "students-yeongeun-byeon",
          title: 'Yeongeun_byeon',
          description: "",
          section: "Students",handler: () => {
              window.location.href = "/students/yeongeun_byeon/";
            },},{id: "students-yoonhyung-park",
          title: 'Yoonhyung_park',
          description: "",
          section: "Students",handler: () => {
              window.location.href = "/students/yoonhyung_park/";
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
