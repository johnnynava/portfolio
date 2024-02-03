# Portolio

[Live Preview](https://www.johnnynava.dev/)

My portfolio, made with Typescript, React.js and Three.js 👽

[Implemented ✅]~~The design is quite minimalist but that's because I eventually want to implement some kind of floating 3D forms in the background but for that I first need to learn things like Blender and ThreeJS~~

The background 3D animation was done by myself with the help of Three.js's documentation.

I initially wanted 3D objects in the background going from left to right and I could have accomplished this by mutating the position with a Math.tan(elapsedTime) but I did have at the back of my mind that this might be a little too resource intensive since I wanted to completely cover the background with objects.

Playing with the mesh size and material I then got the idea to just make a single big mesh rotate for the effect I wanted and I'm extremely happy with the results.

The biggest challenge for this was setting the canvas height to the document height, it worked in my local server but not on production (perhaps because some resources didn't load before the height was set) but I manage to work around this issue and now resizing the window works too.
