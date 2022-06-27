// function getTime() {
//   const NowDate = new Date();
//   return new Promise((resolve, reject) => {
//     if (NowDate.getHours() < 11) {
//       resolve("good morning");
//     }
//     reject("good afternoon");
//   });
// }

// function clickME() {
//   getModulu(num1, num2)
//     .then((data) => {
//       printLine.innerText = data;
//     })
//     .catch((data) => {
//       printLine.innerText = data;
//     });
// }

// function getModulu(num1, num2) {
//   return new Promise((resolve, reject) => {
//     if (num2 % num1 == 0) {
//       resolve("yes");
//     }
//     reject("no");
//   });
// }
// function printModulu() {
//   getModulu(2, 3)
//     .then((data) => {
//       printLine.innerText = data;
//     })
//     .catch((err) => {
//       printLine.innerText = err;
//     });
// }

// function getPromise(num, arrayNum) {
//   return new Promise((resolve, reject) => {
//     for (let i = 0; i < arrayNum.length; i++) {
//       if (arrayNum[i] == num) {
//         resolve("yes");
//       }
//       reject("no");
//     }
//   });
// }
// function clickTOFindNum() {
//   getPromise(12, [12, 32, 33, 22])
//     .then((data) => (printLine.innerText = data))
//     .catch((err) => (printLine.innerText = err));
// }

// async function callToPromise() {
//   try {
//     await getPromise(num, arrayNum).then((data) => {
//       printLine.innerText = data;
//     });
//   } catch {
//     getPromise(num, arrayNum).catch(() => {
//       printLine.innerText = err;
//     });
//   }
// }
// callToPromise();

// async function getFromFetch() {
//   try {
//     fetchBtn.disabeld = true;
//     await fetch("https://moviesmern.herokuapp.com/movies/all").then(
//       (response) => {
//         console.log(response);
//       }
//     );
//   } catch (error) {
//     console.log(error);
//   } finally {
//     fetchBtn.disabeld = true;
//   }
// }

async function getFetchFRomHeroku() {
  try {
    fetchHeroko.disabeld = true;
    showMovie.innerHTML = "<img style='width:10vw;height: 10vh;' src = 'https://i.stack.imgur.com/ATB3o.gif'/>"

    await fetch("https://cat-fact.herokuapp.com/facts")
    .then((resp) => {
      movieInfo.innerHTML += "<img style ='20vw'";

      console.log(resp);
    });
  } catch (err) {
    console.log(err);
  } finally {
    fetchHeroko.disabeld = false;
    
  }
}

async function getMovieName() {
  try {
    return await fetch("https://moviesmern.herokuapp.com/movies/all").then(
      (response) => console.log(response.json())
    );
  } catch (error) {
  } finally {
  }
}



async function addMovieDetails() {
  fetchHeroko.disabeld = true ; 
  
  const data = {
    movie: {
      image: movieImageInput.value,
      linkToMovie:linkMovieInput.value,
      movieName: movieNAmeInput.value,
      rating: movieRateInput.value,
      synopsis: movieSynpInput.value,
    },
  };
  

  try {
    await fetch("https://moviesmern.herokuapp.com/movies/saveMovie", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
  } 
  catch (er) {}
  finally{
    fetchHeroko.disabeld = false
  }
}
