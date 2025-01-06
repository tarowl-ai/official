interface SocialLink {
  icon?: string;
  isThreads?: boolean;
  isX?: boolean;
  url: string;
}

export const socialLinks: SocialLink[] = [
  {
    icon: "mdi-instagram",
    url: "https://www.instagram.com/tarowl404/",
  },
  {
    isThreads: true,
    url: "https://www.threads.net/@tarowl404",
  },
  {
    isX: true,
    url: "https://x.com/TarowlA27961",
  },
  {
    icon: "mdi-facebook",
    url: "https://www.facebook.com/profile.php?id=61571791611669",
  },
  {
    icon: "mdi-message-text",
    url: "https://tarowlai.featurebase.app/",
  },
  {
    icon: "mdi-email",
    url: "mailto:tarowl.app@gmail.com",
  },
]; 