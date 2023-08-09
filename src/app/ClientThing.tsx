"use client";
import { useEffect } from "react";
import Pixel from "react-facebook-pixel";

const myPixelId = "1292872274951856";
const dumbPixelIdFromAccountThatGotFckingSuspended = "3518292171830583";

export const ClientThing = () => {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "/js/test_hype_generated_script.js?69854";
    script.async = true;

    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    Pixel.fbq("init", dumbPixelIdFromAccountThatGotFckingSuspended);
    Pixel.fbq("init", myPixelId);
  }, []);

  const doPixelThing = () => {
    console.log("boom!");

    Pixel.track("AddToWishlist", {
      content_name: "2222",
      content_category: "Bananas",
      content_ids: ["abcd"],
      content_type: "fruit",
      value: 69,
      currency: "PENGODOLLAR",
    });
  };

  return <button onClick={doPixelThing}>PIXEL LAUNCH!</button>;
};
