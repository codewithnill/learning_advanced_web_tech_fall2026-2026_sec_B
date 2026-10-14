function getStudentData() {

  return new Promise((resolve, reject) => {

    setTimeout(() => {

      const success = false;

      if (success) {

        resolve({
          id: 101,
          name: "Rahim",
          cgpa: 3.92
        });

      } else {

        reject("Failed to get student data");

      }

    }, 2000);

  });
}

getStudentData()
  .then(student => {
    console.log(student);
  })
  .catch(error => {
    console.log(error);
});