import "react";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "wistia-player": React.HTMLAttributes<HTMLElement> & {
        "media-id": string;
        aspect?: string | number;
      };
    }
  }
}
