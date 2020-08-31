                  const span = document.querySelector('h4');
                  console.log(1111);
                  let i = 6;
                  let str = ``;
            let time = setInterval( ()=>{
                    i--;
                    if(i===0){
                      clearInterval(time);
                      window.location.href = '/admin/login'

                    }
                    str = `<sapn>${i}</span>`
                  span.innerHTML = str;
                  },1000)
