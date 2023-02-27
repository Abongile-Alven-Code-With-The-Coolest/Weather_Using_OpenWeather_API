export class PasswordServices{

    static getRandomLowerCase(){
        return String.fromCharCode(Math.floor(Math.random()*26)+97)
    }
    static getRandomUpperCase(){
        return String.fromCharCode(Math.floor(Math.random()*26)+65)
    }
    static getRandomNumbers(){
        return String.fromCharCode(Math.floor(Math.random()*10)+48)
    }
   
    static getRandomSymbols(){
        var symbolStr=`!@#$%^&*()-+/{}[]|`
        return symbolStr[Math.floor(Math.random()*symbolStr.length)]
    }

    static getPasswordObj(state){
        let passwordObj={};
        for(let key of Object.keys(state)){
            if(typeof state[key]==='boolean' && state[key]){
                passwordObj={
                    ...passwordObj,
                    [key]:state[key]
                }
            }
        }
        return passwordObj;
    }
    static generatePassword(passwordObj,passwordLength){
        let thePassword=''
       
        if(passwordObj===''){
            console.log("There is no selection made")
            return false
        }
        else{
        for(var i=0; i<=Number(passwordLength);i+=Object.keys(passwordObj).length)
        {
            console.log(i)
            if(passwordObj.symbols) thePassword+=`${this.getRandomSymbols()}`
            if(passwordObj.upper) thePassword+=`${this.getRandomUpperCase()}`;
            if(passwordObj.lower) thePassword+=`${this.getRandomLowerCase()}`;
            if(passwordObj.numbers) thePassword+=`${this.getRandomNumbers()}`;
        }
        return thePassword
    }
    }
}