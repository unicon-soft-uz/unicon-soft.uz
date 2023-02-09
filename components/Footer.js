export default function Footer() {
    return(
        <>
        <div className="Footer">
        Just like in threeJS OrbitControls need a reference to the camera and the renderers domElement,
        we get the scenes camera and renderer by using the useThree()
         hook which react-fiber provides, when working with controls in react fiber we need to first call the extend function, this
          extends/adds additional features to react fiber in this case OrbitControls. Then the we need to add orbitControls component
           and use the attach property in it to basically attach our OrbitControls to the scene (this will allow us to access the orbit 
           Controls in any component), this is going to be very handy when we want to make our box draggable, we will need to disable orbit
            controls when we drag an the box in our scene.

Once we done we need to import our OrbitControls to our scene... you index page should look like this
        </div>
        </>
    )
}