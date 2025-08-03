module.exports = {
    getMemberName: (firstName, lastName) => { 
        return `${firstName} ${lastName}`; 
    }, 

    getMemberAge: (birthDate) => {
         // Today date, month and day 
        const now = new Date(Date.now()); 
        const monthNow = now.getMonth(); 
        const dateNow = now.getDate(); 

        // Member date, month and day of birth 
        const birthdate = new Date(birthDate); 
        const monthOfBirth = birthdate.getMonth(); 
        const dateOfBirth = birthdate.getDate(); 

        // Years from member birthdate to today 
        let age = now.getFullYear() - birthdate.getFullYear(); 
        // Member birthday this year not yet celebrated 
        if (monthNow < monthOfBirth || (monthNow === monthOfBirth && dateNow < dateOfBirth)) { 
            age -= 1; 
        } 

        return age; 
    }, 

    getYear: (date) => { 
        return new Date(date).getFullYear(); 
    }, 

    joinGenres: (genres = []) => { 
        return genres.map(g => g.name).join(', '); 
    }, 

    selectIfEqual: (category, currentCategory) => { 
        return category.equals(currentCategory) 
            ? 'selected' 
            : ''; 

    }, 

    checkIfIncluded: (genreIds = [], genreId) => { 
        return genreIds.some(gId => gId.equals(genreId)) 
            ? 'checked' 
            : ''; 

    }

}; 
