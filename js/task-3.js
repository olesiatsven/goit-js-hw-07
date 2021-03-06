const images = [
    {
      url:
        'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url:
        'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url:
        'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
  ];


  // const galleryRef = document.querySelector ('#gallery');

  // const galleryimages = images.map(image =>{
  //     const item = document.createElement('li');
  //     const picture = document.createElement('img');
  //     picture.setAttribute('src', image.url);
  //     picture.setAttribute('alt',image.alt);
  //     item.appendChild(picture);
  //     return item;
  // });

  // galleryRef.append(...galleryimages);


  
  // 3.2

  const galleryRef = document.querySelector ('#gallery');

  const addImages = images.map (image => {
    const createElement = document.createElement ('li');
    
    createElement.insertAdjacentHTML('beforeend', `<img src = ${image.url} alt = ${image.alt}>`);
    return createElement;
  });

  galleryRef.append(...addImages);
