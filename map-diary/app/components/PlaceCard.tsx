import React from "react";

const PlaceCard: React.FC<{ title: string }> = ({ title }) => {
  const getRandomEmoji = () => {
    const emojis = [
      "⛲",
      "⛺",
      "🌁",
      "🌃",
      "🏙",
      "🌄",
      "🌅",
      "🌆",
      "🌇",
      "🌉",
      "♨",
      "🎠",
      "🛝",
      "🎡",
      "🎢",
      "💈",
      "🎪",
      "🏔",
      "⛰",
      "🌋",
      "🗻",
      "🏕",
      "🏖",
      "🏜",
      "🏝",
      "🏞",
      "🏟",
      "🏛",
      "🏗",
      "🧱",
      "🪨",
      "🪵",
      "🛖",
      "🏘",
      "🏚",
      "🏠",
      "🏡",
      "🏢",
      "🏣",
      "🏤",
      "🏥",
      "🏦",
      "🏨",
      "🏩",
      "🏪",
      "🏫",
      "🏬",
      "🏭",
      "🏯",
      "🏰",
      "💒",
      "🗼",
      "🗽",
    ];
    return emojis[~~(Math.random() * emojis.length)];
  };

  return (
    <div className="p-0 bg-blue-columbia rounded-xl shadow-lg">
      <div className="flex justify-between p-2 font-medium text-black-rich">
        <p className="text-lg truncate">{title}</p>
        <p className="text-xl">{getRandomEmoji()}</p>
      </div>
      <div className="bg-little-victories bg-cover h-28 sm:h-44 rounded-b-xl"></div>
    </div>
  );
};

export default PlaceCard;
