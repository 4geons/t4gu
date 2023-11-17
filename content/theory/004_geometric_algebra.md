---
title: "Geometric Algebra"
description: ""
date: 2016-10-24
lastmod: 2016-10-24
cover: ""
coverAlt: ""
toc: true
tags: []
katex: true
---

If you are not satisfied with this introduction please consider getting the textbook 
[Geometric Algebra for Physicists,](https://www.cambridge.org/core/books/geometric-algebra-for-physicists/FB8D3ACB76AB3AB10BA7F27505925091) 
or browse the collection of free articles on the 
[Cambridge GA group website](http://geometry.mrao.cam.ac.uk/) or on [David Hestenes\' website.](http://geocalc.clas.asu.edu/)

## A New Langauge or *the* Language for Physics?

Geometric Algebra is described by Hestenes, Doran and Lasenby as the *unified 
language for physics*. But in my view it is tantamount to *the* language, and 
that's because I think all physics is geometry. But if you do not take such an 
extreme view, a "unified language" is good enough to warrant learning 
$\mathcal{GA}$.

For a great lunch-time video on this (or two or three lunch breaks) I would 
recommend 
[Anthony Lasenby\'s](https://www.youtube.com/watch?v=m7v2IUJtC3g) 
talk at GAME2020 
[A new language for physics,](https://www.youtube.com/watch?v=m7v2IUJtC3g) and 
if you have a few more lunch breaks free try this one on 
[GA and Fundamental forces.](https://www.youtube.com/watch?v=fFj4E7q4hbY)

Lasenby begins with the simple idea of composing words out of vectors, 
so take $\vec{a}$ and $\vec{b}$ in any space, and then say the 'word' "$ab$" is 
in our dictionary such that, 
$$ ab = -ba \quad\text{iff $a$ and $b$ are perpendicular}
$$
and 
$$ ab = |a||b|\quad\text{iff $a$ and $b$ are parallel}
$$
where $|v|$ denotes the length of a vector $\vec{v}$.

This already gives us impressive powers of expression if we know a little bit 
of Euclidean geometry. For instance, if we have an orthonormal frame of 
vectors, say 
$\\{e_1, e_2\\}$, then we immediately get part of the Pauli algebra,
$$ e_1e_1 = e_1^2 = 1, \qquad\text{and}\qquad e_1e_2 = -e_2e_1.$$
Then already we've got this word which squares to $-1$,
$$ I=e_1e_2, \quad\Rightarrow \quad I^2 = (e_1e_2)(e_1e_2) = -e_1^2 e_2^2 = -1 $$

Then we've got words like,
$$ x + y(e_1e_2) $$
which used to be called "complex numbers" but which we now see are natural 
and part of an *even sub-algebra* of space, since they are a sum of a scalar 
and a bivector.

What about the "words",
$$ \tfrac{1}{2}(ab + ba)\qquad\text{and}\qquad \tfrac{1}{2}(ab - ba) $$
well, with not much effort we see these are respectively symmetric and 
antisymmetric, and so can be used to define a scalar or inner product (the 
first expression) and an anti-symmetric outer product (the second expression). 

This is regardless of the relative orientation of $a$ and $b$, since we can 
decompose each into perpendicular and parallel parts, then use the first two 
words above.

So we add two new words to our dictionary, for "inner product" and "outer 
product",
$$ \begin{array}{rl}
 a\cdot b \\!\\!\\! \&= \tfrac{1}{2}(ab + ba) \\\\
 a\wedge b \\!\\!\\! \&= \tfrac{1}{2}(ab - ba) \\\\
 \end{array}
$$
Furthermore, we now have for free the word,
$$ ab = a\cdot b + a\wedge b$$

Watch that first video above for more.

## Frame Basis Vectors

Local differentiable physics can be performed with a **_graded_** algebra. 
For this we use a Euclidean or Minkowski basis. 
For computational robotics and computer graphics one would only use the Euclidean frame $\{\vec{e}_1, \vec{e}_1, \vec{e}_3 \}$ which are a set of 
basis vectors in a cartesian system $(x,y,z)$. 

For physics it is easier to begin with the spacetime algebra, since we will 
want to go straight to a Measurement Theory (i.e., quantum mechanics (QM)). 
The reason for this is that the Pauli algebra is best treated as an algebra of 
spacetime bivectors, **_not_** pure space vectors. 
This should be a strong hint to you that quantum mechanics is from the very 
start a space+time theory.
That is to say, even in the Schrödinger and Pauli theory we are really always 
doing relativity, and the orthodox matrix algebra treatments obscure this fact.

We start then with the frame basis:
$$ \\{ \vec{e}_0, \vec{e}_1, \vec{e}_1, \vec{e}_3 \\}\quad 
\text{where}\quad e_0^2=-1,\quad\text{and}\quad e_i^2=1\quad \text{for $i\ne 0$}. 
$$

Any vector can be expanded in this basis locally:
$$
 a = a^\mu e_\mu
$$
and unless otherwise necessary we drop the over-arrow symbol on our vectors, so 
$a=\vec{a}$. 
The magnitude of such a vector will be $|a|$.

When we do spacetime physics, relativistic QM in particular, the convention is 
to change symbols for the basis vectors from $e_\mu$ to $\gamma_\mu$. 
This is nothing more than a convention, and is made in deference to 
Paul Dirac who labelled his matrices $\hat{\gamma}$.

The deference being a lot more than symbolic, since the Dirac matrices do in 
fact map onto the spacetime algebra $\gamma_\mu$ base vectors! We will see 
this in a later chapter.


### The geometric product

A *geometric product* is then defined frame-free by a decomposition 
into symmetric and anti-symmetric parts,
$$ ab = a\cdot b + a\wedge b $$
The symmetric part $a\cdot b$ is the usual inner product. 
The anti-symmetric part is the outer product. 
This means $a\wedge b = -b \wedge a$.

If $a$ and $b$ are parallel or anti-parallel we will fail to generate a 
non-zero bivector and then $a\wedge b$ will be identically $=0$. 
The modulus of *any* bivector is equal to the area of the parallelogram 
formed by the two vectors. 
$$
|a\wedge b| = |a||b|\sin\theta 
$$
where $\theta$ is the angle between, or spread of, $a$ and $b$.

If $a$ and $b$ are perpendicular we will fail to generate a non-zero scalar 
and $a\cdot b$ will be identically $=0$. The modulus of *any* inner product 
is equal to the length of one of the pair projected onto the direction of 
the other scaled by the modulus of the other, that is,
$$
|a\cdot b| = |a||b|\cos\theta
$$
where $\theta$ is again the spread angle.


#### Associativity

Unless you are doing weird sh*t, associativity is a good property to have, 
especially for quantum mechanical operators. 
But we cannot derive it from the previous definitions 
(at least I do not think we can, since non-associative algebras are known), 
so we *demand associativity* of the geometric product as an axiom for the GA. 
$$ a(bc) = (ab)c = abc.$$


This nicely extends to higher grades directly from associativity for the basis 
vectors, 
so for *any* multivectors,
$$ A(BC) = (AB)C = ABC. $$ 

**Comment:** we did not need associativity to plough ahead, 
but we're interested in *physics* and later on we will justify the choice of 
the associative axiom when we arrive at the knowledge in GA the multivectors 
are the objects we use both for the physical  **states** and *also* for the 
linear **operators**. 
But the linear operators are measurement **_processes_** (abstractly speaking). 
And all known physical processes are associative (in the abstract). 
This is why our axiom of associativity is ultimately justified. 
But we need to do several chapters of ground work before we come 
full virtuous circle on that. I'm just looking a long way ahead in this 
comment.


#### Division by vectors

One powerful feature of any GA is we can divide by non-zero vectors, just use 
the inverse:
$$ b^{-1} \equiv \frac{b}{|b|^2}  = \frac{b}{b^2}.$$

Here the denominator $b^2 = b\cdot b = |b|^2$ from the definitions.

### Higher grade elements

Higher grade multivectors can be bult by combinations of simple summing and 
further wedging. So for example, in 3D spaces we can form a trivector, which 
is an oriented 3-volume, from a wedge of 3 non-coplanar vectors, say $a$, 
$b$ and $c$.
$$ T = a \wedge b \wedge c $$

If $\\{a, b, c \\}$ are co-planar then $T=0$ identically and so we fail to 
generate a trivector, or should we say, "we fail to generate a significant 
trivector."

The modulus of a trivector is proportional to a determinant for a 3-volume. 

We can continue wedging basis vectors until we hit the dimension of the space. 
For physics this will normally be $D=4$. 

> In 4D spacetime we have five grades,
$$ \text{scalar, vectors, bivectors, trivectors, pseudoscalar.} $$

The pseudoscalar $i=e_0e_1e_2e_3$ is the unit quadvector or 4-vector, which 
risks getting confused with the simple 1-vector in special relativity.

> In special relativity "spacetime" vectors like $(E,\vec{p})$  are just 
called 1-vectors in STA.

All 1-vectors thus have the dimension of the spacetime. 
Whereas 4-vectors or quadvectors are graded, they are elements of a 4D 
spacetime hypervolume or hypercube (the shape though is irrelevant).

We have already defined a lot of terms. 
I will use distinct definition paragraphs in these lectures only for emphasis, 
which in GA is important because most undergraduate students are 
thoroughly unfamiliar with the notation and lexicon.

**Definition:** The 4-spacetime pseudoscalar is denoted $i$, and is defined by,
$$ i \equiv e_0e_1 e_2 e_3.$$
It is an oriented 4-volume.

You might think the 3-space pseudoscalar aught to be something 
like $I=e_1e_2e_3$, which is ok, ok for doing robotics and stuff. 
But in physics we will see later on that it makes more sense to define a 
pseudoscalar for relative vectors (which are actually bivectors) which 
*anticommutes* with vectors, and so for a lot of physics we will use,
$$
I = (e_0e_1)(e_0e_2)(e_0e_3) = i
$$
for doing non-relativistic quantum mechanics. 
If you are strictly doing classical mechanics it is fine to use the oriented 
unit 3-volume $I=e_1e_2e_3$.

What do we mean by "oriented"? 

We mean that the quantity will change sign upon any odd permutation, 
in particular a single pair permutation, similarly to a bivector. 
Bivectors are oriented. 
The parallelogram formed by $a\wedge b$ is different to that formed by $b\wedge 
a$ by an orientation. 

So, for instance, $e_1e_2e_3 = -e_2 e_1e_3$.

This is useful in a boat load of geometry, for instance with rotations, in 
the GA it is far simpler to think in terms of the plane of rotation, which 
is a bivector, rather than the axial vector (a normal to the plane).
So a rotation (to be later defined) by a bivector $a\wedge b$ is only 
"clockwise" relative to some reference frame given by some axial vector, 
whereas the counterclockwise rotation is produced by $b\wedge a$ so no 
axial vector is needed (there is always one if we want it).

Got it? So in GA the bivector alone is sufficient to define the sense of the 
rotation, it encodes angle, plane and direction. The lot! Nice huh?

That is, GA and STA are powerful enough to very simply identify "top" and 
"bottom" of surfaces, and "left-handed" and "right-handed" for Euclidean 
3-volumes. The entire theory of determinants can be developed from this 
realization (we will not do so here). Soon we will see this provides us 
with several (not just one) "complex structures," which does not mean 
"complicated" it just means planar projected geometry.

I will denote the 3-space algebra $\mathcal{G}^3$, and the 
(3+1)-spacetime algebra $\mathcal{G}^{1,3}$ or by the other abbreviation 
STA. Even and Odd sub-algebras are denoted 
$\mathcal{G}^+_n$ and
$\mathcal{G}^-_n$ 
respectively.

### The alternative starting point

We decided to begin by defining the geometric product as a sum of symmetric and 
antisymmetric parts. But we can now also show an equivalent development, which 
would be to 'reverse engineer' the previous and start by defining, 
(<a name="eq_inner-and-outer-prod">Eq.1</a>)
$$ \begin{array}{rl}
a\cdot b \\!\\!\\!\&= \tfrac{1}{2}(ab + ba), \\\\
a\wedge b \\!\\!\\!\&= \tfrac{1}{2}(ab - ba). 
\end{array}$$ 
and we would obtain exactly the same algebra. 
From our previous starting point these are useful identities, holding for 
1-vectors, $a$ and $b$.

We **_cannot_** define inner and outer products for higher grade objects 
using the same definitions, which you will see if you try. However, we 
can define the inner and outer products, it will just be done in a 
subtly different, but easy to remember, way

### The triple products

There are several more "products" in geometric algebra than just (i) 
the geometric, (ii) the inner, and (iii) the outer. 
Further products occur when we consider the higher grades. 
So, for instance, there is a dot product with a bivector,
$$
a\cdot (b \wedge c), \quad\text{and things like,}\quad a\wedge(bcd),\quad\text{and 
whatnot.}
$$

We will not cover all the different types of product. 
But just **_take careful note_** that for a commonly employed type, 
the geometric products formed from 1-vectors and bivectors, 
there is a symmetric/anti-symmetric split, 
but **_it has the opposite signs_** to the vector geometric product, 
thus we define, for any vector $a$ and bivector $B$,
(<a name="eq_bivector_prods">Eq.2</a>)
$$
\begin{array}{rl}
a\cdot B \\!\\!\\!\&= \tfrac{1}{2}(aB - Ba) \\\\
a\wedge B \\!\\!\\!\&= \tfrac{1}{2}(aB + Ba)
\end{array}
$$
compare closely with [Eq.1.](#eq_inner-and-outer-prod)
By expanding in some randomly chosen basis vectors you can check for yourself 
$a\cdot B$ is indeed symmetric, and $a\wedge B$ is anti-symmetric.

With a bit more work we can get identities for expressions like 
$a\cdot b\wedge c$. 

I want to jump straight to a few generalizations for any space dimension, 
which introduces the full multivector algebra. 
But first some *vital* terminology (don't skip).


### Terminology --- blades and homogenous multivectors

**Notation:** the $e_1$ component (or $x$ component) of the vector $a$ could 
be denoted $(a)_1$, but sometimes we use the Einstein index notation $a^i$, 
so that we can expand in a frame basis $\\{\vec{e}_i\\}$ with the 
summation notation,
$$
a = a^i e_i
$$ 
In the full geometric algebras we need different notation for picking out 
grades of a multivector. For instance, we can add and subtract different 
grades, 
$$
M = a(b + bc)
$$
this multivector $M$ will in general have three grades: scalar, bivector and 
trivector (depending on the orthogonality of $a$, $b$ and $c$). 

**Definition:** Grade projection is denoted by the symbol 
$\langle M \rangle_n$ where this denotes "picking out only the grade-$n$ 
parts of the multivector $M$."

If you do more than a lot of mathematics with GA, you should find a lot 
of proofs can be amazingly simplified by using these 
*grade projection operators*. They are nothing fancy, they just do what 
they say: pick out one particular grade. Here is why they are so useful:

> As in Type theory, all geometric algebra identities are also identical 
grade-by-grade.

For example, suppose,
$$ A = 2.5 + \sqrt{2}\\, e_1e_2 + (1+\pi^2) e_2e_3  - 1.06\\, e_1e_2e_3 $$
then we have,
$$\begin{array}{rl}
   \langle A\rangle_0 \\!\\!\\!\&= 2.5 \\\\
   \langle A\rangle_1 \\!\\!\\!\&= 0 \\\\
   \langle A\rangle_2 \\!\\!\\!\&= \sqrt{2}\\, e_1e_2 + (1+\pi^2) e_2e_3  \\\\
   \langle A\rangle_3 \\!\\!\\!\&= - 1.06\\, e_1e_2e_3 \\\\
   \langle A\rangle_4 \\!\\!\\!\&= 0 i
\end{array} $$
and if,
$$
B = 3 A,\quad \text{then,}\quad \langle B \rangle_0 = 7.5,
\quad \langle B \rangle_1 = 0,\quad\text{etc.}
$$
Note the grade projection does not convert to scalars, it retains the grade 
structure. Meaning we can always expand multivectors,
$$
A = \sum_{n\in\\{0,\ldots D\\}} \langle A \rangle_n
$$
if we wanted to.


**Terminology:** The concept of $n$-blade or $k$-blade. Here $n$ or $k$ 
are just whole numbers, from $0$ to $D$. If a multivector, like $A$ above 
is found to have only non-zero components in a single grade, say $k$ then 
we call it a $k$-blade. 

You can convince yourself that saying "$M$ is a $k$-blade" is the same 
as saying $M$ can be written as a single wedge product of three vectors, 
say,
$$
M = a\wedge b \wedge c
$$

**Terminology:**  A "simple $k$-vector" is the same as some $k$-blade.

For example,
$$ M = \sqrt{3}\\, e_1e_2 + 4 e_2e_3 $$
is a bivector, and also a 2-blade, because of the $e_2$ in common we can write,
$$
M = e_2 (4e_3 - \sqrt{3} e_1).
$$

We have to go to 4D before we can find a homogeneous grade-2 multivector 
that is not a pure blade, for example,
$$
M = 5 e_1 \wedge e_2 + 2 e_3\wedge e_4
$$
is definitely *not* a 2-blade, because we cannot find two vectors 
whose wedge product is this $M$. (Try it!) If you can find two 1-vectors 
such that $M=a\wedge b$ then you've made a mistake somewhere.

The reason in 3D we always get pure 2-blades is because the frame vectors 
have a common point, the origin, and any two planes sharing a common point 
must share a common line, so we can always factorise the bivector.


**Terminology:**  A multivector composed of sums of blades 
*all of the same grade* is called **homogeneous**. 

For example, above, $ M = \sqrt{3}\\, e_1e_2 + 4 e_2e_3$ is homogeneous 
of grade=2.

Note, if we want to label distinct 1-vectors but use the same roman letter, 
say $a_1$ and $a_2$ we run into a clash with grade projection and scalar 
components. That is why the bra-kets "$ \langle\\,\rangle_k $" are used 
for grade projection, and superscripts used for components --- should 
this clash become an issue for you.
You could also use round brackets "$(\\,)_k$" for components, as I will 
do below in proving $ia = -ai$.

Alternatively, you can avoid this by using the vector symbol, so write 
$\vec{a}_1$ and $\vec{a}_2$. Which convention you use is up to you. 
Mostly I will just try to not run out of roman letters.


#### Multivector products

Consider a blade of grade $r$, denoted $A_r$, it has a symmetric and 
anti-symmetric product with any 1-vector,
$$
\begin{array}{rl}
 a\cdot A_r \\!\\!\\!\&= \frac{1}{2}(aA_r - (-1)^r A_r a)  \\\\
 a\wedge A_r \\!\\!\\!\&= \frac{1}{2}(aA_r + (-1)^r A_r a)
\end{array}
$$
It is a good exercise to show these are respectively symmetric and 
antisymmetric, and in particular they reduce to 
[Eq.1](#eq_inner-and-outer-prod) when $r=1$ 
(when $A$ is a 1-vector) and to [Eq.2](#eq_bivector_prods) when $r=2$ 
($A$ is a bivector).

In the case of the full multivector algebra we take these as definitions of 
the inner and outer products, without defining the geometric product, 
but now we just define the geometric product by, 
<a name="eq_aAr_geomprod">(Eq.3)</a>
$$ a A_r = a\cdot A_r + a\wedge A_r$$

Since these two terms have distinct grades we can also write,
$$
a\cdot A_r = \langle a A_r\rangle_{|r-1|},\qquad\text{and}\qquad a\wedge A_r 
= \langle a A_r\rangle_{|r+1|}.
$$

This use of grade projection facilitates more general GA expressions. 


#### The commutator  product

In physics application and group theory it is very useful to use the 
**commutator** product,
$$
A\times B = \tfrac{1}{2}\bigl(AB - BA\bigr)
$$
it comes up a lot, and is defined here for *any* two multivectors.

From the commutator we get a Jacobi identity,
$$
A\times (B\times C) + B\times (C\times A) + C\times (A\times B) = 0. 
$$

A useful identity for 1-vectors and bivectors is,
$$
B\times a = \tfrac{1}{2}\bigl(B\times a - a\times B\bigr) = B\cdot a
$$

#### Duality in 3D

The pseudoscalar is often used to make duality transforms, 
e.g., in 3-space from 1-vectors to bivectors,
$$
Ia = A
$$
here $a$ is a vector, $I=e_1e_2e_3$ and $A$ is a bivector dual to $a$. 
Also, $\vec{a}$ can be thought of as the axial vector associated with 
the bivector plane of $A$.

#### Duality in 4D

In spacetime the duality is between vectors and trivectors. 
$$
i v = V_{r=3}
$$
where $i=\gamma_0\gamma_1\gamma_2\gamma_3$. 
This makes the basis blades nicer to define in a given spacetime frame, 
since we can get,
$$
\begin{array}{ccccc}
 1\quad\&  \\{\gamma_\mu\\} \& \\{\gamma_\mu\wedge\gamma_\nu\\} \& \\{i\gamma_\mu\\}
                                                \& i \\\\
 \text{one}\quad          \&  4             \&  6                 \&  4
                                                \& \text{one} \\\\
 \\text{scalar}\quad       \& \text{vectors} \& \text{bivectors}   \& \text{trivectors} 
                                                \& \text{pseudoscalar} 
\end{array}
$$

## Linear Algebra

Those above are many of the essential tools of linear algebra in $\mathcal{GA}$ 
and *all without* matrices. 
So we can get adjoints, further dualities, all the involutions, Ideals, 
discriminants, determinants, traces, eigenvalues and eigen-multivectors, 
spectral theorems, spectral decompositions, and anything you can find in an 
advanced linear algebra course. 

There are also very useful similarity transforms and distinct operations 
like spacetime inversion, space-inversion, conjugation and reversion --- 
which are all very similar operations --- and incredibly useful.

This beats having only a mere complex conjugate if we were doing boring 
$\mathbb{C}$ algebra over a $\mathcal{V}$.

One of these, a parity operator, simply switches coordinates of a pair of 
coupled 4-geons. 
That we will learn is useful in obtaining the Pauli Exclusion principle from 
next to nothing ("nothing" except wading through all this preliminary work!). 
But we'll save that for a later chapter. 
The basic calculus is important for Lie group theory, so we'll eventually have 
to tackle it, but not too soon.

The reference for almost all the useful linear algebra (for physicists) is 
Chapter 4 of 
[Lasenby and Doran](https://www.cambridge.org/core/books/geometric-algebra-for-physicists/FB8D3ACB76AB3AB10BA7F27505925091) 
or the free online paper by 
[Hestenes, here.](https://core.ac.uk/download/pdf/82121095.pdf)

### Homegeneous mixed products

Suppose we have two homogeneous multivectors of grades $r$ and $s$ say, 
$A_r$ and $B_s$.

Then upon some thought we can ascertain their geometric product will contain 
terms of grades from $|r-s|$ to $|r+s|$ but skipping a grade each level, 
in other words, we know we can write,
$$
A_r B_s = \langle A_rB_s\rangle_{|r-s|} + \langle A_rB_s\rangle_{|r-s|+2} + 
\ldots + \langle A_rB_s\rangle_{|r+s|}
$$
(the key bit is the $+2$ not plus one on the second term, the pattern goes 
up like that in steps of grade $2$ until $|r+s|$.) 
Note also the symmetry. 
It does not matter if $r < s$, 
we get the same expansion from the magnitudes on the 
subscripts.

It is a longish but not too hard exercise to convince yourself this is true.

If you get stuck consult 
[Lasenby and Doran Chapter 4](https://www.cambridge.org/core/books/geometric-algebra-for-physicists/FB8D3ACB76AB3AB10BA7F27505925091) 
or the free online paper by 
[Hestenes, here.](https://core.ac.uk/download/pdf/82121095.pdf)

That's almost all we need for the algebra, since *any* general multivector 
is just a sum of these homogeneous types. It only leaves undone any 
*geometric calculus*, which is a little bit harder to grok, and so we 
will leave calculus aside for a later chapter.

I will refrain from going through more of this foundational slog. 
Instead if we need any special results or spiffy identities we will reference 
them from the textbook when needed.

Although, I am pretty sure I forgot something crucial in this foundational 
stuff. Let me know if I did.


#### Exercises

**Exercise 1.** Convince yourself the (3+1)-spacetime pseudoscalar $i$ is well-
defined, that is, it can only be grade=4.

**Exercise 2.** Show that $i^2=-1$, and also $I^2=-1$, for the Euclidean 
3-space $I=e_1e_2e_3$. 
But also check that while $i$ anti-commutes with vectors, $I$ does not, 
it commutes with vectors, when computing geometric products.

(These commutation/anti-commutation relations will turn out to be the classical 
geometry source of "quantum mechanics" Lie group algebras. 
Which will eventually back-up our claim that most of quantum mechanics is 
classical geometry, albeit a bit gnarly, as per T4G postulates.)

For the anti-commutativity of $i$, for example, 
although $ i a = e_0e_1e_2e_3 (a^0e_0+a^1e_1+a^2e_2+a^3e_3)$, we can 
without loss of generality (w.l.o.g) just do this for one space coordinate 
frame component, say $a^1e_1$,
$$\begin{array}{rl}
   i (a)_1 \\!\\!\\!\&= e_0e_1e_2e_3 a^1 e_1  \\\\
   \&= a^1 e_0e_1e_2e_3 e_1, \quad\text{(scalars commute with everything)} \\\\
   \&=  - a^1 e_0e_1e_2e_1 e_3 \\\\
   \&=  + a^1 e_0e_1e_1e_2 e_3 \\\\
   \&=  - a^1 e_1e_0e_1e_2 e_3 = - (a)_1 i 
\end{array} $$
You can check for yourself the same result happens with $a^0e_0$, $a^2e_2$ 
and $a^3e_3$, but why bother? All you'd be doing is changing a symbol.

Above we are of course using the geometric product definition, according 
to which,
$$ e_1 e_2 = e_1\cdot e_2 + e_1\wedge e_2 = 0  + e_1\wedge e_2 = -e_2 e_1.$$


### Algebra of the Plane

Using basic combinatorics and the orthogonality relations defined for the 
frame $\\{e_i\\}$ and the geometric product on the frame, we can easily see 
in Euclidean 2-space the geometric algebra has the following 
primitive elements:
$$ \begin{array}{ll}
\text{1 unit scalar}, \& 1 \\\\
\text{2 basis vectors}, \& \\{e_1, e_2\\} \\\\
\text{1 pseudoscalar}, \& e_1e_2
\end{array} 
$$

So we count all the elements from $2^D$, making $\mathcal{G}_2$ a $2^2 = 4$ 
dimensional algebra.  Each grade $n$, has $\left(\begin{smallmatrix} D \\\\ n 
\end{smallmatrix}\right)$ basis $n$-blades.

This forms a complex structure isomorphic to $\mathbb{C}$ if we use the even 
subalgebra.

**Definition:** The *even subalgebra*, denoted $\mathcal{G}^+$ or sometimes 
$\mathcal{R}^+$, is the closed algebra of all even grade elements in any 
geometric algebra.

So, the 1-vectors do not appear at all in the complex structure in Euclidean 
$2$-space.

Due to this isomorphism we *could* call $\mathcal{G}^+_2$ 
"the complex numbers," but the same structure recurs in all sorts of places 
in higher dimensional Clifford geometric algebra, so we refrain from 
doing so. **_There is no unique $\mathbb{C}$ in GA._**

**Exercise 3.** Show the even subalgebra of $\mathcal{G}^2$ is closed 
under geometric and inner and outer products.



### The 3-space Euclidean algebra

Using basic combinatorics and the orthogonality relations defined for the frame 
$\\{e_i\\}$, we can easily see in Euclidean 3-space the geometric algebra has 
the following primitive elements:
$$
\begin{array}{ll}
\text{1 unit scalar}, \& 1 \\\\
\text{3 basis vectors}, \& \\{e_1, e_2, e_3\\} \\\\
\text{3 basis bivectors}, \& \\{e_1e_2, e_2e_3, e_3e_1\\} \\\\
\text{1 pseudoscalar}, \& I=e_1e_2e_3
\end{array}
$$
So we have a $2^3 = 8$ dimensional algebra. 
And the binomial coefficients again agree with the number of primitive blades.

These combinatorics generalize to any whole number $D$ of space dimensions, 
and for any metric signature.

#### Special Dualities in 3D

I may have mentioned under [Linear Algebra](#linear-algebra) that duals 
appear naturally in GA, one type of duality is simply "multiplication by 
the pseudoscalar."
$$ \text{dual}(A) = i A $$
However, **_only in 3D_** do we find a special duality between vectors 
and bivectors, which is that the dual of a vector is a bivector:
$$
\begin{array}{rl}
\text{in } \mathcal{G}^3:\quad I e_1 \\!\\!\\!\&= e_2e_3 \\\\
\text{or,}\quad I e_k \\!\\!\\!\&= e_ie_j,\qquad\text{cyclic on }i,j,k\in\\{1,2,3\\}
\end{array}
$$

This is not really "special", it is more of a trap for the unwary, since it 
is the source of why quaternions were miss-used, and why the foolish use 
Gibbs axial vectors for rotations. 
The axial vector only works in 3D. 
Whereas in general $n$-D spaces the rotations are always completely 
specified by a single bivector!
(See section [Rotations from Bivectors](#Rotations-from-bivectors) below.)

#### The same duality in 4D

In the spacetime algebra (STA) the duality is between spacelike bivectors 
and timelike bivectors:
$$
i e_1e_2 = -e_0e_3
$$
for example. Where here $i=e_0e_1e_2e_3$.

This is pretty nice, it means the dual of a space rotation is a Lorentz boost. 
Make of that what you will.
We might not know this if we had stuck with Gibbs vector algebra or the 
quaternions our whole life.

You ask, "Why are these bivectors the rotations?" 
We'll get to that [below.](#rotations) 
The "looking ahead" answer is that the bivectors are the infinitesimal Lie 
generators for the rotations, not the full rotation proper.


### The pseudo-Pauli algebra

The geometric algebra just for the 1-vectors can be completely characterized 
in a one-liner:
$$
e_ie_j = e_i\cdot e_j + e_i\wedge e_j = \delta_{ij} + I\epsilon_{ijk}e_k
$$
where $\epsilon_{ijk}$ is the usual permutation symbol,and $I=e_1e_2e_3$ is 
the $\mathcal{G}^3$ pseudoscalar, a trivector.

Readers can verify this is isomorphic to the Pauli algebra in quantum 
mechanics, which is a matrix representation, defining,
$$
\hat{\sigma_1}  = \left( 
   \begin{array}{cc}
   0 \& 1 \\\\
   1 \& 0 
   \end{array}\right),\quad
\hat{\sigma_2} = \left( 
   \begin{array}{cc}
   0 \& -i \\\\
   i \& 0 
   \end{array}\right),\quad
\hat{\sigma_3} = \left( 
   \begin{array}{cc}
   1 \& 0 \\\\
   0 \& -1 
   \end{array}\right)
$$
which satisfy,
$$
\hat{\sigma_i} \hat{\sigma_j} = \delta_{ij} \mathbb{1} + i\epsilon_{ijk}\hat{\sigma_k}
$$

**Incidentally:** in the $(+\\!-\\! - -)$ metric signature I think that 
$\hat{\sigma}$ are as above, but if we go to the general relativists 
preferred metric $(-\\!+\\!++)$ then I think some of the $\pm$ signs across 
the matrix diagonals swap around. 
I will have to come back and check this.

But why should the spacetime metric matter here? We are not using 
an $\vec{e}_0$.

This relates to the reason I call the $\mathcal{G}^3$ relations the 
"pseudo-Pauli algebra" which is because we will later find that the 
Pauli algebra proper --- the one mapping onto Pauli spinors --- 
is better taken as the algebra of *relative vectors* in the STA 
(spacetime algebra). 

We'll do that in a next chapter, but just note for now what I mean by 
a **relative vector** --- which means a bivector that has a time component. 
Thus, *define*
$$
\boldsymbol{\sigma}_i = e_0 e_i
$$
which is a bivector in the STA, but gets treated as a spatial basis 1-vector 
in the Pauli algebra.

A bit confusing? Yes. 
I did not invent this terminology. 
If it were all up to me I'd just straight up say the "Pauli algebra" is 
a *bivector* algebra in the spacetime setting, namely an even subalgebra 
of $\mathcal{G}^{1,3}$.

The justification for the terminology "relative vector" comes from the 
idea that in Pauli mechanics we are non-relativistic, so time is just a 
passive background, and the bivectors $e_0e_i$ (or $e_ie_0$ for opposite 
metric) really are just like 3-space objects, 
since there is a well defined global time direction. 
Whereas for a rotationally symmetric 4-geon, or for an orbiting particle, 
the space part $e_i$ is relative, it designates a preferred spin orientation, 
or angular momentum axial vector, relative to the particle's moving frame.

The latter is only an issue in special relativity and GR when a 
global time direction is not defined.

Nevertheless, it seems sort of "deep" to me that we are implicitly using a 
spacetime perspective even in such a non-relativistic QM. 


## Bivector algebra

In $\mathcal{G}^3$ the bivector algebra has a handedness. 
We take the cyclic permutations from the set $\\{1,2,3\\}$. 
This gives a right-handed structure.
$$ \begin{array}{ll}
B_1 \\!\\!\\!\&= e_2e_3 = Ie_1 \\\\
B_2 \\!\\!\\!\&= e_3e_1 = Ie_2 \\\\
B_3 \\!\\!\\!\&= e_1e_2 = Ie_3
\end{array}$$

By contrast, Hamilton's quaternions have an induced *left-handed* structure, 
which we could get from $\mathcal{G}^3$ by putting $B_2 = e_1e_3 = -e_3e_1$.

This is why the quaternions are not suitable for generalizing rotations, 
and why the search for a natural algebra for 4D spacetime rotations was futile 
(they were looking to Octonions, which are the incorrect$^\ast$ generalization, 
the correct generalization is the spacetime algebra $R^{1,3}$ or $R^{3,1}$ 
depending on signature convention).

$^\ast$ I suppose "incorrect" but I do not really know, I guess it is possible 
to do spacetime rotations with Octonions, but it'll be awfully messy.


### The "complex" structure in $\mathcal{G}^3$...

As before with $\mathcal{G}^2$, in $\mathcal{G}^3$ we can find a closed even 
subalgebra $\mathcal{G}^+_3$. 
This will have scalars and bivectors but *also* the pseudoscalar $I$.

#### ... is related to the Pauli algebra

This even subalgebra is almost the Pauli algebra, which most people think of 
as an inherently matrix algebra over $\mathbb{C}$. 
Once we have tackled the rudimentary 3D rotations we will 
exhibit the proper Pauli algebra over the reals $\mathbb{R}$, 
for which a time-like basis vector $e_0$ is needed. 
That'll be in the [next chapter.](../005_spacetime_algebra)

The reason we cannot quite get the Pauli algebra proper from 3-space is 
because we will lack a pseudoscalar that anti-commutes with 1-vectors.
By going up to 4D spacetime, we get a proper pseudoscalar, 
and then reduce back to 3-space spin algebra by restricting to the simplest 
non-trivial even subalgebra (scalars + bivectors). 
This means just ignoring Lorentz boosts (space+time rotations) among 
our symmetries.


## Reflections and Rotations

Now we are getting closer to the gold. 
The way we rotate  multivectors is truly special and 
beautiful, and is the foundation for most of quantum mechanics over the 
real numbers instead of the complex numbers.

### Reflections

Reflections are simplicity personified in GA. 
Suppose we wish to reflect a vector $a$ about the plane with unit normal 
$\vec{n}$. Then we perform the transformation via:
$$ a \longrightarrow a^\prime =-nan $$

That's it!

You can prove for yourself this is true in all cases in any dimension D, 
either by using coordinates, or for 2D in a diagram, or using more 
conceptual reasoning. 
I like the conceptual. 
It goes like this: the geometric product $an$ has two parts,
$$ an = a\cdot n + a\wedge n $$
The first inner product is a projection of $a$, since $\vec{n}$ is unit the 
length of this scalar projection is $|a|\cos\theta$ were $\theta$ is the 
angle between $a$ and $\vec{n}$.

The second part is a bivector in the plane of $a$ & $n$, it has magnitude 
$|a|\sin\theta$.

If we now left multiply the first term, by $-n$ the first scalar term becomes 
a vector length $|a|\cos\theta$ but now directed along $-\vec{n}$, that is, 
normal to the plane of reflection but on "the other side".
You can easily see (in your mind) this is the component of the reflected $a$ we 
seek that is perpendicular to the reflection plane. 
To complete the reflection we must add to this the component parallel to the 
plane.

The product $-n (a\wedge n)$ does just this! 
To see how, recall $(a\wedge n)$ was the bivector in the plane of $a$ and $n$. 
So if we outer product this bivector with $\vec{n}$ we get zero, since 
$\vec{n}$ is coplanar with this bivector. 
So there is only a non-zero inner product term here,
$$ -n \cdot(a\wedge n) $$
For this we only need to look at the component "$a_\parallel$" of $a$ 
parallel to the plane (perpendicular to $\vec{n}$) since the other 
vector component $a_\perp$ gives a vanishing term when wedged with 
$\vec{n}$ since *it* is parallel with $\vec{n}$. So,
$$ -n \cdot(a\wedge n)  = -n \cdot a_\parallel \wedge n$$

But when a unit vector is "dotted" into any wedge product involving itself, 
like this, it is going to purely project down a dimension up to a $\pm$ sign, 
and do nothing else, so all we end up with is,
$$ -n \cdot(a\wedge n) = n\cdot n \wedge a_\parallel  = a_\parallel$$
That is precisely the component of the reflection of $a$ parallel to the 
reflection plane.

This completes the proof.

(Obviously in a video lesson I will be drawing this live. 
The videos will come later, maybe in 2023.)

If you must have visuals instead of exercising your mind, the diagram below 
gives the gist of it.

{{< reflection_GA >}}


#### A much better proof

OK, I made you read all that, but to illustrate there are often "too many ways" 
to go about proving results in GA. 
In fact I've found this very frustrating myself when learning and continuing 
to learn GA. 
It means sometimes I have no clue where to start on proving some result, 
like a *discerning* kid in a candy shop, 
and as a consequence I tend to just end up reading the original proofs, 
which probably badly curtails some good brain wiring.

However, there is a consolation for the physicist, since we're not really in 
the business of coming up with mathematical theorem--proof structures, 
we will take a proof when we can get it. 
The consolation is that if we follow the prior proofs given by our ancestors, 
we get to make more new discoveries faster. 
I liken this to computer programming: every n00bie programmer gets it drilled 
into their skull to "re-use the code." 
You never want to reinvent the wheel, but you also "must study the code" and 
**_never blindly cut & paste_** (for if you do some Zen master of the 
Dark Church of GNU will likely wipe your brain, and your code).

So the better proof?

Look back at the diagram. 
Note that $a_\parallel$ is perpendicular to $\vec{n}$, and is thus the 
component unchanged by the reflection. 
Also, $a_\perp$ is the only bit reflected, and it goes to $-a_\perp$. 
Hence,
$$ a^\prime = a_\parallel - a_\perp $$
but also,
$$ -n a_\parallel n = n n  a_\parallel  = n^2 a_\parallel = a_\parallel$$
Slick huh? Howso? Because given $n$ is orthogonal to $a_\parallel$ they 
must anti-commute, just like a pair of frame basis vectors.

(If it helps, imagine making the frame $e_1=a/|a|$ and $e_2=\vec{n}$.)

The other bit of the reflection is clearly $-a_\perp$, so we immediately see,
$$
\begin{array}{rl}
a^\prime \\!\\!\\!\&= a_\parallel - a_\perp \\\\
    \&= -n a_\parallel n - n a_\perp n\\\\
    \&= -n (a_\parallel +  a_\perp ) n  = -n a n\\\\
\end{array}
$$
in the second line we again use orthogonality, specifically 
$\vec{n}\parallel a_\perp$ so their geometric product is a scalar product 
and hence commutes.
In the last line we've just used distributivity.

This completes the proof.

Oh yes! *Distributivity* was the crucial property I forgot to discuss in the 
foundations above. Please go and add this in now! 

**Exercise 4.** Establish the geometric product distributes over addition.


#### Remarkably: these reflections work for any simple multivector

This means any *geometric* object can be reflected by the exact same operation 
as we used for the vectors!  Remarkable!

We leave the proof for you for optional homework. 
The result is for homogeneous multivectors only, 
since they are what could be called "geometric objects." 
In general mixed grade multivectors will rotate by different rules, 
such as we will find below for the **rotors** which are even grade but 
mixed grade, so should not be called "objects".
(You only need to worry about the basis $n$-blades then.)

**Exercise 5.** Prove or convince yourself any rotation anywhere can 
be generated by composing two reflections, and in the manner to be 
indicated next.


### Rotations

Associated with the bivectors for either $\mathcal{G}^3$ or STA 
($=\mathcal{G}^{1,3}$) are oriented parallelograms, as previously mentioned. 
They define rotations by identifying the plane of rotation, which means all 
we need is an angle.
This massively simplifies computations in $\mathcal{GA}$ compared to 
clunky matrix algebra or quaternion algebra.

We do so by exploiting the well-known fact that 
**_every rotation can be generated by composing two reflections, and for any space dimension $D$_** and by God$^\ast$ **_for any object of any shape or grade_**.

$^\ast$ Take this as shorthand for 'platonic' --- true in every possible world.

Now the wizardly thing is we can now rotate a vector 
$a\longrightarrow a^\prime$ using **_almost_** any old pair of unit vectors 
$\vec{n}$ and $\vec{m}$ provided simply that,

> $\vec{n}$ and $\vec{m}$ lie in the plane of rotation, and the angle 
between them is half the angle of the desired rotation.

With this stipulated (supposing we can find two such vectors) we rotate 
$a$ simply by a geometric product formed from the two reflections,
$$ a\longrightarrow a^\prime = -m(-nan)m = mn a nm. $$
Boom!

This should be spooky, since we've said "half angle." Remind you of fermions?
We'll get to this.

**Comment:** Did you catch the fact the bivector $n\wedge m$ captures the 
sense of the rotation too? 
The angle of rotation is "from $\vec{n}$ towards $\vec{m}$".
If that happened to be anti-clockwise from the perspective of an ant wandering 
around on the $n\wedge m$ plane, then a rotation performed by the bivector 
$m\wedge n$ would look clockwise. 

We now see a simplification, we define a new object called a **rotor** for 
the rotation,
$$ R = mn$$
and what we call it's **reverse**,
$$ \tilde{R} = nm $$
then a rotation is performed by the geometric product,
$$
a^\prime = R a \tilde{R}
$$
**Definition:** The **reverse** of *any* multivector is computed by 
simply reversing the order of products of all 1-vectors in the 
geometric products. Full reverse, so 
$$
A=abcd \quad\Rightarrow\quad \tilde{A}=dcba.
$$

Because this is a frame-free way to rotate vectors, it is the way to rotate 
all objects in the entire geometric algebra, so for *any* multivector $A$,
$$ A^\prime = RA\tilde{R} $$

The "small price" to pay for avoiding a matrix is that the rotation is a 
double-sided operation. But hey! Note that's no different to bra-ket 
amplitudes in quantum mechanics:
$$ \langle\psi| A | \psi\rangle $$
whaddya know!
Looks like rotation to me. $R\cong \langle\psi|$, and 
$\tilde{R}\cong |\psi\rangle$ perhaps?
In fact, this is almost exactly (up to a dilation) what Dirac's expectation 
value bra-ket is doing. 
But that's a few chapters away.
The unbearable mystery of it all.

### Rotation in terms of the bivector and the angle {#Rotations-from-bivectors}

The rotor $R$ is typically a sum of a scalar plus bivector 
(since it's a geometric product of two 1-vectors). 
So it encodes the angle and the plane together. 
But we can tease these apart to describe a rotation in another way.


## Rotors transform single-sided under some other rotation

Here is the pay cheque for this chapter. 
We get now the first glimpse that Dirac and Pauli spinors are really 
just single-sides of "an instruction to rotate" and that this explains why 
they behave algebraically like "fermions".

This will not immediately explain Fermi--Dirac statistics, because 
(a) we have no concept of an elementary particle yet, and 
(b) Fermi--Dirac and Bose--Einstein statistics are all about interacting or 
coupled 4-geons, or at least *pairs* of indistinguishable particles.
How we represent pairing of particles is a problem for a later chapter.

Before all that to come much later, let's just get the idea of how the 
rotation angle $\theta$  is expressed.

First up, $\theta$ is twice the angle between $\vec{n}$ and $\vec{m}$. 

We could figure this out similarly to the way we got the reflections. 
First, we only need to worry about the component of $\vec{a}$ that lies in 
the plane defined by the bivector $n\wedge m$ 
(since the perpendicular component is unchanged by the rotation 
(clearly unchanged by both reflections).

The rotation of just this parallel component of $\vec{a}$ (the component 
in the plane of rotation) is illustrated below. 

{{< rotation_GA >}}

OK, admittedly this is a bit unclear how the rotation from $a$ 
to $a^{\prime\prime}$ is in fact by $\theta$.
But I will assume you are convinced. 

Then we've got,
$$ a^{\prime\prime} = a_\perp - mn a_\perp nm $$
the advantage of this expression being we can easily compute the second term.
Bah, bah, blah. But we want to get the rotor. How?

Well, since $\vec{n}$ and $\vec{m}$ are unit vectors with spread angle 
$\theta/2$ from our prior work we immediately have,
$$ 
\begin{array}{rl}
 R = mn \\!\\!\\!\&= m\cdot n + m\wedge n  \\\\
 \&= m\cdot n -n\wedge m  \\\\
 \&= \cos(\theta/2) - B \sin(\theta/2)
\end{array}
$$
and similarly, 
$$ 
\begin{array}{rl}
 \tilde{R} = nm \\!\\!\\!\&= n\cdot m + n\wedge m  \\\\
 \\!\\!\\!\&= m\cdot n  + n \wedge m  \\\\
 \&= \cos(\theta/2) + B \sin(\theta/2)
\end{array}
$$
where we defined the unit bivector for the rotation $B=n\wedge m$. 
Hence the reverse of sign on the $\sin \theta$ for $R$  but not 
for $\tilde{R}$.

Now if we are given a unit bivector and angle we can compose the 
desired rotation via rotors,
$$
a^{\prime\prime} = \bigl(\cos(\theta/2) - B\sin(\theta/2)\bigr) a \bigl(\cos(\theta/2) + B\sin(\theta/2)\bigr) 
$$
which looks like a marginal improvement on matrix rotation, but it's a 
far superior improvement, since this result holds in any space dimension, 
imagine writing the 100$\times$100 matrix for this! 
Changing space dimensions changes the whole lot, 
whereas in the $\mathcal{GA}$ we do not need to alter a thing, 
this formula is universal. 
Truly universal.
It will even hold for spacetime rotations, aka. Lorentz boosts.

But we can clean it up a little. 
Note from earlier the bivector $B$ defines a complex structure,
$$ z = x + B y $$
well then, what did we learn in high school? Euler formula anyone?
So we get the beautiful formula for all rotations,
$$
 a^{\prime\prime} = e^{-B\theta/2} a e^{B\theta/2}.
$$

**Note:** also note that all unit bivectors square to $-1$, 
$$ 
B^2 = -1,\qquad\text{if}\quad |B|=1.
$$
and the rotors have a nice property you can use as a sanity check,
$$
R\tilde{R} = 1
$$
so the reverse of a rotor is it's inverse. 

Why? Well, because apart from the scalar angle $\theta$ the rotation is 
specified by a unit bivector. 
The "encoding" is that the bivector part in the rotor exponent "just rotates" 
and there is nothing out front of the exponential, so there is no dilation.

This also makes it manifestly clear the rotor rule is indeed a rotation. 
We did not fully check that it is before! 
I showed the picture, and gave some of the clues. 
But now we know for sure what we've been doing is rotations, since 
the rotation is characterised by it's symmetries: 

> Rotations are the unique smooth linear transform globally preserving 
(i) lengths and (ii) angles between vectors, and they preserve the metric.
(Reflections are not smooth.)

This is pretty much the same as you learned in school in the 2D case, 
where unit complex numbers on the circle can be used to rotate 
complex numbers,
$$
z\longrightarrow z^\prime = z e^{i\theta}
$$
only with the rotors in a $\mathcal{GA}$ we have far more power and generality, 
indeed, we have *universality*.

I will note some software below you can write this formula in and see it 
work, numerically and symbolically.

Before we head to spacetime algebra though, I want to note how rotors 
themselves transform under a rotation.

## Rotors transform single-sided

Thing is, if we rotate a rotor, say $R$, by some definite rotation rotor 
$R_1$, we get,
$$ 
R^\prime = R_1 R \tilde{R}_1 
$$
which will no longer be a rotor for rotation by the same angle as $R$. 
That seems a shame. But nothing is shameful in mathematics except obscurity 
(not even human error is shameful, unless it is deliberate and malicious 
--- plenty of good books to read on mathematical paradoxes resulting from 
simple-minded errors). 

Thing is, on the other hand, if we truly want to compose rotations to form 
a proper **_rotor algebra_** which we truly do, we damn well need the 
composition of two rotations to be another rotor. 
Thus, we really want to look at the composite rotor $R_1R_2$ to see if it 
does the job. Otherwise it'd be shameful-ish.

Let's see. Begin by just defining the, or a,  composite rotor: 
$$R_{12}=R_2R_1$$
(We are not sure it's the right one yet.)

We are going to guess, but need to prove, this will perform the composite of 
the two rotations, otherwise we will not have a good Lie algebra in 
$\mathcal{GA}$ for $\text{SO}(n)$.

Since rotations do not always commute (they do in 2D, but assume you learned 
that for at least 3D, or just try it now with a coloured cube or tea cup) we 
write the order correctly, so that from the implied reflections we are going 
to be rotating by $\theta_1$ first and then by $\theta_2$.

Next, write this out:
$$
\begin{array}{rl}
 R_2R_1 a \tilde{R_1}\tilde{R_2} \\!\\!\\!\&= R_2R_1 a \tilde{R_1}\tilde{R_2} \\\\
 \&= R_{2} \biggl\[ \bigl(\cos\theta_1/2 - B_1 \sin\theta_1/2\bigr) a \bigl(\cos\theta_1/2 + B_1 \sin\theta_1/2\bigr)\biggr\] \tilde{R_2} 
\end{array}
$$
and I won't expand the whole lot here, it gets a bit long-winded, but is straight forward, you just expand $R_2(\theta_2,B_2)$ as we did $R_1$. 
But now it's better to use Euler's exponential notation, 
because then we can manipulate the exponential arguments, 
and note the scalar angles commute with the bivectors $B$, so:
$$
\begin{array}{rl}
 \tilde{R_{12}} a R_{12} \\!\\!\\!\&= e^{-B_2\theta_2/2}e^{-B_1\theta_1/2}\\, a\\, e^{B_2\theta_2/2}e^{B_2\theta_2/2} \\\\
 \&= e^{-B_2B_1(\theta_2+B_1\theta_1)/2}\\, a\\, e^{B_2B_1(\theta_2+\theta_2)/2} \\\\
 \&= R_{12} a \tilde{R_{12}}
\end{array}
$$
which looks correct, although is that last line obvious? 
No, it is not.
What is the reverse of $R_{12}$? 
It's obtained by reversing the vectors in geometric products,
but,
$$R_{12}= R_2R_1 = (n_2m_2)(n_1m_1) $$
and so,
$$
\begin{array}{rl}
 \tilde{R}_{12} \\!\\!\\!\&=  m_1n_1m_2n_2  \\\\
 \&= \tilde{R}_1\tilde{R}_2 \\\\
 \&= e^{B_1\theta_1/2}e^{B_2\theta_1)/2} = e^{B_1B_2(\theta_1+\theta_2)/2}
\end{array}
$$
all good! 

Well, that wasn't too bad. But this just proves the composite rotor was 
indeed our guess $R_{12}=R_2R_1$. 
We haven't quite solved what happens to a rotor.

But you can now work it out logically.

### Take a random rotor $R$

What we wanna know is what happens to $R$ when we rotate by some other 
rotation operation, say $R_1$. 
What becomes of $R$ under,
$$
\mathcal{R}_{(\theta_1,B_1)}(Ra\tilde{R}) = R_1 (R a \tilde{R}) \tilde{R_1}
$$
In other words, what changes about $R$ if we've, maybe accidentally, 
rotated by $(\theta_1,B_1)$?

Well, thanks to the work above on composite rotations we have the answer. 
It's gotta be the composite rotor,
$$ R \longrightarrow R^\prime = R_1 R $$
Wow! Or whoa! (never sure which to type.)

So the random rotor does not get acted on by rotations in the double-sided 
manner of the vectors or multivectors. 
They get acted on by left multiplication! Damn!

That sounds an awful lot like spinors under rotation and boosts, doesn't it?

Yeah. Rotors *are* types of spinor. 

Here's the thing. We did not need some 
[Dirac belt trick](https://en.wikipedia.org/wiki/Anti-twister_mechanism) 
to get this, (which in any case only applies to 3D). 
(Although some 4-geons may turn out to be tethered particles, 
where the Dirac belt trick applies, in fact if they are connected by wormholes 
they surely are tethered in some way.)

Let's ask then, what rotation angle for $R_1$ (still fixed arbitrary $B_1$) 
gives back our original random rotor $R$? Is it $\theta=2\pi$.

Let's consider rotating a vector $\vec{v}$ once around a closed loop, any loop. 
Then,
$$R_1 = e^{-B2\pi/2} = e^{-B\pi}$$
But now apply this to our random rotor $R$, it must go to,
$$
R^\prime = R_1 R = e^{-B\pi} R = \bigl(\cos\pi - B\sin\pi\bigr) R = -R
$$
Holy smoke! Same wow as before.

A $2\pi$ rotation of a vector gave us a rotor that only flipped. 
But a flip is a rotation of a multivector by $\pi$, or $180^\circ$, 
so to get back the original rotor we actually need a space angle of 
$\theta=4\pi$ 
rotation from $R_1$ (like a "fermion"). 
While the *vector* we had will now go around the loop twice (like a "boson").

That's the Dirac belt property for fermions, but here for a rotor $R$. 
So we have begun to see how fermions and Fermi--Dirac statistics (perhaps) are 
related to rotational invariance. 
But this is classical geometry over the real numbers!

What's going on? This is pure classical geometry.

What's going on is the rotor is not a "real" physical thing, it's 
a **_process_**.  Why would you ever expect a *process* to behave like 
a physical object made of matter? Like a belt? No! A belt is not a process.

However, the Dirac belt trick *is* a process. Think about that!

Is this a hint while electrons and quarks are certainly *matter* 
the wave-functions we use to represent them are not? 
(Why yes, that's exactly what I think, not sure about you. I learned it 
from Hestenes.)

**Last comment for now on rotors:** I mentioned above we could prove all 
simple or homogeneous multivectors get rotated by the same law, 
double-sided action of a rotor and it's reverse. 
But these are the geometric objects. 
This means the mixed grade objects like rotors, our $R$, are not really 
"geometrically homegeneous," which means (whatever else it may mean) 
that they are not "physical things" that we could build out of lego blocks 
or drilling holes in spacetime. 

That might sound like a bit of deep philosophy, but no one could make any 
sense of it without this sort of $\mathcal{GA}$ insight. 
Yet we have it almost by accident.
But it accords with very old and ancient wisdom that *Processes* in nature 
are different Types to physical *Objects*.

Objects being things that exist and Processes being changes in Objects.

The rogue mathematician  in NSW Australia, 
[Norm Wildberger,](https://www.youtube.com/@njwildberger) 
has this view that irrational numbers and infinities are not numbers, since, 
he thinks, numbers should be sort of "real" or "mechanical" and "computable" 
whereas irrationals can never be written down or computed fully, 
but we do know processes (algorithms) that if run forever would in some 
sense "print them out." 
(Or you could use a non-relativistic Turing machine that speeds up twice every 
$1/2^n$ seconds, to get the whole infinite job done in 2 seconds.)

This is only a bit of thinking fun, I do not take it too seriously, 
since I'm a platonist. 
So to me, all numbers and geometrical objects are things conscious minds can, 
or *might* in some flashes of thought, mentally access (the *qualia*) 
anywhere there is consciousness, independently of a particular physical, 
or other type of, world.
Not that our minds are perfectly able to access perfect qualia, but we can get 
glimpses of the platonic reals. 

I like to say, no one understands or even glimpses the shape of the 
Monster Group, but everyone knows what a pure platonic perfect circle 
looks like, but they see it for real only in their mind, since every 
possible physical instance of a circle is flawed.

### Lie group generators

Above we very easily discovered the rotations are computed by exponentiating 
a bivector. The **_bivector_** completely specifies the **_rotation_**!

How come? 
Well, above we used the  unit bivectors, but we could multiply them by the 
scalar half-angles $A=B\theta/2$, they remain bivectors, so all rotations 
can be computed from rotors like,
$$ R = e^{A}
$$
A group theorist will come along and tell you that looks like a wonky 
Lie group element, only with a strange generator, 
since the "complex" number $i$ is supposed to go upstairs in the exponent.

The GA theorist says, "No, you idiot. The unit bivector $B$ is oriented 
and anti-symmetric, 
$B^2=-1$, and is isomorphic to the unit imaginary in it's bivector algebra."

Thus the bivectors *are* the Lie algebra generators for all rotation groups.


## Quick Note: Projective and Conformal Geometry 

I do not have place to cover projective or conformal geometry, but these 
topics are worth a mention, because in modern stylish theoretical physics 
they are recognized as important topics. Projective geometry is also of 
enormous computational importance in robotics. Robots "see" a 2D field, 
so like use their "brains" have to use projective geometry concepts, only 
instead of these been wired by natural evolution we will short-cut that 
and program them. (Or perhaps we should have some robot communities for 
which we wait around for them to evolve vision systems? Because you never 
know the collateral benefits!)

For theoretical physics I'm only interested in fundamental theory, but 
in both anti-de Sitter and de Sitter spacetimes the global geometry 
in an assumed approximately homogenous cosmos benefits immensely from 
using conformal symmetry, even if it is an inexact symmetry.

Geometric STA massively simplifies the algebra and computation aspects 
(both!) for Projective and Conformal geometry.

I'll leave it at that for now as a teaser, but before moving topics let's 
not some learning resources for this stuff, and some basic motivations.
The topics, should you choose to search for it, has the acronym 
**PGA** (Projective Geometric Algebra)

### Motivations

* In Projective geometry lines and points are dual, this provides plenty 
of simplifications for theorem and proof. One theorem concerning lines 
translates to a "theorem for free" about points.
* In PGA we also get planes, lines, points all "for free". Lessening our work 
considerably.
* We get all the following using the same types of geometric products:
Reflection, rotation, translation (yes!), joins and meets (intersections).


### Resources

A legend in the online GA/STA/PGA community is 
[sudgylacmoe](https://www.youtube.com/@sudgylacmoe). 

* sudgylacmoe 
[“A Swift Introduction to Projective Geometric Algebra”](https://www.youtube.com/watch?v=0i3ocLhbxJ4&pp=ygULc3VkZ3lsYWNtb2U%3D) 
--- this is a cool vdo with all the manim style.
* sudgylacmoe follow-up [“Two-Dimensional Lines are Three-Dimensional”](https://www.youtube.com/watch?v=T0b8-NJH79s&pp=ygULc3VkZ3lsYWNtb2U%3D)
* sudgylacmoe [From Zero to Geo](https://www.youtube.com/playlist?list=PLVuwZXwFua-0Ks3rRS4tIkswgUmDLqqRy) whihc is the 
[full playlist on sudgy's look into linear algebra with GA](https://www.youtube.com/playlist?list=PLVuwZXwFua-0Ks3rRS4tIkswgUmDLqqRy) 


Steven de Keninck and Leo Dorst tutorial on PGA, from SIBGRAPH-2021:
* [Bivector](https://www.youtube.com/@bivector) 
channel --- [PGA Tutorial SIBGRAPI2021](https://www.youtube.com/playlist?list=PLsSPBzvBkYjxrsTOr0KLDilkZaw7UE2Vc)

Another talk by Leo Dorst on linear algebra "done right with GA":
* [“How GA subsumnes, extends, invigorates Linear Algebra”](https://www.youtube.com/watch?v=9YR3WK2Rqto)



<div style="text-align: center;">
*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*</div>


Now back to my main content.


## Lorentz Rotations

**Note:** I might not have had time to switch Minkowski metrics above, 
that's a TODO.  But from hereon I aim to use the east coats metric (+++-).
This is to follow hints I learned about from Peter Woit and William (Bill) 
Pezzaglia --- who point out there is a physically preferred signature in our 
universe. It is not significant in classical mechanics, but turns out to be 
distinguishing in quantum physics.

Although, to my mind, it is distinguishing even in 
classical mechanics (CM)!  The reason we do not see the effect of choice 
of Minkowski metric in CM is **(a)** mostly we're doing Newtonian CM, and 
**(b)*** even in EM and SR we tend to not exploit the Clifford algebra of 
spacetime, and especially not employ the non-commutative geometry. Yes, non-
commutative geometry is classical physics.  We have all the tricks of 
Lagrangians and Hamiltonians to avoid the non-commutative algebra.

If we find ways to exploit the non-commutative geometry in CM then we should 
(I believe) find areas where the matrix representation makes a difference. 
The matrix rep. for the west coats metric spacetime algebra is 
$\mathbf{H}(2,2)$, the $2\times 2$ quaternion valued matrices. This is 
not isomorphic to the real $4\times 4$ matrix algebra which is the 
representation for the east coast metric.  If you can find a physical 
difference involving these differing representations than you've found a 
potential experimentally testable preferred choice of spacetime metric for 
our universe!  

I believe [Pezzaglia (here)](https://arxiv.org/pdf/gr-qc/9704048) 
recovered metric form invariance though, by pointing 
out most authors are not generalizing the Dirac wave mechanics fully, he 
identifies a "generalized multivector wave equation" that *does* recover 
metric form invariance. 

However, I also believe there are further subtleties than can pick out the 
east coats signature, and they involve chirality for the electroweak 
interactions. But I have not adequately explored this yet to comment any 
further. I just use this hint as motivation to redo as much STA as I can 
with:
$$
\\{\gamma_1, \gamma_2, \gamma_3, \gamma_4\\},\quad \gamma_k^2=1,\quad \gamma_4^2 = -1, \quad \gamma_\mu\gamma_\nu = - \gamma_\nu\gamma_\mu.
$$

By the way, just as a kind of friendly jibe: Hestenes-Lasenby-Doran call 
their applied GA of $C\ell_{1,3}$ the "spacetime" algebra, but that's a 
misnomer, if the order is $+$ then $-$ then their's is a timespace 
algebra. ;-)


### A $z$ Boost

The boost is a spacetime rotation.  The bivector generator is 
$$
B=\alpha e_3e_4
$$
where $\alpha = tanh^{-1}(\beta)$ is the *rapidity*. As usual $\beta$ is,
$$
\beta = v/c
$$
and the SR $\gamma$ factor is,
$$
\gamma = (1-\beta^2)^{-1/2}
$$
To produce the boost simply form the rotor for it,
$$
R = e^{B/2}
$$
To compute the transformations for the cartesian base vectors, simply 
rotate the base vectors as you would for any GA rotation:
$$
e_x^\prime = R e_x \tilde{R}
$$
this will be $e_x^\prime = e_x$ of course. The only coordinates altered 
for a $z$ boost are $(z,t)$, 
$$
\begin{align*}
e_x^\prime = R e_x \tilde{R} \\\\
e_4^\prime = R e_4 \tilde{R} \\\\
\end{align*}
$$
Since I don't trust myself on paper I use the Python package 
**[galgebra](https://galgebra.readthedocs.io/en/latest/getting-started.html)**.

```python
import sympy
from math import *
from galgebra.ga import Ga


txyz = (t, x, y, z) = sympy.symbols('t x y z', real=True)
o4d = Ga('ex ey ez et', g=[1, 1, 1, -1], coords=txyz)
e1, e2, e3, e4 = o4d.mv()
'''
Lorentz Boosts
---------------
These are STA rotations with a basis of bivectors 
   ek*e4 = sk
and "rapidity" alpha/2
   tanh(alpha) = beta = |v|/c.
'''
sec = 'Ex. Lorentz boost by beta=0.9 in the zt plane'
print(f'\n{sec}\n{"-"*len(sec)}')
beta = 0.9
alpha = atanh(beta)
gamm = 1. / sqrt(1.0 - beta**2)
B = e3*e4 * alpha / 2.0
R = (B).exp()
xb = R * e1 * R.rev()
yb = R * e2 * R.rev()
zb = R * e3 * R.rev()
tb = R * e4 * R.rev()
''' Check: 
xp = x, yp = y,
zp = gamm * (z - beta*t)
tp = gamm * (t - beta*z)
'''
print(f"Result:\n{xb = },\n{yb = }\n{zb = },\n{tb = }")
'''
Note:
The raw == comaprison doesn't work, suffers 
from fp round off.
'''
print(f"Is zb == {gamm * (e3 - beta*e4)}?, {(gamm * (e4 - beta*e3) - tb).norm() == 0}")
print(f"Is tb == {gamm * (e4 - beta*e3)}?, {(tb - gamm * (e4 - beta*e3)).norm() == 0}")
```






















## More to Come ...

Just to keep you from forgetting about T4GU, there is a lot more juicy stuff I 
have to soon write-up, including showing you how fermions and 
Fermi--Dirac statistics are associated with rotational symmetry invariance
(not just "spin-1/2") and how entanglement gives us both, 
* the Pauli Exclusion Principle (anti-symmetric wave function upon parity inversion) and 
* interference effects.

Also, the geometric algebra gives a simpler relationship between the Pauli exclusion 
principle and the field theory version (the latter being anti-commuting commutation 
relations, which are a bit baroque).

Eventually I hope to upload some software for solving the Dirac equation.
* Numerical simulations of Dirac spinors moving under a magnetic field shock, which dynamically shows how Pauli repulsion works.
* Similar numerical simulations showing how Stern--Gerlach "splitting" is a polarization effect, not a "discretized spin magnetic moment" effect.

The really juicy delicious thing is that the anti-commuting relations are not 
really for "spin-1/2" since photons and other bosons can also be spin--coupled, 
so can form composite "fermionic" states, that is, states that are coupled and which thus have Fermi--Dirac statistics.

That's what happens to photons in the Two-Slit experiment. 
They get coupled. 
No one thinks of this as "Fermi--Dirac statistics" but it really is, 
except now we will be able to understand this is really a result of spin--coupling, 
otherwise known in gauge--gravity theory as entanglement, 
otherwise known as ER=EPR wormhole topology.

Did I give too much away too early?

Thus, one goal of these theory pages is to eventually show why the 
Pauli Exclusion Principle is more about rotation invariance of singlet states 
and spin--coupling, it's not just about "spin-1/2 fermions".


## Software

You can check some of the formulas heuristically (for single instance cases) using geometric algebra packages for Maxima or Python, there is also a C++ library, probably others. 

### Python galgebra

By far the easiest I found to use has some symbolics too, 
it was the python PIP package `galgebra`:
```bash
pip3 install galgebra
```
Documentation can be found 
[here: “Introduction to using GAlgebra”](https://galgebra.readthedocs.io/en/latest/tutorials/algebra.html).
This allows you to define a frame using any metric signature, then compute 
with it. I found it *extremely* handy for checking commutation relations 
for example, almost an indispensable time saver.

Here is a little starter script to help get you going:
```python
#!/usr/bin/env python3
import sympy
from galgebra.ga import Ga
from galgebra.printer import latex
'''Define some of the Matrix Pauli algebra'''
def realpart(z):
   return z.as_real_imag()[0]


def imagpart(z):
   return z.as_real_imag()[1]


a0,a1,a2,a3 = sympy.symbols('a0,a1,a2,a3', real=True)

p0 = sympy.Matrix([[1.,0.],[0.,1.]])
p1 = sympy.Matrix([[0.,1.],[1.,0.]])
p2 = sympy.Matrix([[0.,-1j],[1j,0.]])
p3 = sympy.Matrix([[1.,0.],[0.,-1.]])

Psi = sympy.Matrix([[a0+1j*a3],[-a2+1j*a1]])
p1Psi = p1 * Psi
p2Psi = p2 * Psi
p3Psi = p3 * Psi
'''
GAlgebra little test

NOTE: we are redefining the s1, s2 by re-using the a_0, a1,...
'''
(t, x, y, z) = sympy.symbols('t x y z', real=True)
o4d = Ga('e_t e_x e_y e_z', g=[-1, 1, 1, 1], coords=txyz)
e0, e1, e2, e3 = o4d.mv()
ips = o4d.I()    # same as e0*e1*e2*e3
s1 = e0*e1
s2 = e0*e2
s3 = e0*e3
psi = a0 + a1*ips*s1 + a2*ips*s2 + a3*ips*s3

print('Sympy GALGEBRA testing')
print(22*'=')
print('Test 1. cyclic si.sj == I.sk')
print(28*'-')
s1*s2 == ips*s3
s1*s2 == ips*s3
s1*s2 == ips*s3

print('Test 2. cyclic [si, sj] == 2.I.sk')
print(33*'-')
s1*s2-s2*s1 == 2*ips*s3
s2*s3-s3*s2 == 2*ips*s1
s3*s1-s1*s3 == 2*ips*s2

print('Test 3. Checking s1.psi.s3')
print(28*'-')
s1_psi = s1*psi*s3

psi1_blades = s1_psi.blade_coefs([ips*s1, -ips*s2, ips*s3])
print('Is s1.psi.s3.grade(0) == -a2')
s1_psi.grade(0) == realpart(p1Psi[0])*e1*e1
psi1_blades[0]*ips*s1 == imagpart(p1Psi[1])*ips*s1
psi1_blades[1]*(-ips*s2)  == realpart(p1Psi[1])*(-ips*s2)
psi1_blades[2]*ips*s3 == imagpart(p1Psi[0])*(ips*s3)
```

### kingdon Geometric Algebra

Recently I found an alternative Python library for projective galgebra. It is 
called [kingdon](https://kingdon.readthedocs.io/en/latest/readme.html).
Unfortunately it doesn't seem to be as powerful for general purposes 
as `gealgebra`, for example `kingdon` cannot exponentiate to give us rotors.

However, the use case for `kingdon` is projective geometry, so it's all points 
and lines anyhow, and you rotate by a double reflection, so all you need for 
that are the two lines. I guess you could define a custom exponentiator that 
way (sandwich product given two lines). Also `kingdon` can do conformal geometry, 
so can include spheres.

Installing from bash:
```
pip3 install kingdon
```
It has numba numerical acceleration, and uses sympy for symbolic algebra.
```python
>>> from kingdon import Algebra
>>> alg = Algebra(p=3, q=0, r=0)
>>> locals().update(alg.blades)
>>> x = 2 * e + 1 * e1 - 5 * e2 + 6 * e12
>>> y = 1.5*e2

>>> print(x^y)  # outer product
3.0 𝐞₂ + 1.5 𝐞₁₂

>>> print(x|y)  # inner product
-7.5 + 9.0 𝐞₁ + 3.0 𝐞₂

>>> print(x*y)  # geometric product
-7.5 + 9.0 𝐞₁ + 3.0 𝐞₂ + 1.5 𝐞₁₂
```
A super useful feature of `kingdon` is that it supports computation in 
**Projective GA**.  For this you would use an algebra defined with a 
null basis vector, so for 3D Euclidean PGA:
```python
alg = Algebra(3, 0, 1)
```
The advantage of computing in PGA is that all rigid rotations are the same in 
any dimension, as are meets, as are joins, as are projections, and all of these 
are simple expressions involving the outer product, the regressor product, the 
projection operation:
$$
(A\cdot B) B
$$
and the sandwhich product (for rigid transforms):
$$
R^\dagger A R
$$
the latter expression being the single universal expression for all rotations 
and translations.

MathTuber 
[sudgylacmoe](https://www.youtube.com/@sudgylacmoe) has a lovely tutorial on 
[2DPGA and 3DPGA](https://www.youtube.com/watch?v=0i3ocLhbxJ4).

Although I think I will stick to `galgebra`, let's at least try a simple 
rotation. 
```python
from numpy import pi, sqrt, sin, cos

a = 2 * e1
theta = pi / 4

n = 1/sqrt(2) * (e1 + e2)
mx = cos( theta/2 ) * e2
my = sin( theta/2 ) * e1
m = mx + my

>>> print(m*n*a*n*m)
1.41 𝐞₁ + 1.41 𝐞₂
```
I haven't given much thought to how to construct a pair of unit lines like the 
above `n` and `m` given a unit bivector and an angle, but I guess it could 
be done efficiently. Then we could define exponentiation of bivectors at least, 
hence rotors. But why bother? `galgebra` gives us the power.  One promise made by 
`kingdon` is numerical computation speed using `numba`, so if we say get into solving 
the Dirac equation then maybe it'd come in handy.


### Julia Multivectors

If you want slightly faster numerics, try either 

* [SimpleGA](https://monumoltd.github.io/SimpleGA.jl/dev/)  --- this was 
developed by Chris Doran for robotics and other computer applications, so 
I'd say is highly recommended.
* Or [Multivectors.jl](https://docs.julialang.org/) 
package [Mutivectors.jl](https://github.com/digitaldomain/Multivectors.jl) --- I found this one a bit clunky.

To install Julia differs from platform to platform, my install used the 
latest Linux tarball for Intel chips:
```bash
$ mkdir /opt/julia && cd /opt/julia/
$ wget https://julialang-s3.julialang.org/bin/linux/x64/1.9/julia-1.9.3-linux-x86_64.tar.gz
$ tar zxvf julia-1.8.3-linux-x86_64.tar.gz
$ ln -s /opt/julia/julia-1.8.3/bin/julia /home/geon/.local/bin/
$ julia
...
```
For SimpleGA:
```julia
$ julialang
julia> ]
(@v1.9) pkg>  add SimpleGA
...
# (to exit pkg> mode you hit Backspace on your keyboard)
...
julia> using LinearAlgebra
julia> using SimpleGA
julia> e = GA20.basis
2-element StaticArraysCore.SVector{2, SimpleGA.GA20.Odd{Int8}} with indices SOneTo(2):
 1e1
 1e2

julia> a = e[1] + e[2]
1e1 + 1e2

julia> b = 2.0*e[1] + 3*e[2] 
2.0e1 + 3.0e2

julia> a*b  # Evaluates the geometric product of a and b.
5.0 + 1.0I2

julia> 

```

For Multivector.js:
```julia
julia> ]
(@v1.9) pkg> registry add
julia> import Multivectors
...
julia> using Multivectors
julia> @generate_basis("+++", true)
julia> a = 0.0e₁+0.0e₂; b = 1.0e₁ + 0.0e₂; c = 0.0e₁ + 1.0e₂;  # a simple right angle triangle
julia> A = (b-a)∧(c-a)  # twice the area of the triangle, but with oreintation info. 
1.0e₁₂
```

## Caveats

I am trying to limit the mathematical verbiage, but this means more plain 
English than a traditional textbook. However, I am also trying to limit 
the length of these articles. It is likely that some readers will feel there 
is missing content or a few 
big skips over crucial concepts or mathematical development.
If you feel that is strongly the case, please note exactly what you think 
is missing and [sign-up for donations,](https://ko-fi.com/achrononmaster/)  
then give yourself licence to email me about your notes. That goes double 
for any errors you find. If you find an error just email me and do not 
even worry about donating cash.

If you donate via [Ko-fi.](https://ko-fi.com/achrononmaster/) I will take into 
consideration your comments.


<table style="border-collapse: collapse; border=0;">
    <colgroup>
       <col span="1" style="width: 25%;">
       <col span="1" style="width: 35%;">
       <col span="1" style="width: 25%;">
    </colgroup>
<tr style="border: 1px solid color:#0f0f0f;">
<td style="border: 1px solid color:#0f0f0f;"><a href="../003_wigner">Previous</a></td>
<td style="border: 1px solid color:#0f0f0f; text-align:center;"><a href="../">Back to Theory</a></td>
<td style="border: 1px solid color:#0f0f0f; text-align:right;"><a href="../005_spacetime_algebra">Next chapter</a></td>
</tr>
<tr style="border: 1px solid color:#0f0f0f;">
<td style="border: 1px solid color:#0f0f0f;"><a href="../003_wigner">Wigner and Particles</a></td>
<td style="border: 1px solid color:#0f0f0f; text-align:center;"><a href="../">TOC</a></td>
<td style="border: 1px solid color:#0f0f0f; text-align:right;"><a href="../005_spacetime_algebra">Spacetime Algebra</a></td>
</tr>
</table>
