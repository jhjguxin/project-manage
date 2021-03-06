### go-tour

A Tour of the Go Programming Language

An interactive tour of the Go Programming Language.

The tour is [available online](http://tour.golang.org/) and [go-tour-zh](http://go-tour-zh.appspot.com/).

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

#### For is Go's "while"

At that point you can drop the semicolons: C's while is spelled for in Go.
基于此可以省略分号： C 的 while 在 Go 中也是用 for 实现。

```go
package main

import "fmt"

func main() {
	sum := 1
	for sum < 1000 {
		sum += sum
	}
	fmt.Println(sum)
}
```

#### Forever(无限循环)

If you omit the loop condition it loops forever, so an infinite loop is compactly 简洁地
 expressed.

```go
package main

func main() {
	for {
	}
}
```

#### If

The if statement looks as it does in C or Java, except that the ( ) are gone (they are not even optional) and the { } are required.

  if 语句看起来跟 C 或者 Java 中的一样，除了没有了 ( ) 之外（甚至强制不能使用它们），而 { } 是必须的。 

   （耳熟吗？）

(Sound familiar?)

```go
package main

import (
	"fmt"
	"math"
)

func sqrt(x float64) string {
	if x < 0 {
		return sqrt(-x) + "i"
	}
	return fmt.Sprint(math.Sqrt(x))
}

func main() {
	fmt.Println(sqrt(2), sqrt(-4))
}
```

#### If with a short statement

Like for, the if statement can start with a short statement to execute before the condition.

**Variables declared by the statement are only in scope until the end of the if**.

(Try using v in the last return statement.)

```go
package main

import (
	"fmt"
	"math"
)

func pow(x, n, lim float64) (float64, string) {
	if v := math.Pow(x, n); v < lim {
		return v, "pow"
	}
	return lim, "lim"
}

func main() {
	fmt.Println(
		pow(3, 2, 10),
		//pow(3, 3, 20),
	)
	fmt.Println(
		//pow(3, 2, 10),
		pow(3, 3, 20),
	)
	/*
	fmt.Print(
		pow(3, 2, 10),
		pow(3, 3, 20),
	)*/
}
```

#### If and else

Variables declared inside an if's short statement are also available inside any of the else blocks.

```go
package main

import (
	"fmt"
	"math"
)

func pow(x, n, lim float64) float64 {
	if v := math.Pow(x, n); v < lim {
		return v
	} else {
		//fmt.Printf("%g >= %g\n", v, lim)
		fmt.Printf("%g >= %g\t", v, lim)
	}
	// can't use v here, though
	return lim
}

func main() {
	fmt.Println(
		//pow(3, 2, 10),
		pow(3, 3, 20),
	)
	fmt.Println(
		pow(3, 2, 10),
		pow(3, 3, 20),
	)
}
```

#### Basic types

Go's basic types are

```
bool

string

int  int8  int16  int32  int64
uint uint8 uint16 uint32 uint64 uintptr

byte // alias for uint8

rune // alias for int32
     // represents a Unicode code point

float32 float64

complex64 complex128
```

```go
package main

import (
	"math/cmplx"
	"fmt"
)

var (
	ToBe bool = false
	MaxInt uint64 = 1<<64 - 1
	z complex128 = cmplx.Sqrt(-5+12i)
)

func main() {
	const f = "%T(%v)\n"
	fmt.Printf(f, ToBe, ToBe)
	fmt.Printf(f, MaxInt, MaxInt)
	fmt.Printf(f, z, z)
}
```

#### Structs

A struct is a collection of fields.

(And a type declaration does what you'd expect.)

```go
package main

import "fmt"

type Vertex struct {
	X int
	Y int
}

func main() {
	fmt.Println(Vertex{1, 2})
}
```

#### Struct Fields

Struct fields are accessed using a dot.

```go
package main

import "fmt"

type Vertex struct {
	X int
	Y int
}

func main() {
	v := Vertex{1, 2}
	v.X = 4
	fmt.Println(v.X)
}
```

#### Pointers

Go has pointers, but no pointer arithmetic.

Struct fields can be accessed through a struct pointer. The indirection through the pointer is transparent.

Go 有指针，但是没有指针运算。 

  结构体字段可以通过结构体指针来访问。通过指针间接的访问是透明的。
 
```go
package main

import "fmt"

type Vertex struct {
	X int
	Y int
}

func main() {
	p := Vertex{1, 2}
	q := &p
	q.X = 1e9
	fmt.Println(p,q)
}
```

#### Struct Literals

A struct literal denotes a newly allocated struct value by listing the values of its fields.

You can list just a subset of fields by using the Name: syntax. (And the order of named fields is irrelevant.)

The special prefix & constructs a pointer to a struct literal.

结构体文法表示通过结构体字段的值作为列表来新分配一个结构体。 

  使用 Name: 语法可以仅列出部分字段。（字段名的顺序无关。） 

  特殊的前缀 & 构造了指向结构体文法的指针。
  
```go
package main

import "fmt"

type Vertex struct {
	X, Y int
}

var (
	p = Vertex{1, 2}  // has type Vertex
	q = &Vertex{1, 2} // has type *Vertex
	r = Vertex{X: 1}  // Y:0 is implicit
	s = Vertex{}      // X:0 and Y:0
)

func main() {
	fmt.Println(p, q, r, s)
}
```

#### The new function

The expression new(T) allocates a zeroed T value and returns a pointer to it.

`var t *T = new(T)`

or

`t := new(T)`

```go
package main

import "fmt"

type Vertex struct {
	X, Y int
}

func main() {
	v := new(Vertex)
	fmt.Println(v)
	v.X, v.Y = 11, 9
	fmt.Println(v)
}
```

#### Maps

A map maps keys to values.

Maps must be created with make (not new) before use; the nil map is empty and cannot be assigned to.

```go
package main

import "fmt"

type Vertex struct {
	Lat, Long float64
}

var m map[string]Vertex

func main() {
	m = make(map[string]Vertex)
	m["Bell Labs"] = Vertex{
		40.68433, -74.39967,
	}
	fmt.Println(m["Bell Labs"])
}
```

#### Map literals

Map literals are like struct literals, but the keys are required.
map 的文法跟结构体文法相似，不过键名是必须的。

```go
package main

import "fmt"

type Vertex struct {
	Lat, Long float64
}

var m = map[string]Vertex{
	"Bell Labs": Vertex{
		40.68433, -74.39967,
	},
	"Google": Vertex{
		37.42202, -122.08408,
	},
}

func main() {
	fmt.Println(m)
}
```

#### Map literals continued

If the top-level type is just a type name, you can omit it from the elements of the literal.
如果顶层类型只有类型名的话，可以在文法的元素中省略键名。

```go
package main

import "fmt"

type Vertex struct {
	Lat, Long float64
}

var m = map[string]Vertex{
	"Bell Labs": {40.68433, -74.39967},
	"Google":    {37.42202, -122.08408},
}

func main() {
	fmt.Println(m)
}
```

#### Mutating Maps

修改 map

Insert or update an element in map m:

`m[key] = elem`

Retrieve an element:

`elem = m[key]`

Delete an element:

`delete(m, key)`

Test that a key is present with a two-value assignment:

`elem, ok = m[key]`

If `key` is in `m`, ok is `true`. If not, ok is `false` and `elem` is the zero value for the map's element type.

Similarly, when reading from a map **if the key is not present the result is the zero value for the map's element type**.

```go
package main

import "fmt"

func main() {
	m := make(map[string]int)

	m["Answer"] = 42
	fmt.Println("The value:", m["Answer"])

	m["Answer"] = 48
	fmt.Println("The value:", m["Answer"])

	delete(m, "Answer")
	fmt.Println("The value:", m["Answer"])

	v, ok := m["Answer"]
	fmt.Println("The value:", v, "Present?", ok)
}
```

#### Slices

切片

A slice points to an array of values and also includes a length.

`[]T` is a slice with elements of type `T`.

```go
package main

import "fmt"

func main() {
	p := []int{2, 3, 5, 7, 11, 13}
	fmt.Println("p ==", p)

	for i := 0; i < len(p); i++ {
		fmt.Printf("p[%d] == %d\n",
			i, p[i])
	}
}
```

#### Slicing slices

Slices can be re-sliced, creating a new slice value that points to the same array.

The expression

`s[lo:hi]`

evaluates to a slice of the elements from lo through `hi-1`, inclusive. Thus

`s[lo:lo]`

is empty and

`s[lo:lo+1]`

has one element.

```go
package main

import "fmt"

func main() {
	p := []int{2, 3, 5, 7, 11, 13}
	fmt.Println("p ==", p)
	fmt.Println("p[1:4] ==", p[1:4])

	// missing low index implies 0
	fmt.Println("p[:3] ==", p[:3])

	// missing high index implies len(s)
	fmt.Println("p[4:] ==", p[4:])
}
```

#### Making slices

Slices are created with the `make` function. It works by allocating a zeroed array and returning a slice that refers to that array:

`a := make([]int, 5)  // len(a)=5`

Slices have length and capacity. A slice's capacity is the maximum length the slice can grow within the underlying array.
To specify a capacity, pass a third argument to make:

`b := make([]int, 0, 5) // len(b)=0, cap(b)=5`

Slices can be grown by "re-slicing" (up to their capacity):

```go
b = b[:cap(b)] // len(b)=5, cap(b)=5
b = b[1:]      // len(b)=4, cap(b)=4
```

```go
package main

import "fmt"

func main() {
	a := make([]int, 5)
	printSlice("a", a)
	b := make([]int, 0, 5)
	printSlice("b", b)
	c := b[:2]
	printSlice("c", c)
	d := c[2:5]
	printSlice("d", d)
}

func printSlice(s string, x []int) {
	fmt.Printf("%s len=%d cap=%d %v\n",
		s, len(x), cap(x), x)
}
```

#### Nil slices

The zero value of a slice is nil.

A nil slice has a length and capacity of 0.

(To learn more about slices, read the "[Slices: usage and internals](http://golang.org/doc/articles/slices_usage_and_internals.html)" article.)

```go
package main

import "fmt"

func main() {
	var z []int
	fmt.Println(z, len(z), cap(z))
	if z == nil {
		fmt.Println("nil!")
	}
}
```

Function values

Functions are values too.
函数也是值。

```go
package main

import (
	"fmt"
	"math"
)

func main() {
	hypot := func(x, y float64) float64 {
		return math.Sqrt(x*x + y*y)
	}

	fmt.Println(hypot(3, 4))
}
```

#### Function closures

And functions are full closures.

The adder function returns a closure. Each closure is bound to its own sum variable.

并且函数是完全闭包的。 
函数 `adder` 返回一个闭包。每个闭包被绑定到了特定的 `sum` 变量上。

```go
package main

import "fmt"

// The adder function returns a closure
func adder() func(int) int {
	sum := 0
	return func(x int) int {
		sum += x
		return sum
	}
}

func main() {
	pos, neg := adder(), adder()
	for i := 0; i < 10; i++ {
		fmt.Println(
			pos(i),
			neg(-2*i),
			//adder(),
		)
	}
}
```

#### Range

The `range` form of the `for` loop iterates over a slice or map.
`for` 循环的 range 格式可以对 `slice` 或者 `map` 进行迭代循环。


```go
package main

import "fmt"

var pow = []int{1, 2, 4, 8, 16, 32, 64, 128}

func main() {
  // i is the index, and v is pow[i]
	for i, v := range pow {
	    fmt.Printf("2**%d = %d\n", i, v)
	}
}
```

#### Range continued

**You can skip the index or value by assigning to _.**

If you only want the index, drop the “, value” entirely.
如果只需要索引值，去掉“, value”的部分即可。

```go
package main

import "fmt"

func main() {
	pow := make([]int, 10)
	for i := range pow {
		pow[i] = 1 << uint(i)
		fmt.Printf("%d\n", pow[i])
	}
	fmt.Printf("*********************\n")
	pow1 := make([]int, 10)
	for _, value := range pow1 {
		fmt.Printf("%d\n", value)
	}
}
```

#### Switch

You probably knew what `switch` was going to look like.

A case body breaks automatically, unless it ends with a fallthrough statement.
case 语句会自动终止，除非用 fallthrough 语句作为结尾。

```go
package main

import (
	"fmt"
	"runtime"
)

func main() {
	fmt.Print("Go runs on ")
	switch os := runtime.GOOS; os {
	case "darwin":
		fmt.Println("OS X.")
	case "linux":
		fmt.Println("Linux.")
	default:
		// freebsd, openbsd,
		// plan9, windows...
		fmt.Printf("%s.", os)
	}
}
```

#### Switch evaluation order

switch 的执行顺序

Switch cases evaluate cases from top to bottom, stopping when a case succeeds.

(For example,

```go
switch i {
case 0:
case f():
}
```

does not call f if i==0.)

```go
package main

import (
	"fmt"
	"time"
)

func main() {
	fmt.Println("When's Saturday?")
	today := time.Now().Weekday()
	switch time.Saturday {
	case today+0:
		fmt.Println("Today.")
	case today+1:
		fmt.Println("Tomorrow.")
	case today+2:
		fmt.Println("In two days.")
	default:
		fmt.Println("Too far away.")
	}
}
```

#### Switch with no condition

Switch without a condition is the same as switch true.

This construct can be a clean way to write long if-then-else chains.

```go
package main

import (
	"fmt"
	"time"
)

func main() {
	t := time.Now()
	switch {
	case t.Hour() < 12:
	    fmt.Println("Good morning!")
	case t.Hour() < 17:
	    fmt.Println("Good afternoon.")
	default:
	    fmt.Println("Good evening.")
	}
}
```

#### Exercise: Loops and Functions

As a simple way to play with functions and loops, implement the square root function using Newton's method.

```go
package main


import (
	"fmt"
	"math"
)


func Sqrt(x float64) float64 {
	z := x
	for i := 0.0; i < 100000000.0; i++ {
		z = (z + x/z)/2
	}
	return z
}


func main() {
	fmt.Println(Sqrt(2))
	fmt.Println(math.Sqrt(2))
}
```

#### Exercise: Maps

Implement WordCount. It should return a map of the counts of each “word” in the string s. The wc.Test function runs a test suite against the provided function and prints success or failure.

You might find [strings.Fields](http://golang.org/pkg/strings/#Fields) helpful.

实现 WordCount。它应当返回一个含有 s 中每个 “word” 数量的 map。函数 wc.Test 针对这个函数执行一个测试用例，并打印成功或者失败。 

 你会发现 [strings.Fields](http://golang.org/pkg/strings/#Fields) 很有帮助。


```go
package main

import (
	"tour/wc"
	"strings"
)

func WordCount(s string) map[string]int {
	stringsplits := strings.Fields(s)
	
	m := make(map[string]int)
	for _, value := range stringsplits {
		m[value] += 1
	}
	return m
}

func main() {
	wc.Test(WordCount)
}
```

#### Exercise: Slices

Implement Pic. It should return a slice of length dy, each element of which is a slice of dx 8-bit unsigned integers. When you run the program, it will display your picture, interpreting the integers as grayscale (well, bluescale) values.

The choice of image is up to you. Interesting functions include x^y, (x+y)/2, and x*y.

(You need to use a loop to allocate each []uint8 inside the [][]uint8.)

(Use uint8(intValue) to convert between types.)

实现 Pic。它应当接受一个 slice 的长度 dy，和 slice 中每个元素的长度的 8 位无符号整数 dx。当执行这个程序，它会将整数转换为灰度（好吧，蓝度）图片进行展示。 

图片的实现已经完成。可能用到的函数包括 x^y，(x+y)/2 和 x*y。 

（需要使用循环来分配 [][]uint8 中的每个 []uint8。） 

（使用 uint8(intValue) 在类型之间转换。）

```go
package main

import "tour/pic"

func Pic(dx, dy int) [][]uint8 {
	image := make([][]uint8, dy)
	for i := 0; i < dy; i++ {
		image[i] = make([]uint8, dx)
	}
	for i:= 0; i < dy; i++ {
		for j := 0; j < dx; j++ {
			image[i][j] = (uint8)(i*j)%255  // 这里的函数用要求给的三个函数可以得到图像的不同的效果
		}
	}
	return image
}

func main() {
	pic.Show(Pic)
}
```

#### Exercise: Fibonacci closure

Let's have some fun with functions.

Implement a fibonacci function that returns a function (a closure) that returns successive fibonacci numbers.

现在来通过函数找些乐趣。 

实现一个 fibonacci 函数，返回一个函数（一个闭包）可以返回连续的斐波纳契数。

```go
package main

import "fmt"

// fibonacci is a function that returns
// a function that returns an int.
func fibonacci() func() int {
	pre := 0
	now := 1
	return func() int {
		now = pre + now
		pre = now - pre
		return pre
	}
}

func main() {
	f := fibonacci()
	for i := 0; i < 10; i++ {
		fmt.Println(f())
	}
}
```

#### Advanced Exercise: Complex cube roots

Let's explore Go's built-in support for complex numbers via thecomplex64 and complex128 types. For cube roots, Newton's method amounts to repeating:


Find the cube root of 2, just to make sure the algorithm works. There is a [Pow](http://golang.org/pkg/math/cmplx/#Pow) function in the math/cmplx package.

```go
package main

import (
"fmt"
"math"
)

func Cbrt(x complex128) complex128 {
	z := x
	for i := 0; i < 100; i++ {
		z = (2*z + x/(z*z))/3
	}
	return z
}

func main() {
	fmt.Println(Cbrt(2))
	fmt.Println(math.Cbrt(2))
}
```

### Methods and Interfaces

#### Methods

**Go does not have classes. However, you can define methods on struct types.**

The method receiver appears in its own argument list between the func keyword and the method name.

```go
package main

import (
	"fmt"
	"math"
)

type Vertex struct {
	X, Y float64
}

func (v *Vertex) Abs() float64 {
	return math.Sqrt(v.X*v.X + v.Y*v.Y)
}

func main() {
	v := &Vertex{3, 4}
	fmt.Println(v.Abs())
}
```

#### Methods continued

In fact, you can define a method on any type you define in your package, not just structs.

**You cannot define a method on a type from another package, or on a basic type.**

事实上，可以对包中的任意类型定义任意方法，而不仅仅是结构体。 

不能对来自其他包的类型或基础类型定义方法。

```go
package main

import (
	"fmt"
	"math"
)

type MyFloat float64

func (f MyFloat) Abs() float64 {
	if f < 0 {
		return float64(-f)
	}
	return float64(f)
}

func main() {
	f := MyFloat(-math.Sqrt2)
	fmt.Println(f.Abs())
}
```

#### Methods with pointer receivers

Methods can be associated with a named type or a pointer to a named type.

We just saw two Abs methods. One on the *Vertex **pointer type** and the other on the MyFloat **value** type.

There are two reasons to use a pointer receiver. First, to avoid copying the value on each method call **(more efficient if the value type is a large struct)**. Second, so that the method can modify the value that its receiver points to.

Try changing the declarations of the Abs and Scale methods to use Vertex as the receiver, instead of *Vertex.

The Scale method has no effect when v is a Vertex. Scale mutates v. When v is a value (non-pointer) type, the method sees a copy of the Vertex and cannot mutate the original value.

Abs works either way. It only reads v. It doesn't matter whether it is reading the original value (through a pointer) or a copy of that value.

方法可以与命名类型或命名类型的指针关联。 

刚刚看到的两个 Abs 方法。一个是在 *Vertex 指针类型上，而另一个在 MyFloat 值类型上。 

有两个原因需要使用指针接收者。首先避免在每个方法调用中拷贝值（如果值类型是大的结构体的话会更有效率）。其次，方法可以修改接收者指向的值。 

尝试修改 Abs 的定义，同时 Scale 方法使用 Vertex 代替 *Vertex 作为接收者。 

当 v 是 Vertex 的时候 Scale 方法没有任何作用。Scale 修改 v。当 v 是一个值（非指针），方法看到的是 Vertex 的副本，并且无法修改原始值。 

Abs 的工作方式是一样的。只不过，仅仅读取 v。所以读取的是原始值（通过指针）还是那个值的副本并没有关系。

```go
package main

import (
	"fmt"
	"math"
)

type Vertex struct {
	X, Y float64
}

func (v *Vertex) Scale(f float64) {
	v.X = v.X * f
	v.Y = v.Y * f
}

func (v *Vertex) Abs() float64 {
	return math.Sqrt(v.X*v.X + v.Y*v.Y)
}

func main() {
	v := &Vertex{3, 4}
	v.Scale(5)
	fmt.Println(v, v.Abs())
}
```

#### Interfaces

An interface type is defined by a set of methods.

A value of interface type can hold any value that implements those methods.

接口类型是由一组方法定义的集合。 

接口类型的值可以存放实现这些方法的任何值。

```go
package main

import (
	"fmt"
	"math"
)

type Abser interface {
	Abs() float64
}

func main() {
	var a Abser
	f := MyFloat(-math.Sqrt2)
	f1 := MyFloat(1.1212)
	fmt.Println(f,f1)
	
	v := Vertex{3, 4}

	a = f  // a MyFloat implements Abser
	fmt.Println(a.Abs())	
	a = &v // a *Vertex implements Abser
	fmt.Println(a.Abs())
	
	//a  = 1.1212 // cannot use 1.1212 (type float64) 
	 //as type Abser in assignment 
	 // float64 does not implement Abser (missing Abs method)
	
	//a = v  // a Vertex, does NOT
	       // implement Abser
        //fmt.Println(a.Abs())


}

type MyFloat float64

func (f MyFloat) Abs() float64 {
	if f < 0 {
		return float64(-f)
	}
	return float64(f)
}

type Vertex struct {
	X, Y float64
}

func (v *Vertex) Abs() float64 {
	return math.Sqrt(v.X*v.X + v.Y*v.Y)
}
```

#### Interfaces are satisfied implicitly

A type implements an interface by implementing the methods.

  There is no explicit declaration of intent.

Implicit interfaces decouple implementation packages from the packages that define the interfaces: neither depends on the other.

It also encourages the definition of precise interfaces, because you don't have to find every implementation and tag it with the new interface name.

[Package io](http://golang.org/pkg/io/) defines Reader and Writer; you don't have to.

类型通过实现那些方法来实现接口。 

  没有显式声明的必要。 

隐式接口解藕了实现接口的包和定义接口的包：互不依赖。 

因此，也就无需在每一个实现上增加新的接口名称，这样同时也鼓励了明确的接口定义。（对比其他语言） 

[Package io](http://golang.org/pkg/io/) 定义了 `Reader` 和 `Writer`；不一定要这么做。

```go
package main

import (
	"fmt"
	"os"
)

type Reader interface {
	Read(b []byte) (n int, err error)
}

type Writer interface {
	Write(b []byte) (n int, err error)
}

type ReadWriter interface {
	Reader
	Writer
}

func main() {
	var w Writer

	// os.Stdout implements Writer
	w = os.Stdout

	fmt.Fprintf(w, "hello, writer\n")
}
```

#### Errors

An error is anything that can describe itself as an error string. The idea is captured by the predefined, built-in interface type, `error`, with its single method, Error, returning a string:

```go
type error interface {
	Error() string
}
```

The `fmt` package's various print routines automatically know to call the method when asked to print an error.

```go
package main

import (
	"fmt"
	"time"
)

type MyError struct {
	When time.Time
	What string
}

func (e *MyError) Error() string {
	return fmt.Sprintf("at %v, %s",
		e.When, e.What)
}

func run() error {
	return &MyError{
		time.Now(),
		"it didn't work",
	}
}

func main() {
	if err := run(); err != nil {
		fmt.Println(err)
	}
}
```

#### Web servers

[Package http](http://golang.org/pkg/net/http/) serves HTTP requests using any value that implements http.Handler:

```go
package http

type Handler interface {
	ServeHTTP(w ResponseWriter, r *Request)
}
```

In this example, the type `Hello` implements `http.Handler`.

Visit http://localhost:4000/ to see the greeting.

```go
package main

import (
	"fmt"
	"net/http"
)

type Hello struct{}

func (h Hello) ServeHTTP(
		w http.ResponseWriter,
		r *http.Request) {
	fmt.Fprint(w, "Hello!")
}

func main() {
	var h Hello
	http.ListenAndServe("localhost:4000",h)
}
```

#### Images

[Package image](http://golang.org/pkg/image/#Image) defines the Image interface:

```go
package image

type Image interface {
	ColorModel() color.Model
	Bounds() Rectangle
	At(x, y int) color.Color
}
```

(See the [documentation](http://golang.org/pkg/image/#Image) for all the details.)

Also, color.Color and color.Model are interfaces, but we'll ignore that by using the predefined implementations color.RGBA and color.RGBAModel.

#### Exercise: Errors

Copy your Sqrt function from the earlier exercises and modify it to return an error value.

Sqrt should return a non-nil error value when given a negative number, as it doesn't support complex numbers.

Create a new type

`type ErrNegativeSqrt float64`

and make it an error by giving it a

`func (e ErrNegativeSqrt) Error() string`

method such that `ErrNegativeSqrt(-2).Error()` returns "cannot Sqrt negative number: -2".

Note: a call to `fmt.Print(e)` inside the Error method will send the program into an infinite loop. You can avoid this by converting e first: `fmt.Print(float64(e))`. Why?

Change your Sqrt function to return an ErrNegativeSqrt value when given a negative number.

```go
package main

import (
  "fmt"
)

type ErrNegativeSqrt float64

func (e ErrNegativeSqrt) Error() string{
  return fmt.Sprintf("cantnot Sqrt negative number: %v", float64(e))
}

func Sqrt(f float64) (float64, error) {
  if f < 0 {
    return 0, ErrNegativeSqrt(f)
  }
	
  z := f
  for i := 0; i < 10; i++ {
    z = (z + f/z)/2
  }
	
  return z, nil
}

func main() {
  if value, err := Sqrt(-2); err != nil {
    fmt.Println(err)
  } else {
    fmt.Println(value)
  }
	
  if value, err := Sqrt(2); err != nil {
    fmt.Println(err)
  } else {
    fmt.Println(value)
  }
}
```

#### Exercise: HTTP Handlers

Implement the following types and define ServeHTTP methods on them. Register them to handle **specific paths** in your web server.

```go
type String string

type Struct struct {
	Greeting string
	Punct    string
	Who      string
}
```

For example, you should be able to register handlers using:

```go
http.Handle("/string", String("I'm a frayed knot."))
http.Handle("/struct", &Struct{"Hello", ":", "Gophers!"})
```

```go
package main

import (
	"fmt"
	"net/http"
)

type String string

func (s String) ServeHTTP(
		w http.ResponseWriter,
		req *http.Request) {
	fmt.Fprint(w, string(s))
}

type Struct struct {
	Greeting string
	Punct string
	Who string
}

func (s *Struct) ServeHTTP(
		w http.ResponseWriter,
		req *http.Request) {
	fmt.Fprint(w, s.Greeting, s.Punct, s.Who)
}

func main() {
	// your http.Handle calls here
	http.Handle("/string", String("I'm a frayed knot."))
	http.Handle("/struct", &Struct{"Hello", ":", "Gophers!"})
	http.ListenAndServe("localhost:4000", nil)
}
```

#### Exercise: Images

Remember the picture generator you wrote earlier? Let's write another one, but this time it will return an implementation of image.Image instead of a slice of data.

Define your own Image type, implement the [necessary methods](http://golang.org/pkg/image/#Image), and call `pic.ShowImage`.

Bounds should return a `image.Rectangle`, like `image.Rect(0, 0, w, h)`.

`ColorModel` should return `color.RGBAModel`.

At should return a color; the value v in the last picture generator corresponds to `color.RGBA{v, v, 255, 255}` in this one.

```go
package main

import (
	"image"
	"image/color"
	"tour/pic"
	//"code.google.com/p/go-tour/pic"
)

type Image struct{}


func (i *Image) ColorModel() color.Model {
	return color.RGBAModel
}

func (i *Image) Bounds() image.Rectangle {
	return image.Rect(0, 0, 256, 256)
}

func (i *Image)  At(x, y int) color.Color {
	v := (uint8)(x^y)
	return color.RGBA{v, v, 255, 255}
}
 
func main() {
	m := &Image{}
	pic.ShowImage(m)
}
```

#### Exercise: Rot13 Reader

A common pattern is an [io.Reader](http://golang.org/pkg/io/#Reader) that wraps another io.Reader, modifying the stream in some way.

For example, the [gzip.NewReader](http://golang.org/pkg/compress/gzip/#NewReader) function takes an `io.Reader` (a stream of gzipped data) and returns a `*gzip.Reader` that also implements `io.Reader` (a stream of the decompressed data).

Implement a `rot13Reader` that implements `io.Reader` and reads from an `io.Reader`, modifying the stream by applying the [ROT13](http://en.wikipedia.org/wiki/ROT13) substitution cipher to all alphabetical characters.

The `rot13Reader` type is provided for you. Make it an `io.Reader` by implementing its Read method.

一般的模式是 `io.Reader` 包裹另一个 `io.Reader`，用某些途径修改特定的流。 

 例如， `gzip.NewReader` 函数输入一个 `io.Reader`（`gzip` 的数据流）并且返回一个同样实现了 `io.Reader` 的 `*gzip.Reader`（解压缩后的数据流）。 

 实现一个实现了 `io.Reader` 的 `rot13Reader`，用 `ROT13` 修改数据流中的所有的字母进行密文替换。 

`rot13Reader` 已经提供。通过实现其 `Read` 方法使得它匹配 `io.Reader`。

```go
package main

import (
	"io"
	"os"
	"strings"
)

type rot13Reader struct {
	r io.Reader
}

func (reader *rot13Reader) Read(p []byte) (n int, err error) {
	n, err = reader.r.Read(p)
	for i := 0; i < len(p); i++ {
		if ('A' <= p[i] && p[i] < 'Z' - 12) || ('a' <= p[i] && p[i] < 'z' - 12) {
			p[i] += 13
		} else {
			p[i] -= 13
		}
	}
	return
}

func main() {
	s := strings.NewReader(
		"Lbh penpxrq gur pbqr!")
	r := rot13Reader{s}
	io.Copy(os.Stdout, &r)
}
```

### Concurrency

并发

#### Goroutines

A `goroutine` is a lightweight thread managed by the Go runtime.

```go
go f(x, y, z)
```

starts a new goroutine running

```go
f(x, y, z)
```

The evaluation of `f`, `x`, `y`, and `z` happens in the current goroutine and the execution of `f` happens in the new goroutine.

Goroutines run in the same address space, so access to shared memory must be synchronized. The [sync](http://golang.org/pkg/sync/) package provides useful primitives, although you won't need them much in Go as there are other primitives. (See the next slide.)

goroutine 是由 Go 运行时环境管理的轻量级线程。 

```go
go f(x, y, z)
```

 开启一个新的 goroutine 执行 

```go
f(x, y, z)
```

`f`, `x`, `y` 和 `z` 是当前 goroutine 中定义的，但是在新的 goroutine 中运行 `f`。 

goroutine 在相同的地址空间中运行，因此访问共享内存必须进行同步。 [sync](http://golang.org/pkg/sync/) 提供了这种可能，不过在 Go 中并不经常用到，因为有其他的办法。 （在接下来的内容中会涉及到。）

```go
package main

import (
	"fmt"
	"runtime"
)

func say(s string) {
	for i := 0; i < 5; i++ {
		runtime.Gosched()
		fmt.Println(s)
	}
}

func main() {
	go say("world")
	say("hello")
}
```

#### Channels

Channels are a typed conduit through which you can send and receive values with the channel operator, `<-`.

```go
ch <- v    // Send v to channel ch.
v := <-ch  // Receive from ch, and
           // assign value to v.
```

(The data flows in the direction of the arrow.)

Like maps and slices, channels must be created before use:

```go
ch := make(chan int)
```

By default, sends and receives block until the other side is ready. This allows goroutines to synchronize without explicit locks or condition variables.

channel 是有类型的管道，可以用 channel 操作符 `<-` 对其发送或者接收值。 

```go
ch <- v    // Send v to channel ch.
v := <-ch  // Receive from ch, and
           // assign value to v.
```

（“箭头”就是数据流的方向。） 

和 map 与 slice 一样，channel 使用前必须创建： 

```go
ch := make(chan int)
```

默认情况下，在另一端准备好之前，发送和接收都会阻塞。这使得 goroutine 可以在没有明确的锁或竞态变量的情况下进行同步。


```go
package main

import "fmt"

func sum(a []int, c chan int) {
	sum := 0
	for _, v := range a {
		sum += v
	}
	c <- sum  // send sum to c
}

func main() {
	a := []int{7, 2, 8, -9, 4, 0}

	c := make(chan int)
	go sum(a[:len(a)/2], c)
	go sum(a[len(a)/2:], c)
	x, y := <-c, <-c  // receive from c

	fmt.Println(x, y, x + y)
}
```

#### Buffered Channels

Channels can be buffered. Provide the buffer length as the second argument to make to initialize a buffered channel:

```go
ch := make(chan int, 100)
```

Sends to a buffered channel block only when the buffer is full. Receives block when the buffer is empty.

Modify the example to overfill the buffer and see what happens.

```go
package main

import "fmt"

func main() {
	c := make(chan int, 2)
	c <- 1
	c <- 2
	//c <- 3
	fmt.Println(<-c)
	fmt.Println(<-c)
	fmt.Println(c)
}
```

#### Range and Close

A sender can close a channel to indicate that no more values will be sent. Receivers can test whether a channel has been closed by assigning a second parameter to the receive expression: after

```go
v, ok := <-ch
```

`ok` is `false` if there are no more values to receive and the channel is closed.

The loop for `i := range` c receives values from the channel repeatedly until it is closed.

Note: Only the sender should close a channel, never the receiver. Sending on a closed channel will cause a panic.

Another note: Channels aren't like files; you don't usually need to close them. Closing is only necessary when the receiver must be told there are no more values coming, such as to terminate a range loop.

发送者可以 `close` 一个 `channel` 来表示再没有值会被发送了。接收者可以通过赋值语句的第二参数来测试 `channel` 是否被关闭：当没有值可以接收并且 `channel` 已经被关闭，那么

```go 
v, ok := <-ch
```

`ok` 会被设置为 `false`。 

循环 `for i := range c` 会不断从 `channel` 接收值，直到它被关闭。 

注意： 只有发送者才能关闭 `channel`，而不是接收者。向一个已经关闭的 `channel` 发送数据会引起 `panic`。 

还要注意：`channel` 与文件不同；通常情况下无需关闭它们。只有在需要告诉接收者没有更多的数据的时候才有必要进行关闭，例如中断一个 `range`。

```go
package main

import (
	"fmt"
)

func fibonacci(n int, c chan int) {
        x, y := 0, 1
	for i := 0; i < n; i++ {
		c <- x
                x, y = y, x + y
        }
        close(c)
}

func main() {
        c := make(chan int, 10)
	go fibonacci(cap(c), c)
        for i := range c {
                fmt.Println(i)
        }
}
```

#### Select

The `select` statement lets a goroutine wait on multiple communication operations.

A `select` blocks until one of its `cases` can run, then it executes that `case`. **It chooses one at random if multiple are ready**.

```go
package main

import "fmt"

func fibonacci(c, quit chan int) {
	x, y := 0, 1
	for {
		select {
		case c <- x:
			x, y = y, x + y
		case <-quit:
			fmt.Println("quit")
			return
		}
	}
}

func main() {
	c := make(chan int)
	quit := make(chan int)
	go func() {
		for i := 0; i < 10; i++ {
			fmt.Println(<-c)
		}
		quit <- 0
	}()
	fibonacci(c, quit)
}
```

#### Default Selection

The `default case` in a `select` is run if no other case is ready.

Use a `default` case to try a send or receive without blocking:

```go
select {
case i := <-c:
	// use i
default:
	// receiving from c would block
}
```

```go
package main

import (
	"fmt"
	"time"
)

func main() {
	tick := time.Tick(1e8)
	boom := time.After(5e8)
	for {
		select {
		case <-tick:
			fmt.Println("tick.")
		case <-boom:
			fmt.Println("BOOM!")
			return
		default:
			fmt.Println("    .")
			time.Sleep(5e7)
		}
	}
	}
```

#### Exercise: Equivalent Binary Trees

There can be many different binary trees with the same sequence of values stored at the leaves. For example, here are two binary trees storing the sequence 1, 1, 2, 3, 5, 8, 13. 

A function to check whether two binary trees store the same sequence is quite complex in most languages. We'll use Go's concurrency and channels to write a simple solution.

This example uses the tree package, which defines the type:

```go
type Tree struct {
	Left  *Tree
	Value int
	Right *Tree
}
```

可以用多种不同的二叉树的叶子节点存储相同的数列值。例如，这里有两个二叉树保存了序列 1，1，2，3，5，8，13。  

 用于检查两个二叉树是否存储了相同的序列的函数在多数语言中都是相当复杂的。这里将使用 Go 的并发和 `channel` 来编写一个简单的解法。 

 这个例子使用了 `tree` 包，定义了类型： 

```go
type Tree struct {
	Left  *Tree
	Value int
	Right *Tree
}
```

```go
package main

import "code.google.com/p/go-tour/tree"

// Walk walks the tree t sending all values
// from the tree to the channel ch.
func Walk(t *tree.Tree, ch chan int) {
	walkRecur(t, ch)
	close(ch)
}

func walkRecur(t *tree.Tree, ch chan int) {
	if t == nil { return }
	walkRecur(t.Left, ch)
	ch <- t.Value
	walkRecur(t.Right, ch)
}

// Same determines whether the trees
// t1 and t2 contain the same values.
func Same(t1, t2 *tree.Tree) bool {
	chan1 := make(chan int)
	go Walk(t1, chan1)
	chan2 := make(chan int)
	go Walk(t2, chan2)
	for n := range chan1 {
		if n != <- chan2 { return false }
	}
	return true
}

func main() {
	ch := make(chan int)
	go Walk(tree.New(1), ch)
	for n := range ch { print(n, " ") }
	println()
	println(Same(tree.New(1), tree.New(1)))
	println( Same(tree.New(1), tree.New(2)))
}
```

#### Exercise: Web Crawler

In this exercise you'll use Go's concurrency features to parallelize a web crawler.

Modify the Crawl function to fetch URLs in parallel without fetching the same URL twice.

在这个练习中，将会使用 Go 的并发特性来并行执行 web 爬虫。 

修改 Crawl 函数来并行的抓取 URLs，并且保证不重复。

```go
package main

import (
	"fmt"
)

type Fetcher interface {
	// Fetch returns the body of URL and
	// a slice of URLs found on that page.
	Fetch(url string) (body string, urls []string, err error)
}

func crawlConcurr(url string, depth int, fetcher Fetcher,
		  ch chan func()([]string,int), quit chan int) {
	if depth <= 0 {
		quit <- 0
		return
	}
	body, urls, err := fetcher.Fetch(url)
	if err != nil {
		fmt.Println(err)
		quit <- 0
		return
	} else {
		fmt.Printf("found: %s %q\n", url, body)
		f := func()([]string,int) { return urls, depth }
		ch <- f
	}
}

var history = make(map[string]bool)

// Crawl uses fetcher to recursively crawl
// pages starting with url, to a maximum of depth.
func Crawl(url string, depth int, fetcher Fetcher) {
	// TODO: Fetch URLs in parallel.
	// TODO: Don't fetch the same URL twice.
	// This implementation doesn't do either:
	history[url] = true
	ch := make(chan func()([]string,int))
	quit := make(chan int)
	routinsNum := 1
	go crawlConcurr(url, depth, fetcher, ch, quit)
	for routinsNum > 0 {
		select {
		case f := <- ch:
			routinsNum --
			us, d := f()
			for _, u := range us {
				if history[u] != true {
					history[u] = true;
					routinsNum ++
					go crawlConcurr(u, d - 1, fetcher, ch, quit)
				}
			}
		case <- quit:
			routinsNum --
		}
	}
}

func main() {
	Crawl("http://golang.org/", 4, fetcher)
}


// fakeFetcher is Fetcher that returns canned results.
type fakeFetcher map[string]*fakeResult

type fakeResult struct {
	body string
	urls     []string
}

func (f *fakeFetcher) Fetch(url string) (string, []string, error) {
	if res, ok := (*f)[url]; ok {
		return res.body, res.urls, nil
	}
	return "", nil, fmt.Errorf("not found: %s", url)
}

// fetcher is a populated fakeFetcher.
var fetcher = &fakeFetcher{
	"http://golang.org/": &fakeResult{
		"The Go Programming Language",
		[]string{
			"http://golang.org/pkg/",
			"http://golang.org/cmd/",
		},
	},
	"http://golang.org/pkg/": &fakeResult{
		"Packages",
		[]string{
			"http://golang.org/",
			"http://golang.org/cmd/",
			"http://golang.org/pkg/fmt/",
			"http://golang.org/pkg/os/",
		},
	},
	"http://golang.org/pkg/fmt/": &fakeResult{
		"Package fmt",
		[]string{
			"http://golang.org/",
			"http://golang.org/pkg/",
		},
	},
	"http://golang.org/pkg/os/": &fakeResult{
		"Package os",
		[]string{
			"http://golang.org/",
			"http://golang.org/pkg/",
		},
	},
}
```

#### Where to Go from here...

可以从 [installing Go](http://golang.org/doc/install/) 或者下载 [Go App Engine SDK](http://code.google.com/appengine/downloads.html#Google_App_Engine_SDK_for_Go)。 

一旦在机器上安装好了 Go， [Go Documentation](http://golang.org/doc/) 是应当继续阅读的内容 。 它包含了参考、指南、视频等等更多资料。 

 了解如何组织 Go 代码并在其上工作，参阅 [this screencast](http://www.youtube.com/watch?v=XCsL89YtqCs)  or read [如何编写 Go 代码](http://golang.org/doc/code.html)。 

 在标准库上需要帮助的话，参考 [package reference](http://golang.org/doc/code.html)。语言本身的帮助，可以阅读令人愉快的 [Language Spec](http://golang.org/ref/spec)。 

 进一步探索 Go 的并发模型，参阅 [Share Memory by Communicating](http://golang.org/doc/codewalk/sharemem/) 的代码之旅。 

[First Class Functions in Go](http://golang.org/doc/codewalk/functions/) 为 Go 的函数类型提供了有趣的展示。 

[Go Blog](http://blog.golang.org/) 有着众多的关于 Go 的文章信息。 

访问 [golang.org](http://golang.org/) 了解更多内容。
