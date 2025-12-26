img = document.getElementById('image')
images = ['afar', 'church', 'bunker', 'bunker2', 'tunnel']
selimage = images[Math.floor(Math.random()*images.length)]
img.src = "files/"+selimage+".png"