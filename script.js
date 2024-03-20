
const projectData = {
    "header": {
      "logo": "https://res.cloudinary.com/dfsppvj1s/image/upload/v1710915015/Logo_zgjide.png",
      "shop_text": "Shop",
      "brand_text": "Brand",
      "contact_text": "Contact Us",
      "button_text": "Sign Up",
      "shop": "dummy.com",
      "brand_url": "dummy.com",
      "contact_Us_url": "dummy.com"
    },
    "watches": [
      {
        "watch_image": "https://res.cloudinary.com/dfsppvj1s/image/upload/v1710915016/Group_4_r4seie.png",
        "intro_text": "Exquisite Watches",
        "highlight_text": "Gold Luxury, ",
        "description": "Discover the Perfect Watch for Every Occasion and Elevate Your Style with Timeless Elegance and Precision Craftsmanship - watch",
        "price": "$500.00",
        "social_media_image": "https://res.cloudinary.com/dfsppvj1s/image/upload/v1710915015/Frame_6_etjx6a.png",
        "background": "linear-gradient(105.54deg, #F4A764 -2.93%, #FFDEC2 72.14%)"
      },
      {
        "watch_image": "https://res.cloudinary.com/dfsppvj1s/image/upload/v1710915016/Group_5_bvqsjy.png",
        "intro_text": "Dainty Timepieces",
        "highlight_text": "Silver Luxury, ",
        "description": "Explore the Ideal Timepiece for Any Moment and Enhance Your Style with Timeless Sophistication and Impeccable Craftsmanship - timepiece",
        "price": "$400.00",
        "social_media_image": "https://res.cloudinary.com/dfsppvj1s/image/upload/v1710915015/Frame_6_etjx6a.png",
        "background": "linear-gradient(105.54deg, #ADB0B0 -2.93%, #E1E1E1 72.14%)"
      },
      {
        "watch_image": "https://res.cloudinary.com/dfsppvj1s/image/upload/v1710915016/Group_6_gdjyx3.png",
        "intro_text": "Exquisite Watches",
        "highlight_text": "Choose Luxury, ",
        "description": "Discover the Perfect Watch for Every Occasion and Elevate Your Style with Timeless Elegance and Precision Craftsmanship - watch",
        "price": "$600.00",
        "social_media_image": "https://res.cloudinary.com/dfsppvj1s/image/upload/v1710915015/Frame_6_etjx6a.png",
        "background": "linear-gradient(105.54deg, #30A357 -2.93%, #75E39A 72.14%)"
      },
      {
        "watch_image": "https://res.cloudinary.com/dfsppvj1s/image/upload/v1710915016/Group_7_zvcpdk.png",
        "intro_text": "Exquisite Watches",
        "highlight_text": "Choose Luxury, ",
        "description": "Explore the Ideal Timepiece for Any Moment and Enhance Your Style with Timeless Sophistication and Impeccable Craftsmanship - timepiece",
        "price": "$450.00",
        "social_media_image": "https://res.cloudinary.com/dfsppvj1s/image/upload/v1710915015/Frame_6_etjx6a.png",
        "background": "linear-gradient(105.54deg, #F24F4F -2.93%, #FFA895 72.14%)"
      }
    ]
  };



  const rightArrow = "https://res.cloudinary.com/dfsppvj1s/image/upload/v1710915015/Right_arrow_q82i6y.png";
  const leftArrow = "https://res.cloudinary.com/dfsppvj1s/image/upload/v1710915015/Group_2_kjohyn.png";

  // Header elements
  const logo = document.querySelector('.logo');
  const navLinks = document.querySelector('.nav-links');
  const signUpButton = document.querySelector('.button');

  // Watch elements
  const introText = document.getElementById('introText');
  const highlightText = document.getElementById('highlightText');
  const description = document.getElementById('description');
  const price = document.getElementById('price');
  const watchImage = document.querySelector('.watch-image img');
  const arrowLeft = document.getElementById('arrowLeft');
  const arrowRight = document.getElementById('arrowRight');
  const body = document.getElementById('body')

  // Initial data
  let currentIndex = 0;
  const watches = projectData.watches;

  // Function to update watch data
  function updateWatchData(index) {
    const watch = watches[index];
    introText.textContent = watch.intro_text;
    highlightText.textContent = watch.highlight_text;
    description.textContent = watch.description;
    price.textContent = watch.price;
    watchImage.src = watch.watch_image;
    body.style.background = watch.background
  }

  // Initial watch data
  updateWatchData(currentIndex);

  // Smooth transition between watches
function smoothTransition(index) {
    body.style.transition = "background 5s liner"; // Apply transition to background change
    updateWatchData(index);
    setTimeout(() => {
      body.style.transition = ""; // Remove transition after the transition is complete
    }, 5000); // Adjust the duration (0.5s) to match the duration of the transition
  }

  smoothTransition(currentIndex);

  // Event listeners for navigation arrows
  arrowLeft.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? watches.length - 1 : currentIndex - 1;
    updateWatchData(currentIndex);
  });

  arrowRight.addEventListener('click', () => {
    currentIndex = (currentIndex === watches.length - 1) ? 0 : currentIndex + 1;
    updateWatchData(currentIndex);
  });

  // Header data
  logo.src = projectData.header.logo;
  navLinks.innerHTML = `
    <li><a href="${projectData.header.shop}">${projectData.header.shop_text}</a></li>
    <li><a href="${projectData.header.brand_url}">${projectData.header.brand_text}</a></li>
    <li><a href="${projectData.header.contact_Us_url}">${projectData.header.contact_text}</a></li>
  `;
  signUpButton.textContent = projectData.header.button_text;
