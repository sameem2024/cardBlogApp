/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  mode:'jit',
  theme: {
    extend: {
      fontFamily:{
        'Josefin':['Josefin Sans', 'sans-serif'],
        'Raleway' :['Raleway', 'sans-serif'],
      },
      backgroundImage:{
        'login':"linear-gradient(to right bottom ,rgba(255,255,255,0.5),rgba(255,255,255,0.5)),url('https://images.pexels.com/photos/768473/pexels-photo-768473.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500')",
        'register':"linear-gradient(to right bottom ,rgba(255,255,255,0.5),rgba(255,255,255,0.5)),url('https://images.pexels.com/photos/317355/pexels-photo-317355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')",
      },
    
    },
    
  },
  plugins: [],
}



// <uniquifier>: Use a unique and descriptive class name
// <weight>: Use a value from 100 to 700

