# Introduction to Exponents

## Multiplication as repeated addition

Remember how multiplication is defined as repeated addition, and it turned out
to be pretty useful?

Say we have $3$ groups of $4$ pears each. Multiplying $3 \times 4$ gives us the
result that we have $12$ pears.

$$\textcolor{green}{3} \times \textcolor{blue}{4} = \underbrace{\textcolor{green}{3} + \textcolor{green}{3} + \textcolor{green}{3} + \textcolor{green}{3}}_{\text{\textcolor{blue}{4} times}} = 12$$

## Exponents as repeated multiplication

Well, exponentiation is just repeated multiplication. Here's an example:

$$\textcolor{green}{3}^{\textcolor{blue}{4}} = \underbrace{\textcolor{green}{3} \times \textcolor{green}{3} \times \textcolor{green}{3} \times \textcolor{green}{3}}_{\text{\textcolor{blue}{4} times}} = 81.$$

Try it! What's $2^3$?

$$2^3 = ...$$

## Special rules

A cool property of exponents is that for any number $x$, $x^1 = x$. Let's see
why.

$$
\textcolor{green}{5}^{\textcolor{blue}{1}} = \underbrace{\textcolor{green}{5}}_{\text{\textcolor{blue}{1} time}} = 5.
$$

When we multiply something by itself once, we just get the original number.
Neat!

## Adding one to the power

If we add $1$ to the power of an exponent (the little number), it ends up
multiplying the old result by the number. Here's an example.

$$
\textcolor{green}{3}^{\textcolor{blue}{4}} = \underbrace{\textcolor{green}{3} \times \textcolor{green}{3} \times \textcolor{green}{3} \times \textcolor{green}{3}}_{\text{\textcolor{blue}{4} times}} = 81;
$$

$$
\textcolor{green}{3}^{\textcolor{blue}{5}} = \underbrace{\textcolor{green}{3} \times \textcolor{green}{3} \times \textcolor{green}{3} \times \textcolor{green}{3}}_{\text{\textcolor{blue}{4} times}} \times \textcolor{green}{3} = 81 \times \textcolor{green}{3} = 241.
$$

## Powers of 3

| Expression | Result              |
| ---------- | ------------------- |
| $3^1$      | $3$                 |
| $3^2$      | $3 \times 3 = 9$    |
| $3^3$      | $9 \times 3 = 27$   |
| $3^4$      | $27 \times 3 = 81$  |
| $3^5$      | $81 \times 3 = 243$ |

Notice how each time we increase the exponent, the result is multiplied by $3$.

## Opposite direction

We can also go in the opposite direction. Let's start at $3^2$, and divide by
$3$ to go back.

| Expression | Result                              |
| ---------- | ----------------------------------- |
| $3^3$      | $27$                                |
| $3^2$      | $27 \div 3 = 9$                     |
| $3^1$      | $9 \div 3 = 3$                      |
| $3^0$      | $3 \div 3 = 1$                      |
| $3^{-1}$   | $1 \div 3 = \frac{1}{3}$            |
| $3^{-2}$   | $\frac{1}{3} \div 3 = \frac{1}{9}$  |
| $3^{-3}$   | $\frac{1}{9} \div 3 = \frac{1}{27}$ |

Notice how $3^0 = 1$. In fact, any $x^1$ equals $1$. Why?

## $x^0$

We know that $x^1 = x$, and subtracting $1$ from the exponent divides the result
by $x$. From that, we can see that:

$$x^0 = \frac{x^1}{x} = \frac{x}{x} = 1.$$

## $0^x$

Let's try exponentiating $0$. Notice any patterns?

That's right, each result is zero. In fact, $0^x = 0$ for any number $x$.

| Expression | Result                                      |
| ---------- | ------------------------------------------- |
| $0^1$      | $0 = 0$                                     |
| $0^2$      | $0 \times 0 = 0$                            |
| $0^3$      | $0 \times 0 \times 0 = 0$                   |
| $0^4$      | $0 \times 0 \times 0 \times 0 = 0$          |
| $0^5$      | $0 \times 0 \times 0 \times 0 \times 0 = 0$ |

## Uh oh...

Wait a moment. $0^x = 0.$

And $x^0 = 1.$

So what is $0^0$? According to the first rule, it's $0$. But according to the
second rule, it's $1$. This doesn't look good.

Typically, we just define $0^0$ to be $\text{undefined}$, because we can't
evaluate.

Some computers incorrectly report that $0^0$ is `1`. They're wrong. Don't listen
to them.

## Exponential shorthand

Exponents can be really good for condensing certain math. Say we're graphing a
parabola $y = (x - 1)(x - 1)$. We can rewrite that as $y = (x-1)^2$, saving a
bit of space.
