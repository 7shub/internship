function makeUser() {
        return {
          name: "shubham",
          ref() {
            return this;
          }
        };
      }
      
      let user = makeUser();
      
      alert( user.ref().name ); 