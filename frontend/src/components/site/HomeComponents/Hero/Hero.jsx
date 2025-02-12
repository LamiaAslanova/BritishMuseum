import React, { useRef, useState } from 'react';
import './Hero.css';
import VideoFile from '../../../../assets/videos/VideoBackground.mp4'
import { Link } from 'react-router-dom'

const Hero = () => {
    const videoRef = useRef(null);
    const [isPaused, setIsPaused] = useState(false);

    const handlePause = () => {
        if (videoRef.current) {
            if (videoRef.current.paused) {
                videoRef.current.play();
                setIsPaused(false);
            } else {
                videoRef.current.pause();
                setIsPaused(true);
            }
        }
    };

    return (
        <div className="video__section">
            <div className="video__div">
                <video
                    ref={videoRef}
                    className="background__video"
                    autoPlay
                    muted
                    loop
                >
                    <source src={VideoFile} type="video/mp4" />
                </video>
            </div>
            <div className="video__buttons">
                <button onClick={handlePause}>
                    {isPaused ?
                        <svg className='pl__svg' viewBox="-0.5 0 8 8" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>play [#1001]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-427.000000, -3765.000000)" fill="#ffffff"> <g id="icons" transform="translate(56.000000, 160.000000)"> <polygon id="play-[#1001]" points="371 3605 371 3613 378 3609"> </polygon> </g> </g> </g> </g></svg>
                        :
                        <svg className='pa__svg' viewBox="0 0 24 24" fill="#000000" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M9 7C9 6.44772 8.55228 6 8 6C7.44772 6 7 6.44772 7 7V17C7 17.5523 7.44772 18 8 18C8.55228 18 9 17.5523 9 17V7ZM17 7C17 6.44772 16.5523 6 16 6C15.4477 6 15 6.44772 15 7V17C15 17.5523 15.4477 18 16 18C16.5523 18 17 17.5523 17 17V7Z" fill="#ffffff"></path> </g></svg>
                    }
                </button>
                <button>
                    <a href='https://youtu.be/0I0Bl0B_2zA?si=MmnmyokryweX9Omd' target='_blank'>
                        <svg className='ad__svg' fill="#ffffff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="m9.32 16.326h-2.28v-1.366h-3.044l-.872 1.366h-3.124l.189-.255 3.274-4.548 3.091-4.302 1.386-.006h1.38zm-2.181-6.08-.996 1.46-.995 1.464.989.019c.225 0 .434.005.605.005.033.001.072.002.111.002.106 0 .21-.004.313-.013l-.014.001c.012-.012.014-.566.006-1.483zm4.836 6.08h-1.874v-9.111h1.939c.185-.009.402-.014.621-.014.61 0 1.21.041 1.798.12l-.069-.008c1.122.267 2.027 1.024 2.49 2.028l.009.023c.338.618.537 1.354.537 2.137 0 .107-.004.213-.011.318l.001-.014c.004.072.007.157.007.243 0 .448-.069.879-.198 1.284l.008-.03c-.277 1.131-1.006 2.055-1.979 2.586l-.021.01c-.781.381-1.146.429-3.258.429zm.274-6.919v4.654l.866-.026c.994-.033 1.238-.119 1.634-.579.332-.395.534-.91.534-1.471 0-.087-.005-.173-.014-.258l.001.01c.011-.078.017-.168.017-.26 0-.308-.071-.599-.198-.858l.005.011c-.428-.921-.79-1.132-2.037-1.191l-.81-.032zm10.329 6.913c-.096 0-.141-.009-.155-.03s0-.042.01-.074c.506-1.32.803-2.846.814-4.44v-.005c-.017-1.6-.314-3.126-.844-4.537l.03.092c-.014-.035-.016-.055-.006-.07.023-.034.114-.041.357-.041.314 0 .405.024.455.124.239.654.445 1.435.581 2.239l.011.081c.107.635.168 1.366.168 2.111 0 1.419-.221 2.785-.63 4.068l.026-.095-.182.553-.416.02c-.103.002-.169.005-.219.005zm-4.232 0c-.055 0-.115 0-.195-.006l-.436-.02.234-.351c.582-.888.985-1.943 1.134-3.079l.004-.038c.028-.29.044-.626.044-.967 0-.676-.062-1.338-.182-1.98l.01.066c-.243-.984-.641-1.848-1.171-2.614l.017.026-.104-.143h.924l.176.274c.335.578.617 1.246.812 1.95l.014.061c.188.676.295 1.453.295 2.255 0 1.366-.313 2.659-.871 3.811l.023-.052c-.344.7-.4.807-.73.807zm2.024 0c-.02.002-.042.004-.065.004-.065 0-.128-.01-.187-.03l.004.001c0-.024.135-.309.195-.43.13-.26.262-.577.374-.904l.017-.056c.296-.922.466-1.983.466-3.084 0-1.497-.315-2.92-.883-4.207l.026.067c-.059-.121-.195-.405-.195-.43.056-.019.12-.03.186-.03.022 0 .043.001.064.003h-.003c.06 0 .124 0 .188.006l.436.019.247.615c.442 1.159.698 2.5.698 3.9 0 1.465-.28 2.864-.789 4.148l.027-.076-.18.453-.436.02c-.064 0-.127.005-.188.005z"></path></g></svg>
                    </a>
                </button>
                <button>
                    <svg className='i__svg' fill="#ffffff" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M852.517 606.04C722.804 666.467 612.48 770.67 502.075 923.02c-15.746 21.725-16.38 34.927-.205 46.602 11.372 8.209 17.98 5.583 34.542-12.088 2.217-2.38 2.217-2.38 4.484-4.84 14.318-15.505 25.852-28.662 50.49-57.274 81.407-94.538 121.17-133.45 182.968-169.038 53.478-30.795 100.476 14.462 91.527 72.38-2.51 16.258-6.836 28.257-17.978 54.022-4.432 10.249-6.302 14.707-8.38 20.171-20.085 52.8-37.002 96.846-72.451 188.834l-1.696 4.4c-10.718 27.813-10.718 27.813-21.427 55.62-46.426 120.661-74.598 194.652-103.665 272.901l-1.705 4.587c-7.8 20.975-11.474 30.871-15.534 41.881-33.306 90.321-52.353 149.007-66.84 211.427-2.262 9.713-2.262 9.713-4.556 19.584-8.162 35.31-12.53 58.062-14.972 81.448-4.222 40.439-.827 73.553 11.881 101.382 14.38 31.493 45.278 54.021 80.532 59.138 58.727 8.525 115.393 7.92 163.927-3.123 27.314-6.21 54.338-14.34 80.853-24.306 76.773-28.866 150.735-73.905 222.371-133.442 62.681-52.236 121.988-115.875 184.165-194.965 5.42-6.849 5.42-6.849 10.823-13.686 18.78-23.947 27.981-39.501 31.416-55.93 3.736-17.836-11.342-35.912-23.394-29.864-5.956 2.989-12.187 9.176-21.68 21.15-6.791 8.714-10.483 13.37-14.178 17.555-14.745 16.695-30.315 33.783-47.184 51.837-27.812 29.752-56.07 58.865-97.055 100.308-20.874 21.107-47.126 39.56-75.351 53.435-45.176 22.197-85.929-5.782-81.034-55.857 3.229-33.058 11.238-67.234 23.212-100.275 26.157-72.22 47.544-130.604 94.86-259.27 20.52-55.803 29.38-79.91 40.446-110.086 32.81-89.425 59-161.415 83.919-230.875 30.784-85.803 48.175-149.762 56.227-215.81 6.08-49.817-7.78-97.46-39.389-130.216-35.047-36.312-84.896-53.039-146.979-52.305-68.692.817-148.82 23.261-222.548 57.608Zm470.186-592.224c-123.444-48.028-271.57 34.483-296.373 165.169-17.984 94.72 17.4 176.498 89.622 210.751 143.165 67.897 314.982-40.897 314.989-199.468.007-88.211-37.668-148.991-108.238-176.452Z"></path> </g></svg>
                </button>
            </div>
            <Link to='visit' className="video__content">
                <h2>Welcome to the British Museum</h2>
                <p>Experience cultures across the globe, from the dawn of human history to the present.</p>
                <Link to='visit'>
                    <span>Plan your visit</span>
                    <i class="fa-solid fa-circle-chevron-right"></i>
                </Link>
            </Link>
        </div>
    );
};

export default Hero;