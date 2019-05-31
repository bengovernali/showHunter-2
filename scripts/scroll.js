let searchBar = document.querySelector('#searchInput');


document.addEventListener('keypress', function (e){
    if (e.key === 'Enter'){
        document.querySelector('#scroll').scrollIntoView({ 
            behavior: 'smooth' 
        });
    }
});

    // document.querySelector('#scroll').scrollIntoView({ 
    //     behavior: 'smooth' 
    // });

// document.querySelector('#inputForm').addEventListener('keypress', function (e){
//     if(inputForm.length !== 0 && e.key === 'Enter'){
//         document.querySelector('#scroll').scrollIntoView({ 
//             behavior: 'smooth' 
//         });
//     }     
// });


