import ImageGallery from "react-image-gallery";
import "./ImageGallery.css";

function ImageCarousel() {
	const images = [
		{
			original: "https://picsum.photos/id/1018/1000/600/",
		},
		{
			original: "https://picsum.photos/id/1015/1000/600/",
		},
		{
			original:
				"https://images.unsplash.com/photo-1527489377706-5bf97e608852?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3959&q=80",
		},
	];

	return (
		<div className='carousel_container'>
			<ImageGallery
				items={images}
				autoPlay={true}
				showBullets={true}
				showPlayButton={true}
				slideDuration={2000}
				slideInterval={4000}
			/>
		</div>
	);
}

export default ImageCarousel;