// VideoModal.js
// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaPlay } from "react-icons/fa6";
import Modal from "react-modal";
import ReactPlayer from "react-player";

Modal.setAppElement("#root"); // Set the root element for accessibility

const VideoModal = ({ isOpen, onClose, videoUrl }) => {
  const handleVideoEnd = () => {
    console.log("Video ended");
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Video Modal"
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75"
      overlayClassName="fixed inset-0"
    >
      <div className="relative w-full max-w-4xl p-4 mt-16 md:mt-24">
        <button
          onClick={onClose}
          className="absolute z-10 top-2 right-2 p-2 text-white bg-gray-800 cursor-pointer md:top-4 md:right-4"
        >
          X
        </button>
        <div className="relative pt-[56.25%]">
          {" "}
          {/* Aspect ratio of 16:9 */}
          <ReactPlayer
            playing
            onEnded={handleVideoEnd}
            url={videoUrl}
            controls
            width="100%"
            height="100%"
            className="absolute top-0 left-0"
          />
        </div>
      </div>
    </Modal>
  );
};

export default VideoModal;
