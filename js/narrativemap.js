    //  create map object, tell it to live in 'map' div and give initial latitude, longitude, zoom values 
    var map = L.map('map', {scrollWheelZoom:true}).setView([24.402278, 33.017423], 17);

    //  add base map tiles from OpenStreetMap and attribution info to 'map' div
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    var marker = L.marker([50.635433, 5.561767]).addTo(map);

    // create custom icon
    var Apple = L.icon({
        iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/06/Red_apple.svg',
        iconSize: [30, 30], // size of the icon
        });

    // create marker object, pass custom icon as option, add to map         
    var marker = L.marker([50.633807, 5.568036], {icon: Apple}).addTo(map);
    var marker = L.marker([50.635114, 5.570246], {icon: Apple}).addTo(map);
    
    // create custom icon / BANANA
    var banana = L.icon({
        iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Bananas.svg',
        iconSize: [30, 25], // size of the icon
        });

    // create marker object, pass custom icon as option, add to map         
    var marker = L.marker([50.634188, 5.569087], {icon: banana}).addTo(map);
    var marker = L.marker([50.634317, 5.561693], {icon: banana}).addTo(map);
    var marker = L.marker([50.634625, 5.561324], {icon: banana}).addTo(map);
    var marker = L.marker([50.634223, 5.568164], {icon: banana}).addTo(map);
    var marker = L.marker([50.634308, 5.561303], {icon: banana}).addTo(map);
    var marker = L.marker([50.634146, 5.561300], {icon: banana}).addTo(map);
    
    var marker = L.marker([50.621170, 5.577806], {icon: banana}).addTo(map);
    var marker = L.marker([50.629487, 5.572290], {icon: banana}).addTo(map);
    
    // create custom icon / Raspberry 
    var Raspberry  = L.icon({
        iconUrl: 'https://upload.wikimedia.org/wikipedia/en/c/cb/Raspberry_Pi_Logo.svg',
        iconSize: [30, 25], // size of the icon
        });

    // create marker object, pass custom icon as option, add to map         
    var marker = L.marker([50.634038, 5.562572], {icon: Raspberry }).addTo(map);
    var marker = L.marker([50.634848, 5.562843], {icon: Raspberry }).addTo(map);
    var marker = L.marker([50.632855, 5.569076], {icon: Raspberry }).addTo(map);
    var marker = L.marker([50.633886, 5.562769], {icon: Raspberry }).addTo(map);
    var marker = L.marker([50.634794, 5.568615], {icon: Raspberry }).addTo(map);
    var marker = L.marker([50.633891, 5.563260], {icon: Raspberry }).addTo(map);
    
    var marker = L.marker([50.631670, 5.568663], {icon: Raspberry }).addTo(map);
    var marker = L.marker([50.625718, 5.569915], {icon: Raspberry }).addTo(map);
    var marker = L.marker([50.629006, 5.572312], {icon: Raspberry }).addTo(map);
    var marker = L.marker([50.630714, 5.571829], {icon: Raspberry }).addTo(map);
    var marker = L.marker([50.628264, 5.572816], {icon: Raspberry }).addTo(map);
    var marker = L.marker([50.620401, 5.578192], {icon: Raspberry }).addTo(map);
    
    // create custom icon / Tomato 
    var Raspberry  = L.icon({
        iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Tomato.svg',
        iconSize: [25, 25], // size of the icon
        });

    // create marker object, pass custom icon as option, add to map         
    var marker = L.marker([50.635036, 5.564815], {icon: Raspberry }).addTo(map);
    var marker = L.marker([50.634304, 5.565641], {icon: Raspberry }).addTo(map);
    var marker = L.marker([50.633692, 5.564944], {icon: Raspberry }).addTo(map);
    var marker = L.marker([50.633692, 5.564944], {icon: Raspberry }).addTo(map);
    var marker = L.marker([50.632882, 5.563142], {icon: Raspberry }).addTo(map);
    var marker = L.marker([50.634216, 5.570352], {icon: Raspberry }).addTo(map);

    // create custom icon / Carrot 
    var Carrot  = L.icon({
        iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Carrot.svg',
        iconSize: [10, 25], // size of the icon
        });

    // create marker object, pass custom icon as option, add to map         
    var marker = L.marker([50.635077, 5.566209], {icon: Carrot }).addTo(map);
    var marker = L.marker([50.634946, 5.560444], {icon: Carrot }).addTo(map);
    var marker = L.marker([50.632884, 5.563212], {icon: Carrot }).addTo(map);
    var marker = L.marker([50.632966, 5.565465], {icon: Carrot }).addTo(map);
    var marker = L.marker([50.636028, 5.561946], {icon: Carrot }).addTo(map);
    var marker = L.marker([50.636368, 5.563866], {icon: Carrot }).addTo(map);
    
    // create custom icon / Mint 
    var Mint  = L.icon({
        iconUrl: 'https://openclipart.org/download/192959/mint.svg',
        iconSize: [25, 25], // size of the icon
        });

    // create marker object, pass custom icon as option, add to map         
    var marker = L.marker([50.636367, 5.564505], {icon: Mint }).addTo(map);
    var marker = L.marker([50.636768, 5.566263], {icon: Mint }).addTo(map);
    var marker = L.marker([50.636251, 5.565973], {icon: Mint }).addTo(map);
    var marker = L.marker([50.633216, 5.563839], {icon: Mint }).addTo(map);
    var marker = L.marker([50.633264, 5.566725], {icon: Mint }).addTo(map);
    var marker = L.marker([50.636965, 5.562282], {icon: Mint }).addTo(map);
    
    var marker = L.marker([50.629551, 5.565611], {icon: Mint }).addTo(map);
    var marker = L.marker([50.628346, 5.573706], {icon: Mint }).addTo(map);
    var marker = L.marker([50.635580, 5.574672], {icon: Mint }).addTo(map);
    var marker = L.marker([50.635580, 5.574672], {icon: Mint }).addTo(map);
    var marker = L.marker([50.620468, 5.575077], {icon: Mint }).addTo(map);
    var marker = L.marker([50.624642, 5.574527], {icon: Mint }).addTo(map);
    var marker = L.marker([50.626112, 5.571534], {icon: Mint }).addTo(map);
    
    var marker = L.marker([50.622928, 5.578970], {icon: Mint }).addTo(map);
    
    // create custom icon / Cucumber 
    var Cucumber  = L.icon({
        iconUrl: 'https://vignette3.wikia.nocookie.net/bushwhacker2/images/a/af/Cucumber.svg/revision/latest?cb=20130408153455',
        iconSize: [25, 25], // size of the icon
        });

    // create marker object, pass custom icon as option, add to map         
    var marker = L.marker([50.633310, 5.561277], {icon: Cucumber }).addTo(map);
    var marker = L.marker([50.634610, 5.564968], {icon: Cucumber }).addTo(map);
    var marker = L.marker([50.636828, 5.564367], {icon: Cucumber }).addTo(map);
    var marker = L.marker([50.633684, 5.570354], {icon: Cucumber }).addTo(map);
    var marker = L.marker([50.635807, 5.569056], {icon: Cucumber }).addTo(map);
    var marker = L.marker([50.636862, 5.561599], {icon: Cucumber }).addTo(map);
    
    var marker = L.marker([50.618614, 5.576565], {icon: Cucumber }).addTo(map);
    var marker = L.marker([50.627608, 5.570403], {icon: Cucumber }).addTo(map);
    var marker = L.marker([50.625117, 5.570897], {icon: Cucumber }).addTo(map);
    var marker = L.marker([50.625117, 5.573547], {icon: Cucumber }).addTo(map);
    var marker = L.marker([50.619821, 5.575972], {icon: Cucumber }).addTo(map);
    
    var Potatoes  = L.icon({
        iconUrl: 'https://vignette4.wikia.nocookie.net/bushwhacker2/images/8/89/Potatoes.svg/revision/latest?cb=20130408153457',
        iconSize: [25, 35], // size of the icon
        });

    // create marker object, pass custom icon as option, add to map         
    var marker = L.marker([50.635733, 5.559496], {icon: Potatoes }).addTo(map);
    var marker = L.marker([50.635910, 5.560408], {icon: Potatoes }).addTo(map);
    var marker = L.marker([50.636652, 5.561910], {icon: Potatoes }).addTo(map);
    var marker = L.marker([50.633304, 5.570160], {icon: Potatoes }).addTo(map);
    var marker = L.marker([50.634352, 5.557822], {icon: Potatoes }).addTo(map);
    var marker = L.marker([50.635644, 5.564559], {icon: Potatoes }).addTo(map);
    
    var marker = L.marker([50.631845, 5.563691], {icon: Potatoes }).addTo(map);
    var marker = L.marker([50.630940, 5.564388], {icon: Potatoes }).addTo(map);
    var marker = L.marker([50.630811, 5.565761], {icon: Potatoes }).addTo(map);
    var marker = L.marker([50.629341, 5.564001], {icon: Potatoes }).addTo(map);
    var marker = L.marker([50.627925, 5.566780], {icon: Potatoes }).addTo(map);
    var marker = L.marker([50.626054, 5.568506], {icon: Potatoes }).addTo(map);
    
    var marker = L.marker([50.624563, 5.572241], {icon: Potatoes }).addTo(map);
    var marker = L.marker([50.622875, 5.570267], {icon: Potatoes }).addTo(map);
    var marker = L.marker([50.622855, 5.574376], {icon: Potatoes }).addTo(map);
    var marker = L.marker([50.621507, 5.574612], {icon: Potatoes }).addTo(map);
    var marker = L.marker([50.618614, 5.576565], {icon: Potatoes }).addTo(map);
    
    var Orange  = L.icon({
        iconUrl: 'http://colouringbook.org/LINKS/CHOVYNZ/chovynz_orange_icon_scalable_vector_graphics_svg_clip_art_coloring_colouring_book.svg',
        iconSize: [25, 25], // size of the icon
        });

    // create marker object, pass custom icon as option, add to map         
    var marker = L.marker([50.629504, 5.566829], {icon: Orange }).addTo(map);
    var marker = L.marker([50.628483, 5.569146], {icon: Orange }).addTo(map);
    var marker = L.marker([50.622638, 5.572434], {icon: Orange }).addTo(map);
    var marker = L.marker([50.636322, 5.569466], {icon: Orange }).addTo(map);
    var marker = L.marker([50.632947, 5.568844], {icon: Orange }).addTo(map);
    var marker = L.marker([50.636219, 5.564570], {icon: Orange }).addTo(map);