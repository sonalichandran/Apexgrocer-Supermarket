import React, { useState, useEffect } from 'react';

const slides = [
  'https://t3.ftcdn.net/jpg/05/85/50/46/360_F_585504652_mx2E5zY3SZxOE9yjuHArUIMWFweAgHY6.jpg',
  'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQlPjzRF-4PJcplaQ1xrBuAz1VOwh0ofHwnfVFdi0SZAYXHZ-iD3NKKTP99zEW1akP6vj6uqz3KrK7Z3tSZmLMQPHg50fWXz_c7zKrO2gO9czmUQRQQpgS9&usqp=CAE',
  'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR6DYjw3iqjtOhoGzUUHOD5bkh3NbJwQvqkvy1xqt7A-pcIO7CHbO1JnCwNLrpH4X4zxv6VqWc6LRIA18AuMvKBKE7GTmeIXw&usqp=CAE',
  'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSQW5EP-6WwY712Um5BasY7eA04giAdmC9YtngXdPkIsZohdhkGNqgyT1duse1KSjV9jszbbEVmtfyHsj8rdN3M4znaFX6eMEccTzsFQry9&usqp=CAE',
  'https://ik.imagekit.io/ka538n3cv/10000067_24-fresho-capsicum-green.webp?updatedAt=1721882522604',
  'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTillbcJcSdLW71cqOMNTtPtMTrJ0NTLz3icpK8VZVLMxXhCM1wsj2ha5pzEWVVfoDNwFQT1u93oHe5TyYW0LQSYb0oGOhWzHtQQAxxHF02&usqp=CAE',
  'https://www.bigbasket.com/media/uploads/p/m/10001008_3-fresho-chicken-neck.jpg?tr=w-1920,q=80',
  'https://www.bigbasket.com/media/uploads/p/l/30009286_10-fresho-blueberry.jpg',
  'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQUt6uE-Fwde94pbDT2e3cHAriIdvC-r6XeL-ytdK9NZgKm73HyLNyVTl7QPsWW8eCkeQiTVMvI3148PjoBPFWtWwO3d8ZWYU_qmqHWUKU&usqp=CAE',
  'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTlH_RuP8L2OVaEvRUgyT6OITpfMUcnQslYwp_ri51UXdO4DCjuSv4w7L8pbxwsBuWwgYCwgxNleggT1sDUHgPjCjaLc2N9h4OTdauNjao&usqp=CAE',
  'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSwa0ZVizgdb26CGf6IMTk8jMESKu6BEujQxoJcDMg6ACyYlOqPbi3QsWqTphBhtCaBtolFBDCCXTT0sC5pHcllMwZMl_XJYJKzxd9lkqWz&usqp=CAE'
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitionCount, setTransitionCount] = useState(0); 

  const goToNextSlide = () => {
    if (transitionCount >= 3) return; 

    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    setTransitionCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    if (transitionCount < 2) { 
      const timer = setTimeout(goToNextSlide, 3000); 
      return () => clearTimeout(timer); 
    }
  }, [transitionCount]);

  return (
    <div className="w-full mx-auto overflow-hidden py-16 justify-center flex ">
      <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide}
            alt={`Slide ${index}`}
            className="w-full h-96"
          />
        ))}
      </div>
     
   
    </div>
  );
};

export default ImageSlider;
