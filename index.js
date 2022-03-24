function newImage(imgSrc, fixedLeft, fixedBottom, isItem=false){
    let item = document.createElement('img')
    item.src = imgSrc
    item.style.position = 'fixed'
    item.style.left = fixedLeft
    item.style.bottom = fixedBottom
    document.body.append(item) 
    if (isItem){
        item.addEventListener('dblclick', 
        function(){
            item.remove()
        })}
    }
//still images
newImage('assets/green-character.gif', '100px', '100px', false)

newImage('assets/pine-tree.png', '450px', '200px', false)

newImage('assets/tree.png', '200px', '300px', false)

newImage('assets/pillar.png', '350px', '100px', false)

newImage('assets/crate.png', '150px', '200px', false)

newImage('assets/well.png', '500px', '425px', false)
//Retrievable objects
newImage('assets/sword.png', '500px', '405px', true)

newImage('assets/sheild.png', '165px', '185px', true)

newImage('assets/staff.png', '600px', '100px', true)

//background

document.body.style.backgroundImage = "url('./assets/grass.png')";
  
