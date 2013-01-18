### go-tour

A Tour of the Go Programming Language

An interactive tour of the Go Programming Language.

The tour is [available online](http://tour.golang.org/).

You can also run it locally. First [install Go](http://golang.org/doc/install) and then use [go](http://golang.org/cmd/go/) to install gotour:

```shell
go get code.google.com/p/go-tour/gotour
```

and run the `gotour` executable.

Note:

* You must have [Mercurial](http://mercurial.selenic.com/) installed for the go get command to work.
* The tour will only build against the latest weekly snapshot of Go.

#### install go-tour on ubuntu(by francis)

you should install [Mercurial](http://mercurial.selenic.com/) at first:

```shell
sudo apt-get install mercurial
```

install go-tour

```shell
go get code.google.com/p/go-tour/gotour
```

run the go-tour

```shell
cd /usr/lib/go/bin/ && ./gotour
```

type `ctrl + c` to stop go-tour or :

```shell
lsof -i:3999
kill pids
```

### A Tour of Go

#### Hello, 世界

Welcome to a tour of the Go programming language.

The tour is divided into three sections. At the end of each section is a series of exercises for you to complete.

The tour is interactive(互动). Click the Run button now (or type Shift-Enter) to compile and run the program on your computer. The result is displayed below the code.

These example programs demonstrate(演示) different(方面) aspects of Go. The programs in the tour are meant to be starting points for your own experimentation.

Edit the program and run it again.

Whenever you're ready to move on, click the Next button or type the PageDown key.

```go
// Hello, 世界
package main

import "fmt"

func main() {
	fmt.Println("Hello, 世界")
}
```

#### Packages

Every Go program is made up of packages.

Programs start running in package main.

This program is using the packages with import paths "fmt" and "math".

By convention(惯例约定), the package name is the same as the last element of the import path.

```go
// packages
package main

import (
	"fmt"
	"math"
)

func main() {
	fmt.Println("Happy", math.Pi, "Day")
}
```

#### Imports

This code groups the imports into a parenthesized(括号内), "factored" import statement. You can also write multiple import statements, like:

```go
import "fmt"
import "math"
```

but it's common to use the factored form to eliminate clutter(消除杂乱).

```go
// imports
package main

import (
	"fmt"
	"math"
)

func main() {
	fmt.Printf("Now you have %g problems.",
		math.Nextafter(2, 3))
}
```

#### Exported names

After importing a package, you can refer to the names it exports.

**In Go, a name is exported if it begins with a capital letter.**

`Foo` is an exported name, as is `FOO`. The name `foo` is not exported.

Run the code. Then rename `math.pi` to `math.Pi` and try it again.

```go
// exported names
package main

import (
	"fmt"
	"math"
)

func main() {
	fmt.Println(math.pi)
}
```

#### Functions

A function can take zero or more arguments.

In this example, add takes two parameters of type `int` and return an `int` value.

Notice that the type comes after the variable name.

(For more about why types look the way they do, see the [article on Go's declaration syntax](http://golang.org/doc/articles/gos_declaration_syntax.html).)

```go
// functions
package main

import "fmt"

func add(x int, y int) int {
	return x + y
}

func main() {
	fmt.Println(add(42, 13))
}
```

#### Functions continued

When two or more consecutive(连续) named function parameters share a type, you can omit the type from all but the last.

In this example, we shortened

```go
x int, y int
```

to

```go
x, y int
```

```go
// Functions continued
package main

import "fmt"

func add(x, y int) int {
	return x + y
}

func main() {
	fmt.Println(add(42, 13))
}
```

#### Multiple results

A function can return any number of results.

**This function takes two parameters of type `string` and returns two `strings`.**

```go
// Multiple results
package main

import "fmt"

func swap(x, y string) (string, string) {
	return y, x
}

func main() {
	a, b := swap("hello", "world")
	fmt.Println(a, b)
}
```

#### Named results

Functions take parameters. In Go, functions can return multiple "result parameters", not just a single value. They can be named and act just like variables.

If the result parameters are named, a return statement without arguments returns the current values(当前声明的所有变量的值) of the results.

```go
// named results
package main

import "fmt"

func split(sum int) (x, y int) {
	x = sum * 4/9
	y = sum - x
	return
}

func main() {
	fmt.Println(split(17))
}
```

#### Variables

The `var` statement declares a list of variables; as in function argument lists, the type is last.

```go
package main

import "fmt"

var x, y, z int
var c, python, java bool

func main() {
	fmt.Println(x, y, z, c, python, java)
}
```

#### Variables with initializers

A `var` declaration can include initializers, one per variable.

**If an initializer is present, the type can be omitted; the variable will take the type of the initializer**.

```go
package main

import "fmt"

var x, y, z int = 1, 2, 3
var c, python, java = true, false, "no!"

func main() {
	fmt.Println(x, y, z, c, python, java)
}
```

#### Short variable declarations

Inside a function, the `:=` short assignment statement can be used in place of a var declaration with implicit type.

(Outside a function, every construct begins with a keyword and the `:=` construct is not available.)

```go
package main

import "fmt"

func main() {
	var x, y, z int = 1, 2, 3
	c, python, java := true, false, "no!"

	fmt.Println(x, y, z, c, python, java)
}
```

#### Constants

Constants are declared like variables, but with the const keyword.

Constants can be character, string, boolean, or numeric values.

```go
// Constants
package main

import "fmt"

const Pi = 3.14

func main() {
	const World = "世界"
	fmt.Println("Hello", World)
	fmt.Println("Happy", Pi, "Day")

	const Truth = true
	fmt.Println("Go rules?", Truth)
}
```

#### Numeric Constants

Numeric constants are high-precision values.

An untyped constant takes the type needed by its context.

Try printing needInt(Big) too.

```go
package main

import "fmt"

const (
	Big = 1 << 100
	Small = Big >> 99
)

func needInt(x int) int { return x*10 + 1 }
func needFloat(x float64) float64 {
	return x*0.1
}

func main() {
	fmt.Println(needInt(Small))
	fmt.Println(needFloat(Small))
	fmt.Println(needFloat(Big))
}

/*
* http://golang.org/ref/spec#Operators
* shift operator
*/
package main

import "fmt"

func main() {
	var left_shift = 14 >> 2
	var right_shift = 1 << 10
	fmt.Println(left_shift,right_shift)
}
// 3 1024
```

#### For

**Go has only one looping construct, the for loop.**

The basic for loop looks as it does in C or Java, except that the ( ) are gone (they are not even optional) and the { } are required.

```go
package main

import "fmt"

func main() {
	sum := 0
	for i := 0; i < 10; i++ {
		sum += i
		// fmt.Println(sum)
	}
	fmt.Println(sum)
}
```

#### For continued

As in C or Java, you can leave the pre and post statements empty.

```go
package main

import "fmt"

func main() {
	sum := 0.2
	for ; sum < 3; {
		sum += sum
		fmt.Println(sum)
	}
	fmt.Println(sum)
}
```
