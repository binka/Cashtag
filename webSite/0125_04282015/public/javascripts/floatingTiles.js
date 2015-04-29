  var table = [];
  var team = [
    [,"Prad Kikerri", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis porta mi, non aliquet nisi lacinia convallis. Sed id molestie nisl, ac lobortis tellus. Cras quis elit a lacus fringilla sagittis vel suscipit massa. Quisque hendrerit suscipit elit dictum pretium. Donec iaculis nibh sit amet neque consequat lacinia. Praesent a mi ut enim auctor laoreet ac non ex. Phasellus eget convallis nisl, quis ultricies enim. Cras vitae nunc vitae sem vulputate tristique vel at arcu. Curabitur dictum elit nunc, ac ornare odio porta non. Aliquam non purus euismod, accumsan nisl vel, efficitur lacus. Curabitur sed finibus ligula, sit amet rhoncus ligula. Mauris sagittis aliquet malesuada.", "/images/team/prad.jpg"],
    ["David Bittle", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis porta mi, non aliquet nisi lacinia convallis. Sed id molestie nisl, ac lobortis tellus. Cras quis elit a lacus fringilla sagittis vel suscipit massa. Quisque hendrerit suscipit elit dictum pretium. Donec iaculis nibh sit amet neque consequat lacinia. Praesent a mi ut enim auctor laoreet ac non ex. Phasellus eget convallis nisl, quis ultricies enim. Cras vitae nunc vitae sem vulputate tristique vel at arcu. Curabitur dictum elit nunc, ac ornare odio porta non. Aliquam non purus euismod, accumsan nisl vel, efficitur lacus. Curabitur sed finibus ligula, sit amet rhoncus ligula. Mauris sagittis aliquet malesuada.", "/images/team/david.jpg"],
    ["Lincoln Samelson", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis porta mi, non aliquet nisi lacinia convallis. Sed id molestie nisl, ac lobortis tellus. Cras quis elit a lacus fringilla sagittis vel suscipit massa. Quisque hendrerit suscipit elit dictum pretium. Donec iaculis nibh sit amet neque consequat lacinia. Praesent a mi ut enim auctor laoreet ac non ex. Phasellus eget convallis nisl, quis ultricies enim. Cras vitae nunc vitae sem vulputate tristique vel at arcu. Curabitur dictum elit nunc, ac ornare odio porta non. Aliquam non purus euismod, accumsan nisl vel, efficitur lacus. Curabitur sed finibus ligula, sit amet rhoncus ligula. Mauris sagittis aliquet malesuada.","/images/team/lincoln.jpg"],
    ["Alexander Worth", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis porta mi, non aliquet nisi lacinia convallis. Sed id molestie nisl, ac lobortis tellus. Cras quis elit a lacus fringilla sagittis vel suscipit massa. Quisque hendrerit suscipit elit dictum pretium. Donec iaculis nibh sit amet neque consequat lacinia. Praesent a mi ut enim auctor laoreet ac non ex. Phasellus eget convallis nisl, quis ultricies enim. Cras vitae nunc vitae sem vulputate tristique vel at arcu. Curabitur dictum elit nunc, ac ornare odio porta non. Aliquam non purus euismod, accumsan nisl vel, efficitur lacus. Curabitur sed finibus ligula, sit amet rhoncus ligula. Mauris sagittis aliquet malesuada.","/images/team/alex.jpg"],
    ["Chris Gray", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis porta mi, non aliquet nisi lacinia convallis. Sed id molestie nisl, ac lobortis tellus. Cras quis elit a lacus fringilla sagittis vel suscipit massa. Quisque hendrerit suscipit elit dictum pretium. Donec iaculis nibh sit amet neque consequat lacinia. Praesent a mi ut enim auctor laoreet ac non ex. Phasellus eget convallis nisl, quis ultricies enim. Cras vitae nunc vitae sem vulputate tristique vel at arcu. Curabitur dictum elit nunc, ac ornare odio porta non. Aliquam non purus euismod, accumsan nisl vel, efficitur lacus. Curabitur sed finibus ligula, sit amet rhoncus ligula. Mauris sagittis aliquet malesuada.","/images/team/chris.jpg"],
    ["Kirill Novik", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis porta mi, non aliquet nisi lacinia convallis. Sed id molestie nisl, ac lobortis tellus. Cras quis elit a lacus fringilla sagittis vel suscipit massa. Quisque hendrerit suscipit elit dictum pretium. Donec iaculis nibh sit amet neque consequat lacinia. Praesent a mi ut enim auctor laoreet ac non ex. Phasellus eget convallis nisl, quis ultricies enim. Cras vitae nunc vitae sem vulputate tristique vel at arcu. Curabitur dictum elit nunc, ac ornare odio porta non. Aliquam non purus euismod, accumsan nisl vel, efficitur lacus. Curabitur sed finibus ligula, sit amet rhoncus ligula. Mauris sagittis aliquet malesuada.", "/images/team/kirill.jpg"]];
    var tableBullish = [];
    var tableBearish = [];

  var camera, scene, renderer;
  var player;

  var auto = true;

  // Floating Element
  var Element = function ( entry, table ) {
    //var entry = parseInt(entry);
    //console.log(entry);
    var index = 0;
    var dom = document.createElement( 'div' );
    dom.style.width = '960px';
    dom.style.height = '400px';

    var image = document.createElement( 'img' ); // this element is needed because it has "load" event, and it seems "div" does not.
    image.style.position = 'absolute';
    image.style.width = '960px';
    image.style.height = '400px';
    image.style.background = 'rgba(0,0,0,0.5)';
    image.style.opacity = 0;
    image.src = "/images/blocker.png";
    dom.appendChild( image );


    var blocker = document.createElement( 'div' );
    blocker.className = 'blocker';
    blocker.style.position = 'absolute';
    blocker.style.width = '960px';
    blocker.style.height = '400px';
    dom.appendChild( blocker );

    var header = document.createElement( 'div' );
      header.className = 'header';
      blocker.appendChild( header );

    var created_at = document.createElement( 'div' );
        created_at.className = 'created_at';
        blocker.appendChild( created_at );

    var sentiment = document.createElement( 'div' );
        sentiment.className = 'sentiment';
        blocker.appendChild( sentiment );

    var text = document.createElement( 'div' );
      text.className = 'text';
      blocker.appendChild( text );

    var object = new THREE.CSS3DObject( dom );
    object.position.x = Math.random() * 8000 - 4000;
    // object.position.y = Math.random() * 2000 - 1000;
    object.position.y = 6000;
    object.position.z = Math.random() * - 10000;

    //

    image.addEventListener( 'load', function ( event ) {

      var sentimentItem = table[entry][3];
      text.textContent = table[entry][0];//parseInt(entry);//table[entry];
      header.textContent = table[entry][1];
      created_at.textContent = table[entry][2];
      if (sentimentItem != null){
        sentiment.textContent = sentimentItem;
        if (sentimentItem === '"Bullish"'){
          blocker.style.backgroundColor = "rgba(0,255,0,0.5)";
        }
        if (sentimentItem === '"Bearish"'){ blocker.style.backgroundColor = "rgba(255,0,0,0.75)"; }
      }
      new TWEEN.Tween( object.position )
        .to( { y: Math.random() * 8000 - 4000 }, 4000 )
        .easing( TWEEN.Easing.Exponential.Out )
        .start();

    }, false );

    dom.addEventListener( 'mouseover', function () {

    }, false );

    dom.addEventListener( 'mouseout', function () {

    }, false );

    dom.addEventListener( 'click', function ( event ) {

      event.stopPropagation();

      auto = false;

      var prev = object.position.z + 300;

      new TWEEN.Tween( camera.position )
        .to( { x: object.position.x, y: object.position.y - 25 }, 1500 )
        .easing( TWEEN.Easing.Exponential.Out )
        .start();

      new TWEEN.Tween( { value: prev } )
        .to( { value: 0  }, 2000 )
        .onUpdate( function () {

          move( this.value - prev );
          prev = this.value;

        } )
        .easing( TWEEN.Easing.Exponential.Out )
        .start();

    }, false );

    return object;

  };

  // Personal Info Element
  var personalInfoElement = function ( entry ) {
    //var entry = parseInt(entry);
    //console.log(entry);
    var index = 0;
    var dom = document.createElement( 'div' );
    dom.style.width = '480px';
    dom.style.height = '400px';

    var image = document.createElement( 'img' ); // this element is needed because it has "load" event, and it seems "div" does not.
    image.style.position = 'absolute';
    image.style.width = '100px';
    image.style.background = 'rgba(0,0,0,0.5)';
    image.style.right = '20px';
    image.style.top = '20px';
    image.style.zIndex = '10';
    image.src = team[entry][2];
    dom.appendChild( image );


    var blocker = document.createElement( 'div' );
    blocker.className = 'blocker';
    blocker.style.position = 'absolute';
    blocker.style.width = '480px';
    blocker.style.height = '400px';
    dom.appendChild( blocker );

    var header = document.createElement( 'div' );
      header.className = 'header';
      blocker.appendChild( header );

    var text = document.createElement( 'div' );
      text.className = 'text';
      blocker.appendChild( text );
      text.style.width = '300px';
      text.style.opacity = '1';

    var object = new THREE.CSS3DObject( dom );
    object.position.x = Math.random() * 4000 - 2000;
    // object.position.y = Math.random() * 2000 - 1000;
    object.position.y = 3000;
    object.position.z = Math.random() * - 5000;

    //

    image.addEventListener( 'load', function ( event ) {

      //button.style.visibility = 'visible';
      //parseInt(entry);//table[entry];
      header.textContent = team[entry][0];
      text.textContent = team[entry][1];

      new TWEEN.Tween( object.position )
        .to( { y: Math.random() * 2000 - 1000 }, 2000 )
        .easing( TWEEN.Easing.Exponential.Out )
        .start();

    }, false );

    dom.addEventListener( 'mouseover', function () {

    }, false );

    dom.addEventListener( 'mouseout', function () {

    }, false );

    dom.addEventListener( 'click', function ( event ) {

      event.stopPropagation();

      auto = false;

      var prev = object.position.z + 400;

      new TWEEN.Tween( camera.position )
        .to( { x: object.position.x, y: object.position.y - 25 }, 1500 )
        .easing( TWEEN.Easing.Exponential.Out )
        .start();

      new TWEEN.Tween( { value: prev } )
        .to( { value: 0  }, 2000 )
        .onUpdate( function () {

          move( this.value - prev );
          prev = this.value;

        } )
        .easing( TWEEN.Easing.Exponential.Out )
        .start();

    }, false );

    return object;

  };

  init();
  animate();

  function init() {

    camera = new THREE.PerspectiveCamera( 110, window.innerWidth / window.innerHeight, 1, 5000 );
    camera.position.y = - 25;

    scene = new THREE.Scene();

    renderer = new THREE.CSS3DRenderer({ antialias: true });
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.top = 0;
    renderer.domElement.style.zIndex = "0";
    document.getElementById( 'containerGL' ).appendChild( renderer.domElement );

    document.body.addEventListener( 'mousewheel', onMouseWheel, false );

    document.body.addEventListener( 'click', function ( event ) {

      auto = true;


      new TWEEN.Tween( camera.position )
          .to( { x: 0, y: - 25 }, 1500 )
          .easing( TWEEN.Easing.Exponential.Out )
          .start();

    }, false );

    window.addEventListener( 'resize', onWindowResize, false );

  }

  // Add Twit Tiles
      function addTiles(num, table){
        for ( var i = 0; i < num; i ++ ) {
          //console.log(parseInt(i));
          scene.add(new Element(i%table.length, table));
        }
      }
  // Add Sentiment Tiles


  // Add Team Tiles
      function addTeamTiles(num){
        for ( var i = 0; i < num; i ++ ) {
          //console.log(parseInt(i));
          scene.add(new personalInfoElement(i%team.length));
        }
      }

      // Remove Tiles
      function removeTiles(){
        for ( var i = 0, l = scene.children.length; i < l; i ++ ) {

          ( function () {

            var object = scene.children[ i ];
            object.textContent = table[i];
            var delay = i * 15;

            new TWEEN.Tween( object.position )
              .to( { y: - 4000 }, 1000 )
              .delay( delay )
              .easing( TWEEN.Easing.Exponential.In )
              .onComplete( function () {

                scene.remove( object );

              } )
              .start();

          } )();
        }
      }

  function move( delta ) {

    for ( var i = 0; i < scene.children.length; i ++ ) {

      var object = scene.children[ i ];

      object.position.z += delta;

      if ( object.position.z > 0 ) {

        object.position.z -= 10000;

      } else if ( object.position.z < - 10000 ) {

        object.position.z += 10000;

      }

    }

  }

  function onMouseWheel( event ) {

    move( event.wheelDelta );

  }

  function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

  }

  function animate() {

    requestAnimationFrame( animate );

    TWEEN.update();

    if ( auto === true ) {

      move( 1 );

    }

    renderer.render( scene, camera );
  }
