        //Operadores de Atribuição
            //NodeJS
                //Utilizando atribuição simples - NODEjs
                var a = 5 + 3
                console.log(a)
                var b = a % 5
                console.log(b)
                var c = 5 * b ** 2
                console.log(c)
                var d = 10 - a / 2
                console.log(d)
                var e = 6 * 2 / d
                console.log(e)
                var f = b % e + 4 / e
                console.log(f)

                //Utilização auto-atribuição
                var n = 3
                console.log(n)

                n = n + 4
                console.log(n)
                    n += 4 //auto referência
                    console.log(n)
                n = n - 5
                console.log(n)
                    n -= 5
                    console.log(n)
                n = n * 4
                console.log(n)
                    n *= 4
                    console.log(n)
                n = n / 2
                console.log(n)
                    n /= 2
                    console.log(n)
                n = n ** 2
                console.log(n)
                    n **= 2
                    console.log(n)
                n = n % 5
                console.log(n)
                    n %= 5
                    console.log(n)
    
        console.log(n.toLocaleString("pt-BR",{style:'currency', currency:'BRL'}))