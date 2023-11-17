---
title: "Spacetime and Pauli Algebra"
description: ""
date: 2016-10-26
lastmod: 2016-10-26
cover: ""
coverAlt: ""
toc: true
tags: []
katex: true
---

A good back-up reference on spacetime algebra (STA) is the classic book by David Hestenes [Spacetime Algebra.](https://link.springer.com/content/pdf/10.1007/978-3-319-18413-5.pdf) 
There is a free article length preprint [Spacetime physics with geometric algebra, here.](http://reprints.gravitywaves.com/AJP/Hestenes-2002_SpacetimePhysicsWithGeometricAlgebra.pdf)

Please do note that I prefer the general relativist's metric convention $(-\\!+\\!++)$ whereas Hestenes, Doran and Lasenby use the particle physics convention $(+\\! -\\! -\\,-)$. 
This makes a difference in some of the fussy details for the Lie Algebra commutation relations, which although a headache, can be a good exercise for you to get straight at least in your own private notes.

Caveat: I have to admit spacetime algebra is tricky for me, 
do it for too long and I will make a $\pm$ sign mistake, which stuffs me up for hours. 
If you spot any let me know, please.

We are not going to get to Dirac spinors in this chapter, 
since there is a bit of work to do just to get to the non-relativistic Pauli spinors. 
But what we find, and this is the big pay cheque, 
is that the Pauli spinors *have* to use a proper sub-algebra of the full 
spacetime algebra, and we **_cannot drop_** the timelike basis vector 
$e_0$ or $\gamma_0$.
The Pauli algebra is still only 8-dimensional, 
but we must use the timelike $\gamma_0$.
It is embedded in spacetime.

Quantum mechanics forces us into this position! So QM was already, all along, 
unified with Einstein's spacetime, people just did not know it, 
because they were doing matrix mechanics instead of geometric algebra.
(At least that's my amateur take on a bit of academic physics sociology.)


## Prerequisites

You should go through the [geometric algebra](../004_geometric_algebra) basics.
We already introduced the basics there.

### Refresher: the spacetime Clifford geometric algebra

To refresh your memory, locally at any 
point in spacetime we can define a 1-vector frame:
$$ \\{\gamma_\mu\\}\quad\text{for}\quad \mu\in 0,1,2,3.
$$
with the 16-dimensional graded Clifford algebra, <a name="Eq.1">(Eq.1)</a> 
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
satisfying,
$$
\begin{array}{ll}
\& \gamma_\mu \cdot \gamma_\nu = \eta_{\mu\nu} \\\\
\text{with tensor structure:}\quad\& \gamma_\mu\gamma_\nu = \gamma_\mu\wedge \gamma_\nu = \tfrac{1}{2} (\gamma_\mu\gamma_\nu  - \gamma_\nu\gamma_\mu)
\end{array}
$$
where $\eta_{\mu\nu}$ is your Minkowski metric. 
I prefer $(-\\!+\\!++)$ if that's alright with you, but that puts me at $\pm$ sign odds with some sections of Hestenes, Lasenby & Doran, so I cope.

#### The time-space metric

The $(-\\!+\\!++)$  metric choice could be called time-space, since... time goes first,
if we care to use nice linguistics, which I do, but I tend to lapse 
into writing "spacetime algebra" which is my fault.

My point is this distinction matters, although you would never know it if you 
spent your whole life doing GR with tensor calculus. 
We can (later on) show that the time-space metric is a superior convention, 
and that'll be in the context of particle physics and the Standard Model 
gauge symmetries, but I have not written those notes yet, 
so you'll have to trust me somewhat on this, and that's just to willingly 
suffer the pain of getting $\pm$ signs occasionally wrong when we accidentally 
refer back to Hestenes, Lasenby & Doran (from hereon christened "HLD").

 
## Rotations and Boosts

The space bivectors,
$$ \gamma_i\wedge\gamma_j = \gamma_i\gamma_j,\quad\text{for}\quad i,j\in 1,2,3
$$
define 3-space rotations *exactly* as in the geometric algebra $\mathcal{G}^3$ 
studied in the [last chapter.](../004_geometric_algebra)

Recall if $\theta$ is the angle of rotation then we only need one other bit of data, the plane of the rotation, and this is true in any space dimension, not just $D=3$. 
Then the total bivector defining the rotation can be written,
$$
B = -\hat{B}\theta/2
$$
where $\hat{B}$ is the unit bivector, which in general is a sum of one or more of the basis spacelike bivectors, $B_k = \gamma_i\gamma_j$ (cyclic in $\\{1,2,3\\}$). 
The sense of the rotation is the same sense as the orientation of the unit bivector $\hat{B}$, so the opposite sense to $B$.
The complete rotor for the rotation is then,
$$
R = e^{B}
$$
and to rotate any multivector object (homogeneous grade) $M$ we just do the transform using the geometric product,
$$
M \longrightarrow M^\prime = R M \tilde{R}.
$$
So simple. We do not even need to number this equation for reference, 
it's so easy to remember.  But wait, there's more!

"Why the blazes stop at the spacelike bivectors, dope?" you ask. Indeed.
No reason to stop there. 
We get "rotations" also from the timelike bivectors which are of the form,
$$
A = -\gamma_0\gamma_i \theta/2,\quad\text{for}\quad i,j\in 1,2,3.
$$
or $A=-\gamma_i\gamma_0 \theta/2$, since I'm never quite sure about 
my signs and metric signature.

What the heck are these things when exponentiated into timespace rotors?

The very cool thing about geometric algebra is that in the STA the Lorentz boosts are precisely these rotations! 
Plain rotations. 
$$
\text{Lorentz boost rotor:}\quad L = e^{A} 
$$
They act as boosts due to the metric structure. 
The Lorentz transform to the boosted frame for *any* geometric object 
(homogeneous grade multivector, $M$) is,
$$
M \longrightarrow M^\prime = L M \tilde{L}.
$$
No messy tensor or matrix algebra required.

(Tensor products are needed in STA only when we look at entanglement. 
For general relativity you could also use tensors, but for most mundane 
purposes you can do calculations in GR using a fiducial frame basis and 
treat gravity as pure gauge. 
See the [Gauge Theory of Gravity papers.](https://arxiv.org/pdf/gr-qc/0405033) 
I will not be looking much at solutions to GR on the T4GU website, 
except by reference and citation when solutions need to be referred to.)

**Exercise 1.** You should not miss out on the fun. 
So prove to yourself the $L$ do indeed perform Lorentz boosts.

**Exercise 2.** While you're at it, what does the boost angle $\theta$ correspond to in terms of the orthodox Lorentz "rapidity" $\alpha$?

For Exercise 2, recall the terminology:
$$
\begin{array}{rl}
\beta \&= v/c,\\\\
\text{also,}\quad \beta \&= \tanh \alpha.\\\\
\text{Rapidity,}\quad \alpha \&= \tanh^{-1}\beta, \\\\
\gamma \&= (1-\beta^2)^{-1/2} = \cosh\alpha,\\\\
\beta\gamma \&= \sinh\alpha.
\end{array}
$$
That should do it.  In geometric algebra the natural parameter is the rapidity $\alpha$. In terms of which the rotor for each of the *standard* boosts becomes,
$$
L = e^{-\gamma_0\gamma_i \alpha/2}
$$

The previous textbook and article references tell you if you get stuck. 
But I recommend peeking at the solutions only a little and completing 
the exercise yourself, as far as possible.

 
### Skipping a bunch of stuff...

All sorts of basic identities and skills for being able to manipulate spacetime algebra (STA) objects should be studied now. 
I will skip all that and refer you instead to textbook references,
* [Chapter 5](https://www.cambridge.org/core/books/geometric-algebra-for-physicists/FB8D3ACB76AB3AB10BA7F27505925091) of Lasenby and Doran [Geometric Algebra for Physicists.](https://www.cambridge.org/core/books/geometric-algebra-for-physicists/FB8D3ACB76AB3AB10BA7F27505925091)
* For free online study of the same stuff there is,
   - Doran's Thesis [Geometric algebra and its application to mathematical physics.](https://aspace.repository.cam.ac.uk/bitstream/handle/1810/251691/Doran_1994_PhD-18948_NewTypesetVersion.pdf)
   - Hestenes, [Spacetime physics with geometric algebra](http://reprints.gravitywaves.com/AJP/Hestenes-2002_SpacetimePhysicsWithGeometricAlgebra.pdf) (a little quirky, if you like zitterbewegung).

   
## The Pauli Algebra for 3-space

This next major bit of work is critical. We are getting closer to the 
*Measurement Theory* heart of QM. 
So allow me a bit of discursive pedagogy.

Sometimes the Pauli algebra can be denoted $\mathcal{G}^+_3$ but I dislike that suggestion because we are going to find that we need the spacetime basis vector 
$\gamma_0$, so sometimes I will just denoted the Pauli algebra $\mathscr{P}$.


### A couple of morals for quantum mechanics

1. In a physical measurement theory (which is what QM is) all measurements should be able to be expressed geometrically.
   <br>
   <br>
   For sure this is a moral statement, but so what? I'm making it! Measurement instruments are geometric objects. Got a problem with that? 
   <br>
   <br>
2. The Pauli algebra is the apparatus for non-relativistic QM. But time is still a dimension, so we have to see how the Pauli Algebra is a sub-algebra of the full 16-dimensional timespace algebra (the Dirac Algebra).

OK, so what morals 1 & 2 *together* say is that we cannot get away with dumb 
old Euclidean 3-space. We have to include time in the geometric basis! 

### The solution, relative vectors from bivectors

The elegant solution (and we'll see *a posteriori* the only realistic solution) is that the basis "vectors" for the 3-space Pauli Algebra have to be **bivectors**. Why?

Because we need a complex structure, or more accurately, we need rotational symmetry built-in to the Pauli Algebra. But *why?* 

Because in QM we already know from hard sweat and tears that the "elementary 
particles" (a linguistic error) have intrinsic rotational symmetry, 
they are Lie algebra elements of the fundamental spacetime invariances, 
the Poincaré group.

OK, so you could pretend to be Archimedes and fret and hack around with this 
moral idea for a while, and I hope you do. You'll eventually figure out that 
the proper Pauli bases are *relative vectors*, which are spacetime bivectors, 
defined by using the time basis vector $\gamma_0$ from the STA, in deference 
to Wolfgang Pauli we denote these basis vectors by Greek sigma's, $\boldsymbol{\sigma}$. 
For my preferred $(-\\!+\\!++)$ metric we have,
$$
\boldsymbol{\sigma}_i = \gamma_i\gamma_0
$$
(In most GA textbooks these $\sigma$ are boldfaced font, rather than over-arrowed. That's because over-arrows $\vec{v}$ are really *only* for 1-vectors, and these are bivectors!)

**Note and Warning:** If you use the $(+\\!-\\!- -)$ metric I think the 
definitions have to be the opposite bivectors, so you'd use 
timespace bivectors as the relative vectors,
$$
\boldsymbol{\sigma}_i = \gamma_0\gamma_i \quad \text{in the $(+\\!-\\!- -)$ metric.}
$$ 
((let me know if I've got this "wrong". It is only a convention.))

Since we will use $\sigma$ only for the Pauli basis we can drop the boldface type, 
but for Pauli states that are vectors (column spinors) we will need boldface to distinguish them from Euclidean 1-vectors, hence,
$$
a \Rightarrow \text{it's a 1-vector},\quad\text{while}\quad \boldsymbol{a} \Rightarrow \text{it's a relative vector, a bivector.}
$$
Nevertheless, for non-relativistic QM we treat the $\boldsymbol{\sigma}$ 
*a bit like* basis vectors, for the Pauli Algebra. 
In fact *a lot like*, they *will be* the base vectors, 
or if your prefer... "the base elements."
The $\\{\boldsymbol{\sigma}_i\\}$ *define* the Pauli Algebra.

The terminology "relative vector" should be used, since it correctly reminds us 
the objects built from the $\boldsymbol{\sigma}_k$ are vectors $(\gamma_k$) in a frame with a preferred time orientation $(\gamma_0$). 
You have to specify the particle's clock direction to do quantum mechanics 
properly in other words.

**Exercise 4.** Verify the algebra of the $\boldsymbol{\sigma}_k$ obey the same 
algebra as the orthodox Pauli matrices. (Up to possible $\pm$ signs, since 
recall I've used the $(-\\!+\\!++)$ convention.)

Hint: recall (or know) that the Pauli *matrix* algebra over $\mathbb{C}$ is,
$$
\\hat{\sigma}^2 = -i\hat{\sigma}_1\hat{\sigma}_2\hat{\sigma}_3 = \mathbb{1},\quad\text{and}\quad \hat{\sigma}_i\hat{\sigma}_j = i\hat{\sigma}_k,\quad\text{and cyclic}.
$$
I should be damned if I write out the matrices in these web pages. 

However, I will here say that I did the exercise and for my convention the 
Pauli matrices in $(-\\!+\\!++)$ signature are, 
$$
\hat{\sigma}_1 = \left(\begin{array}{cc}
0 \& 1 \\\\
1 \& 0
\end{array}\right) ,\qquad
\hat{\sigma}_2 = \left(\begin{array}{cc}
0 \& -i \\\\
i \& 0
\end{array}\right) ,\qquad
\hat{\sigma}_3 = \left(\begin{array}{cc}
1 \& 0 \\\\
0 \& -1
\end{array}\right) ,\qquad
$$
which agree with the HLD convention. 
So that means the "mostly $+$" metric signature must differ with HLD later on 
when we do the Hermitian conjugation and space conjugation, if memory serves.

I did this a long time ago in Python with `galgebra` so today I decided to 
try it with Julia [Multivectors.](https://github.com/digitaldomain/Multivectors.jl)
I found it more annoying than Python, but it works. 
One tip is to define your own Pauli relative vectors as numeric types, 
which is what I do on the third line of the code list below. 

Another tip is because Julia array indexes from 1, 2,... it's best to use `e₄`
as your $\gamma_0$.

Another tip: note the [Unicode input methods](https://docs.julialang.org/en/v1/manual/unicode-input/) for Julia, which the [Multivector](https://github.com/digitaldomain/Multivectors.jl) package uses extensively.

Here are some scraps you can use to get you going. 
First open up a Julia console session. 
I'll test the particle physics "mostly minus metric" convention:
```julia
julia> using Multivectors
julia> @generate_basis("---+", true)
julia> s1=1.0e₄*1.0e₁; s2=1.0e₄*1.0e₂; s3=1.0e₄*1.0e₃; I=1.0e₄*1.0e₁*1.0e₂*1.0e₃
1.0e₁₂₃₄

julia> (s1*s1, s2*s2, s3*s3, I*I)
(1.0, 1.0, 1.0, -1.0)

julia> (s1*s2 == I*s3, s2*s3 == I*s1, s3*s1 == I*s2)
(true, true, true)
```
All right. Try testing some of the other Pauli algebra identities for yourself.

Now let's check the "mostly $+$" metric convention:

```julia
julia> using Multivectors
julia> @generate_basis("+++-", true)
julia> s1=1.0e₄*1.0e₁; s2=1.0e₄*1.0e₂; s3=1.0e₄*1.0e₃; I=1.0e₄*1.0e₁*1.0e₂*1.0e₃
1.0e₁₂₃₄

julia> (s1*s1, s2*s2, s3*s3, I*I)
(1.0, 1.0, 1.0, -1.0)

julia> (s1*s2 == I*s3, s2*s3 == I*s1, s3*s1 == I*s2)
(true, true, true)

julia> (s1*s2-s2*s1 == 2*I*s3, s2*s3-s3*s2 == 2*I*s1, s3*s1-s1*s3 == 2*I*s2)
(true, true, true)

julia> # they should anti-commute:

julia> (s1*s2+s2*s1, s2*s3+s3*s2, s3*s1+s1*s3)
(0.0e₁₂, 0.0e₂₃, 0.0e₁₃)
```
Notice I did a few more checks there for safety. Looks all good to me. 
If you try reversing those `s1`, `s2`, `s3`, to the previous metric signature 
version I think you'll find the anticommutators change sign, disobedient to the 
Pauli algebra, naughty, naughty. 

I might still come a'cropper when we get to the Dirac algebra with the 
$\pm$ signs.


#### Why did we not do this in classical mechanics?

CM is _**not** a measurement theory_, that's why, so the moral constraints 
are not as severe. At risk of repeating some of the 
[philosophy pages,](/t4gu/philosophy/) I want to emphasise this point. 
So far all we've done is classical geometry, and yet we've almost recovered 
Pauli spinors (and are about to do so, very soon).

In CM we can be totally cavalier and do not have to give a fig about 
measurements. This is because we can always assume taking as low energy a 
probe as we care and making a measurement without disturbing the system 
*to within our desired tolerances*. 
We always disturb the system, so quantum mechanics via Heisenberg uncertainty 
is already present in classical mechanics! 
The point is, *we care not*, because we have $\hbar\rightarrow 0$.

*If* we constrain ourselves in classical mechanics to some minimal but 
large sized glob of a probe, then our *effective* $\hbar$ is *not* zero, and 
we then have to worry the fig about non-commuting observables, and we'd have 
to invent quantum mechanics --- a measurement theory.

But we don't. 

Because no one from Adam to Newton to Planck gave a crap about how small a 
measurement probe could be. 
In fact olde physicists always idealized the heck out of nature and assumed all 
measurement probes could be taken to be so small they were invisible 
(except for their effects on our instruments and eyeballs).

One other way to think about it is that the main difference between 
QM and CM, choice of units permitting, is that one has $\hbar=1$ 
and the other has $\hbar=0$.

We will see this again when, eventually, we redo Wigner's classification of 
the elementary "particles" in a spacetime algebra framework. 
In classical mechanics (CM) we still get non-trivial commutators, 
but they always have an $\hbar$ in front, 
i.e., a factor of $1.0$, and it's only by making the gross "mistake" of 
setting that to $0.0$ that we recover CM.

So in a sense classical mechanics was an inconsistent theory from the get go, 
but no one cared because they could always imagine setting $\hbar=0$, 
and of course did not even bother thinking about that! 
Because none of us have a time machine we can go back with and worry them 
about it.

Last note here: now don't be a nerd and tell me QM$\rightarrow$CM is more than 
just setting $\hbar>0$. For sure it is more, but that's due to dynamics, 
not to the underlying symmetry generators that classify the elementary particles. 
Anyone without a particle postulate is not going to be doing QM, 
and likely will be doing something a lot like CM.
 

<div style="text-align: center;">* &nbsp;&nbsp;&nbsp;&nbsp; * &nbsp;&nbsp;&nbsp;&nbsp; *</div>
 
At this point I'd make a choice about whether to now teach Pauli spinors, 
or do more terminology, namely the conjugation, inversions and parity 
operations, or principle *involutions*. 
Since we can understand the Pauli spinors without spacetime and space 
conjugacy or time inversion, I've decided to do the Pauli spinors first. 
 
 

## Pauli Spinors

By the end of the [chapter on Hestenes spinors](../010_hestenes_spinors) 
we will have tamed Dirac spinors, but all in good time. 
The more modest aim for the current chapter is to just do the non-relativistic case of Pauli spinors. 
Since we need the spacetime relative vectors (bivectors) for this, it is still timespace algebra, so this is the appropriate chapter for this build-up work.

I thought about diving right into this, ahistorically, but if you prefer a little 
motivation --- why one would even *think* of looking for a GA representation of 
Pauli spinors --- then the section 8.1 in 
[Lasenby and Doran](https://www.cambridge.org/core/books/geometric-algebra-for-physicists/FB8D3ACB76AB3AB10BA7F27505925091) 
is a good enough read. 
I had a second thought and felt I should just make a comment or two in plain 
English about their lead-in, but from a slightly different perspective.

What they say is that the matrix representation for the "spinor", which is,
$$
|\psi\rangle = c_1 |\uparrow\rangle +c_2|\downarrow\rangle 
$$
leads the blind physicist to think the state of the electron is in a 
superposition of up and down, relative to some magnetic field alignment 
(since that's how we measure the magnetic moment hence spin orientation). 

The trouble with that view is that there's no reason to suppose there is any 
superposition, and one can instead take Ballentine's view that the mixture of 
the two orthogonal states is statistical. 
Which "only" leaves their interference to be puzzled over (a big puzzle to be sure). 

The coefficients $c_1$ and $c_2$ can thus be thought of as statistical weights, 
but which can interfere, hence are geometric quantities 
(in the orthodox treatment they're complex numbers).
And indeed this more "Ballentinian view" is more or less the stance of T4G theory 
--- if we suppose we did not know about wormholes and ER=EPR. 
The interference will be accounted for later on when we study pairs of coupled spins, 
in our [chapter on the Pauli exclusion principle](../5_pauli_ex_entanglement) 
and the [chapter after that one on Interference.](../7_interference_from_entanglement)

Lasenby & Doran have not got to this view yet, and so take a more relaxed view 
that observes simply that the algebra of the Pauli matrices $\hat{\sigma}_i$ is 
the same (isomorphic to) the algebra of the spacetime relative vectors (time-like basis 
spacetime bivectors) in the even sub-algebra of the STA.

So their motivation is simply to look at this similarity, and so seek to find 
a way to replace all the matrix mechanics with spacetime algebra mechanics.  
They proceed to do just this, and that's what I'll cover here. 
But I wanted readers to know I have more sinister darker motives 
(if you like to think of wormholes as sinister) which I think is best kept in 
the back of your mind when reading this next stuff.

Why?  Because it primes you to follow me down the wormhole with the White Rabbit.

OK. Enough jokes and lame humour. Once you've got this mad idea to replace 
matrix mechanics with $\mathcal{G}^{1,3}$ geometric algebra, it's only at most an afternoon on your own (or a lazy week) to figure out what the mapping must be. 
The mapping exists, I'll give you that! So the exercise is to find it. 

If you do not have an afternoon to spare, let me spare you the time if you like, 
so just read on.
But really you should stop at any point out from here to complete this mapping 
yourself and check it with the software, so you can avoid silly mistakes. 
It's a decent little challenge, and I just *hate* to deprive anyone of the chance 
to solve the puzzle.

First note what needs to be done. The Pauli spinor is a $2\times 1$ column 
vector with complex entries. The clue to finding the mapping from Pauli's 
$\hat{\sigma_i}$ and $|\psi\rangle$ $\mapsto$ to HLD's $\boldsymbol{\sigma_i}$ 
and rotor $\psi\propto R$ is firstly in the necessary 
relation between the coefficients $c_1$ and $c_2$, which I guess should really 
be labelled $c_\uparrow$ and $c_\downarrow$, if we were being nice. 

These are underdetermined up to a unit phase factor of course 
(how highly unphysical!) so as long as we know that we can use either an 
analytical determination of their relationship, or a heuristic one that is 
just as good. 

Now I'd prefer the analytic, but Lasenby & Doran give that already in their 
Section 8.1 pages 269--271, using conjugation relations and whatnot, 
it's a bit boring. So why repeat? Instead I'll give you a nice 
argument you can probably follow half drunk. 
The price we pay is more words, but the benefit is less math.
(This'll be useful too, we'll use it again to get Pauli Exclusion.)

* The amplitudes must square sum to $1.0$ by unitarity (probability conservation).
* The spin measurements should be symmetric w.r.t. $\uparrow$ and $\downarrow$, hence w.r.t. $c_1$ and $c_2$.

So $|c_1|^2 + |c_2|^2 = 1$. Now *physically* we should be able to smoothly go from 
a magnetic field measurement aligned $\uparrow$ all the way to $\downarrow$ 
by rotating our magnet, and nothing catastrophic should occur, it should 
change $c_1$ and $c_2$ smoothly (and in the laboratory it does, 
or so I've been told).

The functional relation is then a smooth one varying with the angle between the 
electron's spin and the magnetic field direction say $z$, call this angle 
$\theta$ and let $\uparrow$ alignment of the magnetic field be $\theta=0$, 
and $\downarrow$ be $\theta=\pi$. 
(The choice of which is $\theta=0$ is free to make, the spread is not, 
it has to be $\pi$ radians.) So, the amplitudes are functions just of this angle,
$$ 
c_1=c_1(\theta),\quad c_2=c_2(\theta). 
$$
If the electron is initially aligned $\uparrow$ then $c_1=1$, 
likewise if the electron is initially down then $c_2=1$.

So far, we could set up any crazy experiment with magnetic field polarizers, 
and so the angular dependence of $c_1$ and $c_2$ could in general be with 
some arbitrary phase factor, say $\omega$,
$$
\text{such as,}\quad c_1=f(\omega\theta), \quad c_2=g(\omega\theta).
$$
since this phase factor does not have to effect the constraint 
$|c_1|^2 + |c_2|^2=1$. 
But for purposes of this derivation it's fine to take a specific measurement 
set-up with $\omega=1$, since if we can derive the relations with a specific 
set-up they have to generalize to *any* experiment, because the superposition 
$|\psi\rangle$ is independent of our measurement apparatus.

The specific set-up to keep in mind is the Stern-Garlach filter:

{{< Stern_Gerlach >}}

In *this* experiment we have more symmetry than some arbitrary crazy mix of spin filtering. This makes determination of the $c_1$ and $c_2$ from "physical" 
principles a lot easier. No quantum postulates required.

For instance, by the symmetry principle at $\theta=\pi/2$ there should be no preferred 
spin measurement deflection by the magnetic field, so $c_1(\pi/2)=c_1(\pi/2)=1/\sqrt{2}$.
So far then we've got the constraints:
$$
\begin{array}{ll}
c_1(0)= 1, \& c_1(\pi)=0, \\\\
c_1(\pi/2)= 1/\sqrt{2}, \& c_2(\pi/2)=1/\sqrt{2}, \\\\
c_2(0)= 0, \& c_2(\pi)=1.
\end{array}
$$
(up to an overall multiplicative phase.) 

The next step is to again appeal to "physicalism". 
We say we expect symmetry between $|\uparrow\rangle$ and $|\downarrow\rangle$ 
and between $c_1$ and $c_2$ as the magnetic field is rotated smoothly around 
from $\theta=0$ to $\theta=2\pi$. 
So a linear function  like $c_1(\theta)=  1 - \theta/\pi$ is "not physical." 

(That's because for this $|c_1|^2$ the first derivative is not defined at 
$\theta=n\pi$, so it's "not smooth" as a probability amplitude. 
We physically desire a function that looks more like experimental 
spin projections, and so the functions $f(\theta)$ and $g(\theta)$ should slowly and smoothly approach their limits as $\theta\rightarrow n\pi$.)

What we'd expect is the spin $\mathbf{S}$ projects onto the 
magnetic field direction "like a phasor rotating around a circle" projects 
onto a side-on view. 
But we know what that projection is from trigonometry, it's a cosine. 

However, not quite a cosine. 

**(i)** first the probability $|c_1|^2$ has to go as above, from $1$ to $0$ as 
$\theta$ rotates from $0$ to $\pi$. But then also,  
**(ii)** completing a full circle the 
reverse must happen by symmetry (since for the spin experiment $\theta$ is the same 
as $\pi+\theta$).

Hence,
$$ 
c_1(\theta) = \cos(\theta/2),\qquad\text{and}\qquad c_2(\theta) = \sin(\theta/2)
$$
is a valid physical solution. Up to a phase factor. 
The Pauli spinor is then, in matrix form, 
$$
\psi = \left(\begin{array}{cc}
              \cos(\theta/2) e^{i\alpha} \\\\
              \sin(\theta/2) e^{i\beta} \\\\
             \end{array}
        \right)
$$
where we've changed notation, $|\uparrow\rangle = \bigl( \begin{smallmatrix}1\\\\ 0\end{smallmatrix}\bigr)$
and $|\downarrow\rangle = \bigl(\begin{smallmatrix}0\\\\ 1\end{smallmatrix}\bigr)$.

This half-angle result is the desired suggestion that the Pauli spinor is 
related to a geometric algebra rotor.
$$
 |\psi\rangle \sim \sqrt{\rho} R
$$
where $\rho$ is the statistical scale factor (the probability density), $\rho=\rho(\vec{r})$, which we ignore for now, since it's determined by the 
wormhole gas geometro\-dynamics, which is all absorbed into a wave, i.e., "field" 
approximation, for now.

That's Lasenby & Doran's motivation, only I took considerably more paragraphs 
to do it in plain English. You're welcome.


### The mapping $|\psi\rangle \longmapsto \sqrt{\rho} R $ 

In 3-space, our general rotor will be a scalar plus linear combination of 
the basis bivectors, since a rotor is an element of the even sub-algebra, 
recall.
$$
R = a^0 + a^i B_i 
$$
where $B_i$ are the unit basis bivectors. The $a^k$ scalar coefficients are 
in the reals $\mathbb{R}$. From the [duality](../004_geometric_algebra/#duality-in-3d) 
relations in the [previous chapter](../004_geometric_algebra/#duality-in-3d) 
we can write these bivectors slickly as duals of the basis vectors, 
and since we know we want the Pauli algebra for these rotors we'd better use 
the relative vectors $\boldsymbol{\sigma}_k$ instead of the primitive basis 
frame 1-vectors $\gamma_k$. 

With the pseudoscalar $i=\gamma_0\gamma_1\gamma_2\gamma_3$, 
which is the same as $I=\boldsymbol{\sigma}_1\boldsymbol{\sigma}_2\boldsymbol{\sigma}_3$, 
we thus have,
$$
\sqrt{\rho}R = a^0  + a^k I \boldsymbol{\sigma}_k
$$
Now, as I just wrote, we can ignore $\rho$ since that comes from solving 
the wave equation in the Schrödinger--Pauli approximation for NRQM. 
So we can absorb $\rho$ into the coefficients $a^\mu$ for now.

The mapping we seek is thus, <a name="Eq.2">(Eq.2)</a>
$$
 \mathcal{H} \ni \quad |\psi\rangle 
 = \begin{pmatrix} x_1 + i x_2 \\\\ y_1 + i y_2 \end{pmatrix}
 \longmapsto \sqrt{\rho}R = a^0 + a^k I\boldsymbol{\sigma}_k \quad \in \mathcal{G}^+_3
$$
where $c_1(\theta)=x_1+ix_2$, and $c_2(\theta)=y_1+ iy_2$.
$\mathcal{H}$ is for the Hilbert space, and $\mathcal{G}^+_3$ for the even 
sub-algebra  of 3-space, in the $\gamma_0$ relative STA frame for our "clocks."

The "$i$" on the left side of the mapping is the unit imaginary, 
on the right it is both the 3-space relative pseudoscalar and the STA pseudoscalar 
(they're the same thing, as I just noted above):
$$
I = \sigma_1\sigma_2\sigma_3 = \gamma_1\gamma_0 \gamma_2\gamma_0 \gamma_3\gamma_0 
= - \gamma_1\gamma_0 \gamma_2\gamma_3 = \gamma_0\gamma_1\gamma_2\gamma_3 = i
$$

From here you can deduce what $(x_1, x_2, y_1, y_2)$ must be from the properties 
of rotations, plus the convention we've used that the magnetic field for the 
measurement of the spin axis is in the $\vec{z}$ direction, 
or in $\mathcal{G}^+_3$ the $\boldsymbol{\sigma}_3$ direction.

You get one freedom here in quantum mechanics, since it's a measurement theory. 
The convention is the $z$ axis for the field, and the electron spin is then the 
thing that's somewhere relatively aligned, statistically, 
unless we've already polarized it beforehand not too long ago.

The way to find the mapping is funny, funny-ironic, since you have to consider 
the *reality* of the electron's spin, which is of course a 1-vector in 3D space, 
so it does not have just $\pm(\uparrow)$ and $\pm(\rightarrow)$ components, 
it has 3 components in cartesian 3-space coordinates, or you can say it has 
polar coordinates $(\hbar/2,\phi,\theta)$ and our experiment **_cannot_** possibly 
measure all three simultaneously, since they are non-commuting observables. 
(We deal with this in the next chapter.)

I guess there's a magnetic moment $g$-factor correction that we're ignoring 
in the $\hbar/2$ magnitude, but let's continue to ignore it for now, 
and in any case we're only *abstractly* measuring the spin, 
so the magnetic moment is not the raw quantity we're recording here "on paper".
We'll just say the measurement of the spin yields $\hbar/2$ units registered by 
our detectors and whatnot.

((The gyromagnetic ratio is usually explained as a "quantum field theoretic effect." 
But it is not the fields that make $g_e\approx -2.002319\ldots$, or whatever it is, 
the effect concerns precession of the electron spin plane. 
In T4G context we'd explain this using the wormhole gas postulate, 
but since there's no way to collect data about the wormhole gas, 
we'd be forced to invent fictional variables to account for the perturbations, 
and that would be the same as introducing field variables, 
which would be the same as employing QED.))

((I have to say, I am not sure about the spin precession, how can one be? 
It is formally the way to explain $g_e$ but I still think that underlying the 
spin precession is some more statistical geometrodynamic kinematics. 
The picture I have in mind is that the wormhole gas effects mean we cannot 
pin the real spin plane down, 
so statistically it always gets perturbed "as if" it were precessing.))

The usual treatment is to define the spin vector (a real vector now, not in Hilbert space, but in *physical* 3-space), by, 
$$
\boldsymbol{S}_k = \tfrac{\hbar}{2} \boldsymbol{n}_k$$ 
where $\vec{n}$ is unit. 
The $z$ component $n_3$ has coordinates $\cos(\theta)$, by our measurement set-up conventions (free to choose). 
All the components are,
$$
\begin{array}{l}
n_1 = \sin(\theta)\cos(\phi) \\\\
n_2 = \cos(\theta)\sin(\phi) \\\\
n_3 = \cos(\theta) 
\end{array}
$$
The spin Operator (measurement function, if you like) is,
$$
\hat{S}_k = \tfrac{\hbar}{2}\hat{\sigma}_k
$$
and the expectation values are thus proportional to,
$$
\begin{array}{l}
n_1 = \langle\psi| \hat{\sigma}_1 |\psi\rangle = xy^\ast + x^\ast y\\\\
n_2 = \langle\psi| \hat{\sigma}_2 |\psi\rangle = i(xy^\ast - x^\ast y)\\\\
n_3 = \langle\psi| \hat{\sigma}_3 |\psi\rangle = xx^\ast - yy^\ast . 
\end{array}
$$

where from above $x=c_1=c_\uparrow$, and $y=c_2=c_\downarrow$. 
Don't ask me why I chose different symbols for the same stuff. I guess I had in 
mind the complex $(x_1,x_2)$ and $(y_1, y_2)$ were "unknowns to be solved for" 
no other reason.

I do not recommend checking all that with pencil and paper if you have 
the Python or Julia software handy. 
The symbolic algebra package [Maxima](https://maxima.sourceforge.io/) 
also is easy for matrix computations over the complex field. 
(I recommend using free-libre software whenever possible, avoid Mathcad, 
Maple and Mathematica.) 
If if you are super lazy I guess you could open Wolfram Alpha if you are online.

Here's some Julia for it:
```julia
using Symbolics
@variables x1 x2 y1 y2
S1=[0.0 1.0+0.0im; 1.0+0.0im 0.0]; 
S2=[0.0 -1.0im; -1.0im 0.0]; 
S3=[1.0 0.0im; 0.0 -1.0+0.0im];

psi = [x1 + im*x2; y1 + im*y2]

# Now for the checks:julia> *(*(transpose(conj(psi)), S1), psi) == X*conj(Y) + conj(X)*Y
((2x1*y1 + 2x2*y2) == (2x1*y1 + 2x2*y2)) & true

julia> *(*(transpose(conj(psi)), S2), psi) == im*(X*conj(Y) - conj(X)*Y)
((2x1*y2 - 2x2*y1) == (2x1*y2 - 2x2*y1)) & true

julia> *(*(transpose(conj(psi)), S3), psi) == X*conj(X) + Y*conj(Y)
((x1^2 + x2^2 - (y1^2) - (y2^2)) == (x1^2 + x2^2 + y1^2 + y2^2)) & true

```
All good.

But in any case, pencil and paper will get you there in a long-ish jiffy.
Continuing with solving for these, we can also use, 
$$
|\vec{n}| = 1, \Rightarrow |c_1|^2 + |c_2|^2 = 1
$$
which we had noted earlier in our heuristic "physicalist" motivations.

Comparing the above expression we can find $c_1(\theta)$ and $c_2(\theta)$ and we get,
$$
c_1 = \cos(\theta/2) e^{i\alpha}, \quad\text{and}\quad c_1 = \sin(\theta/2) e^{i\beta}
$$
which agrees with our previous heuristics too.

But the pedantic *point of all this* tedious coordinate trigonometry is to get 
the *real* 3-space spin vector $\vec{n}$ in terms of our real geometric algebra. 
Since they're objects in the *same geometric space*, they have a simple relation:
<a name="Eq.3">(Eq.3)</a>
$$
\vec{n} = \sin(\theta)\cos(\phi) \boldsymbol{\sigma}_1 + 
\cos(\theta)\sin(\phi) \boldsymbol{\sigma}_2 + \cos(\theta)\boldsymbol{\sigma}_3 
$$
And because we're ignoring the phase factors and $\rho$, we can take $\vec{n}$ 
to be a rotation of the magnetic field $z$ or $\boldsymbol{\sigma}_3$ axis vector,
$$\vec{n} = R \boldsymbol{\sigma}_3 \tilde{R}
$$
for some rotor $R$. Suggestively!

Now, compare this with [(Eq.3)](#Eq.3) we just wrote down. Or use your software. 
What is this rotor? 
The solution is found on a few lines of scrap paper,
$$
R = e^{-\phi I \sigma_3/2 - \theta I \sigma_2/2.}
$$
The easy thing to do is convert the rotor to "rectangular" coordinates: 
$$
e^{-B\omega} = \cos(\omega) - B \sin(\omega)
$$
(should that be $+B\sin\omega$ there or $-B\sin\omega$? Just askin'.) 
Then just compare terms with [(Eq.3)](#Eq.3) to find the *relative* bivector $B$.
You should find,
$$
B = -\phi I \sigma_3/2 - \theta I \sigma_2/2.
$$
at least I hope that's easy, should be if you're following not too half drunk.

Well, now using that same expanded rectangular coordinate form of the rotor, we can do another comparison with the defined spinor $\|\psi\rangle$ from [Eq.2](#Eq.2) in our proposed mapping from $\mathcal{H}$ to $\mathcal{G}^+_3$.

You should find for those unknowns $x_{1,2}$ and $y_{1,2}$,
$$ 
x_1=a^0,\quad x_2=a^3, \quad y_1=-a^2,\quad y_2=a^1.
$$
If I've mde no mistake and you've not been mislead, the mapping we sought is:
<a name="Eq.4">(Eq.4)</a>
$$
 \mathcal{H} \ni \quad |\psi\rangle 
 = \begin{pmatrix} a^0 + i a^3 \\\\ -a^2 + i a^1 \end{pmatrix}
 \longmapsto \sqrt{\rho}R = a^0 + I a^k \boldsymbol{\sigma}_k \quad \in \mathscr{P}
$$

**Remember this formula.** We'll use it heavily in other conversions from matrix 
mechanics to real geometric QM.

Obviously there'll be a very similar mapping for the Dirac algebra onto the even sub-algebra of $\mathcal{G}^{1,3}_+$, the latter $\mathcal{G}^{1,3}$ being the full 16-dimensional spacetime or timespace algebra over the real numbers.
But that's for much later in the chapter on [Hestenes spinors.](../010_hestenes_spinors)


### What have we done?

It's also worth bearing in mind, the above study of Pauli mechanics directly 
specializes to Schrödinger wave mechanics, since we then just turn off the 
magnetic field, $\vec{B}=0$.

So apart from the statistical factor $\rho$, which we'd get from solving the 
Schrödinger equation, we've got most of non-relativistic quantum mechanics 
from pure classical geometry.

How the hell did we do it? Were there any smoke and mirrors?

No. we just demanded a Measurement Theory, and imposed a fundamental quantum 
postulate, namely that matter only exists in discrete clumps, which we are 
calling topological 4-geons, but in the above Pauli mechanics we sneaked in 
with the postulate the spin of the electron (or other particles) has a 
fixed magnitude $=\hbar/2$. 

It's not an Earth shattering postulate, but so far it's all we need to "do" an awful lot of quantum mechanics. 
But it's not everything. Next we want to see how the Dirac theory drops out in the same way from the full $16$-dimensional STA.

((The Pauli sub-algebra for 3-space time in a relative frame, was $8$-dimensional. 
One scalar, 3 relative vectors $\boldsymbol{\sigma}_k$, 3 relative bivectors $I\boldsymbol{\sigma}_k$, and one pseudoscalar $I=i$.))

So in a [later chapter](../010_hestenes_spinors) we bump this all up to 16-dimensions, five grades of $n$-blades, and in doing so get the Lorentz boosts added to our group structure.

Before we get to Dirac Theory I want to do the more startling foundational work 
on quantum gravity, for our koan: (GR+CTCS$\Rightarrow$QM), 
namely deriving the Pauli Exclusion Principle and Interference effects from 
the geometric algebra theory for T4G. 

The constraint we want to self-impose, for parsimony, is:

> No other quantum postulates other than the **4-geon particle postulate.** 
That's our paradigm.
 
The other impressive thing we've done is demonstrate that it's possible to conceive of NR Quantum Mechanics as a theory of measurement and one in which,
> the Pauli Spinors are **not elementary particles**, we have instead found 
the spinors are part statistical factors and part "instructions to rotate." 
So spinors are **_processes_** not objects."

Orthodox QM   thinking, or philosophy, has thus for over a century made a 
fundamental category error, leading all other "interpretations" astray. 
At least that's my view. 
I will back up this view with further considerations in the next chapter on 
[Spin Measurements, part-1.](../006_spin_measurement_part1) 
This next chapter should consolidate in your mind the "correct" view that 
the spinors are part instructions to rotate, and part instructions for a 
probability density statistics (in orthodox QM unexplained, 
in T4G explained by the wormhole gas postulate).

Much, much later we'll do a [Spin Measurements part-2](../011_spin_measurement_part2) 
which will simulate a Stern-Gerlach experiment using the Dirac multivectors.
 
Before continuing to the GA treatment of spin measurements, 
it is nice at this point to map the typical operations 
one might use in the Hilbert space formalism to corresponding operators in the 
Pauli algebra. 
Later when we do the proper relativistic spacetime algebra (STA) 
(16-dimensional, 4+1 grades) we will repeat all this, 
and it will look very similar. 
So it is nice to do this first as an exercise for the non-relativisitcPauli algebra. (8-dimensional 1+3 grades, one grade is the scalar). 


## Mapping the typical matrix operations to Pauli-GA

What we want to do then is show you what the Hilbert space matrix operations of:   
&nbsp;&nbsp;&nbsp;&nbsp; **(o)** Hermitian conjugation;  
&nbsp;&nbsp;&nbsp;&nbsp; **(i)** "multiplication by the unit imaginary";  
&nbsp;&nbsp;&nbsp;&nbsp; **(ii)** multiplication by a Pauli matrix;  
&nbsp;&nbsp;&nbsp;&nbsp; **(iii)** inner product;   
&nbsp;&nbsp;&nbsp;&nbsp; **(iv)** the observable for $\rho = \psi^\dagger\psi$;  
&nbsp;&nbsp;&nbsp;&nbsp; **(v)** the spin observables = expectation value of $\langle\psi | \hat{\sigma}_k | \psi\rangle$  
each of these operations can be mapped to one corresponding to our geometric algebra multivectors, sometimes in the GA treatment there is a distinction between "left-multiply" and "right-multiply", as one would expect for any algebra with non-commutative elements.

> In particular, we will find multiplication of a stats $|\psi\rangle$ by the unit imaginary in Hilbert space corresponds to a right-multiplication by $I\sigma_3$ in the Pauli GA.

This is fairly significant! It means to correctly encode spacetime geometry, 
even in the non-relativistic case, we have to respect order of operations and 
non-commutativity. Or, you could say, the price we pay for proper geometric clarity 
is that we cannot afford to be maverick anymore about where the pseudoscalar appears.

At the end this will mean we will have a pretty complete dictionary for 
translating from any standard orthodox Hilbert space text on quantum mechanics 
to the preferred geometric algebra rendition of QM.

It is worth noting none of this will take us out of QM, none of this depends upon 
T4G theory being correct. It is simply a change of formal language from 
Hilbert spaces to geometric algebra. 
But the sinister and terribly dark demonic motive we have is certainly that of 
*meaning* to fully geometrize quantum mechanics. 
You are just not supposed to whisper this until we are done, 
in case the professors get nervous. 

What I recommend is that you do these as an exercise. On the Hilbert space side 
you only need the Pauli matrix basis and column vectors. Then on the GA side use 
the Julia or Python galgebra stuff we learned before, 
and then use the dictionary as the check.

Let's repeat the dictionary [(Eq.4)](#Eq.4) (this never hurts):
$$
 \mathcal{H} \ni \quad |\psi\rangle 
 = \begin{pmatrix} a^0 + i a^3 \\\\ -a^2 + i a^1 \end{pmatrix}
 \longmapsto \sqrt{\rho}R = a^0 + I a^k \boldsymbol{\sigma}_k \quad \in \mathscr{P}
$$
that's the basic dictionary.  All else should follow, but let's write out the 
basic operations in any case.

### Multiply by a Pauli matrix $\leftrightarrow \sigma_k \psi \sigma_3$

If this relation is true it means in choosing the orthodox Pauli basis we have 
implicitly chosen a preferred reference frame, namely the $\sigma_3$ plane for the spin.
We cannot immediately see this in the dictionary. So we need to check it.

**Define:** a unit imaginary equivalent in GA can be defined,
$$
 J = I\boldsymbol{\sigma}_3
$$
which "normally" (not always) acts by right multiplication, so 
$$
(\cdot) J
$$
The point just being it can have a different effect depending on grade, if multiplying 
a multivector from the left compared to on the right.
We will see why this makes sense in a few paragraphs.

I won't take away the fun here, so let's make them "show it" exercises.

<a name='Ex.0'></a>
**Exercise 0.** This one does not involve just spinors, it is for *any* 
multivector $M$, say. The conjugation is supposed to change the sense of rotations, 
so has to invert bivectors. It is defined by,
$$
\text{Hermitian conjugate:} \qquad M^\dagger = -\gamma_0 \tilde{M} \gamma_0
$$
that is, you reverse the multivector, which reverses time-like bivectors 
as well as spacelie-bivectors, so then to get just space bivector inversion we 
sandwich this between the timelike base vector 
$\gamma_0$, which restores the time direction in $M$ but keeps the spatial 
bivectors inverted.

Note: In the "mostly "$-$" metric there is a sign difference I think,
$$
M^\dagger = \gamma_0 \tilde{M} \gamma_0,\qquad \text{for $\eta = (+\\! - - -)$}.
$$

The exercise is to check this does indeed "invert" spacelike bivectors 
(change their sign).
For example, the Faraday tensor becomes a bivector in spacetime algebra. 
In a later section on electromagnetism we can show there is a "spacetime split" of the Faraday bivector, which is not Lorentz invariant, since it can be used to pick out a preferred $\boldsymbol{E}$ and $\boldsymbol{B}$ field, it is defined by,
$$
F = \boldsymbol{E} + I \boldsymbol{B}
$$
where $I$ is the spacetime pseudoscalar, or sometimes $i$. Space conjugation then does this:
$$
F^\dagger = \boldsymbol{E} - I \boldsymbol{B}
$$
$\boldsymbol{E}$ and $\boldsymbol{B}$ are bivectors here, but in the $\gamma_0$ 
relative frame they're relative vectors, so composed from our $\boldsymbol{\sigma}_k$.
The exercise, if you want to go deeper, is to check the relative vectors $\boldsymbol{\sigma}_k$ are not inverted by this conjugation, while the relative bivectors $I\boldsymbol{\sigma}_k$ are. 


"Ah grasshopper, the previously hidden geometric mystery of Hermitian conjugation 
is revealed," 
(it's about inverting the *relative* space bivectors, but not the *relative* vectors). 

**Exercise <a name='Ex.1'>1</a>.** Show the mapping for action of Pauli matrix multiplication is:
$$
\hat{\sigma}_k |\psi\rangle \longmapsto \boldsymbol{\sigma}_k \psi \boldsymbol{\sigma}_3
$$
for $k=1,2,3$ and $\psi$ being the geometric algebra Pauli spinor. 


**Exercise <a name='Ex.2'>2</a>.** Show the mapping for "multiplication by $i$" is:
$$
i |\psi\rangle \longmapsto \psi I \boldsymbol{\sigma}_3 = \psi J
$$ 
and that the $J$ has to be on the right here, for rotors. You can only move the 
GA $J$ to the left if it commutes with the thing it is multiplying. 


**Exercise <a name='Ex.3-a'>3.(a)</a>.** Show the mapping for "inner product" is:
$$
\langle \phi | \psi \rangle \longmapsto \langle \phi^\dagger \psi \rangle_0 - 
\langle \phi^\dagger \psi J\rangle J
$$


**Exercise <a name='Ex.3-b'>3.(b)</a>.** Convince yourself what the quantum inner product is doing is thus, 
"projecting out the $\\{1, I\boldsymbol{\sigma}_3 \\}$ components from the geometric
product $\psi^\dagger \phi$. 
(Any idea why this is sort of pivotal in a Measurement theory?)

**Definition:** To distinguish this Dirac braket inner product from the geometric 
algebra inner product we denote it by $\langle\cdot\rangle_S$. 


**Exercise <a name='Ex.3-c'>3.(c)</a>.**  Show this Dirac inner product has a simpler form for any 
Pauli algebra *even* multivector (a general spinor): 
$$
\langle A \rangle_S =  \tfrac{1}{2} \left(A - J A J \right)
$$
for $A = \sum\limits_r M_r$ for $r$ even.


**Exercise <a name='Ex.4'>4</a>.** Show the mapping for "probability density" is:
$$
\langle \psi | \psi \rangle \longmapsto \psi\psi^\dagger
$$
or can it be $\psi\tilde{\psi}$? 


**Exercise <a name='Ex.5'>5</a>.** Show the mapping for "spin expectation value" is:
$$
 \langle\psi|\hat{s}_k|\psi\rangle \longmapsto \tfrac{\hbar}{2} \langle\boldsymbol{\sigma}_k\psi\boldsymbol{\sigma}_3\psi^\dagger\rangle = \boldsymbol{\sigma}_k \cdot \boldsymbol{s} 
$$
For the solution to this exercise see the 
[next chapter](../006_spin_measurement_part1) which has more on spin.

I'll work through just the one or two of the exercises. We'll do the zeroth exercise 
in a hypothetical future chapter on electromagnetism.

**Exercise <a name='Ex.6'>6</a>.** What corresponds to "complex conjugate"?


**Solution [1](#Ex.1).** I may as well do this in Julia, since I already did it 
years ago on galgebra. 

Note how much more effort it is to define the matrices. I minor gripe about using matrices, 
but still... it is computationally telling.
```julia
julia> using Multivectors
julia> @generate_basis("+++-", true)
julia> s1=1.0e₄*1.0e₁; s2=1.0e₄*1.0e₂; s3=1.0e₄*1.0e₃; I=1.0e₄*1.0e₁*1.0e₂*1.0e₃;
julia> e1=1.0e₁; e2=1.0e₂; e3=1.0e₃; e4=1.0e₄;

# The matrix stuff
julia> S1=[0.0 1.0+0.0im; 1.0+0.0im 0.0];
julia> S2=[0.0 -1.0im; 1.0im 0.0];
julia> S3=[1.0 0.0im; 0.0 -1.0+0.0im];

# Quick checks:
julia> (*(S1, S2) == im*S3, *(S2, S3) == im*S1, *(S3, S1) == im*S2)
(true, true, true)

julia> ( (*(S1, S2) - *(S2, S1))/2 == im*S3, (*(S2, S3) - *(S3, S2))/2 == im*S1,
(*(S3, S1) - *(S1, S3))/2 == im*S2 )
(true, true, true)
```
Ok. Next you might wish to run symbolic algebra tests. For this you'll need to 
install the `Symbolics.jl` library. 
When I did this it consumed 100% of my CPU, so hung everything I had running. 
It'll take about 20 minutes to compile, or a bit more or less depending on your CPU.
If it takes more than a hour consider killing using the power off button! 
The next time you attempt the install it should run faster. 
(Using Python sympy is much simpler!) 
```julia
julia> using Symbolics
# go make a cup of coffee...
```
That done, you want to define at least the four $a^i$ numbers.
```julia
julia> using Symbolics
julia> @variables a0 a1 a2 a3
julia> A = [a0 + im*a3; -a2+im*a1]
julia> S1xA = *(S1, A)
2-element Vector{Complex{Num}}:
 a1*im - a2
    a0 + a3*im

# The GA version
    
julia> psi1 = 1.0 + 3.1 * I*s1 + 3.2*I*s2 + 3.3*I*s3
Multivector{Float64, 2}
⟨1.0⟩₀ + ⟨1.0e₁₂,-1.0e₁₃,1.0e₂₃⟩₂

julia> psi2 = s1 * psi1 * s3
Multivector{Float64, 4}
⟨-3.2⟩₀ + ⟨1.0e₁₃,0.0e₁₄,-0.0e₂₄,3.3e₂₃,0.0e₃₄,3.1e₁₂⟩₂

```
Does this check? Well,... I have no idea, since we did not use symbols. 
But the numerics check out fine.
$$
\begin{array}{rll}
a^0 \&\text{went to}\& e_{13} \propto -I\sigma_2, \text{check ☑} \\\\
a^1 \&\text{went to}\& e_{12} \propto I\sigma_3, \text{check ☑} \\\\
a^2 \&\text{went to}\& -1, \text{check ☑} \\\\
a^3 \&\text{went to}\& e_{23} \propto I\sigma_1, \text{check ☑}.
\end{array}
$$
But since we pick up zero terms in spacetime bivector grades it is a bit suspicious, 
because what if we did something weird like used some linear combination of the 
$\hat{\sigma}_k$? Would the $\mathcal{H}\mapsto \mathcal{G}^+_3$ still work?
A dopey question really, since I can "see" how the algebra would work, 
even if the computer does not.
So this is no proof for the general case. Although it convinces me.

So far I have not worked out how to use Multivector together with Symbolics, 
so I cannot check the general case. So this was all a bit of a bummer. 
I plan to continue learning Julia for later numerical solvers for the Dirac equation, 
but for theory checks I am going to personally stick with Python.

Yes, it does all work out in Python's [galgebra](https://galgebra.readthedocs.io/en/latest/index.html)
if you want to check that out.
That is, if you want to make sure those coefficients I used did not just luckily 
turn out to be perfect.

Nevertheless, if we wanted to make our own slowish high level symbolic library for the 
Julia symbolic multivectors we could, but we'd have to pass multvectors to functions 
via two objects, one a list of the symbolic coefficients, and the other the actual 
rotor/multivector. Such a pair for each multivector! 
Then we'd have to bother doing each basis blade computation separately in a loop, 
then gather terms at the end. A bit of a chore.
So I have not gone to those lengths yet, I would default back to using Python `galgebra`

If you are serious about this stuff, let me know, and you can grab the basic 
test software for `galgebra` from the T4GU git repository.

In Python `galgebra` it is also easy to write the check function, since the 
symbolics cooperate perfectly with the GA multivector objects.

Maybe for luck I should do the last exercise.

**Solution [6.]kate 2_  (#Ex.6)** It make take some trial and erorr, since this was not a "show it" exercise. But peek now at the answer and you can then make it a "show it".
$$
 |\psi\rangle^\ast \longmapsto \boldsymbol{\sigma}_2 \psi \boldsymbol{\sigma}_2
$$
Does it make any since only $\boldsymbol{\sigma}_2$ would work here? 
Since the chosen spin frame for the magnetic field measurement is, 
$\boldsymbol{\sigma}_3$, shouldn't complex conjugation 
also work with $\boldsymbol{\sigma}_1$ as well?

Recall the principle mapping, so we need $a_3$ and $a_1$ only to change sign:
```julia
julia> (I*s1, I*s2, I*s3)
(1.0e₂₃, -1.0e₁₃, 1.0e₁₂)

julia> psi1 = 1.0 + 3.1 * I*s1 + 3.2*I*s2 + 3.3*I*s3

julia> s2*psi1*s2
Multivector{Float64, 4}
⟨1.0⟩₀ + ⟨0.0e₁₄,0.0e₃₄,-3.1e₂₃,-3.3e₁₂,-0.0e₂₄,-3.2e₁₃⟩₂
```
The first line I just print out the bivectors for easy reference. 
So we can see the two changes of sign are good: on $e_{23}$ and $e_{12}$. 
Note that the base for $a_2$ there should be $e_{31}$, so the minus sign 
on $3.2e_{13}$ is ok, it hasn't been flipped.

Lastly, what about the  $\boldsymbol{\sigma}_1\psi\boldsymbol{\sigma}_1$ sub-question?

Well, you might be smart now and expect it to have a different meaning. 
What's the "permuted" version ($\vec{y} \leftrightarrow \vec{z}$) of complex conjugation 
in the other ($xz$) spin plane? 
Does your guess check out?


### The bilinear covariants

Pretty critical in quantum mechanics are the symmetries, hence the invariants. 
In Schrödinger-Pauli-Dirac wave mechanics the more important invariants for a 
quantum state represented by $|\psi\rangle$ in the Hilbert space, or in the GA by 
$\psi = \sqrt{\rho}\, R$, are called bilinear covariants. 

(Covariant being shorthand for coordinate choice invariant.)

They're bilinear because they are computed from operations similar to the above 
Dirac inner product, for which we now have a geometric algebra version. 

At this point in pedagogy the "usual" thing is to write these down now, so getting a 
further extension of our basic mapping from $\mathcal{H}$ to $\mathcal{G}^+$. 
But why the hell would I do that? I'm a *good* teacher, not a slimebag of a teacher.

Also, won't we need the full Dirac theory for these things? 

Yes.

So... I guess... "haha! Fooled you"?  Well, so it's hard to be a slime bag even 
if I wanted at this stage. 
I do want to get onto Dirac theory though, it is useful for elaborating a bit 
of T4G theory, but it is more nuanced, and more laborious.
Most of T4G is understood non-relativistically with the Pauli spinors, 
and I hate hard labour.

So I'll motivate why you might later on want to know these bilinear covariants, 
but I will not go and compute them, since we have not yet motivated their use. 
But from the plain English description you can see why some are useful.

Here are a few:
* The probability density covariant.
* The Dirac current --- will give the streamline type flow direction for the electric charge.
* The spin density.

There are a couple of others. They can be ordered by STA grade, so you get a full set, 
{Scalar, Vector, Bivector, Pseudovector (trivector), Pseudoscalar} of covariants, 
one of each grade. That's pretty nice, given orthodox QM has no clue about the grades!
They'd say, "Why five bilinear covariants man?"

Hestenes derives the formulae for them 
[here,](http://geocalc.clas.asu.edu/pdf/Geom_Dirac.pdf) 
and Doran and Lasenby 
[here.](http://geometry.mrao.cam.ac.uk/wp-content/uploads/2015/02/StatesAndOperators.pdf)


<div style="text-align: center;">* &nbsp;&nbsp;&nbsp;&nbsp; * &nbsp;&nbsp;&nbsp;&nbsp; *</div>

With what we've done we can now, remarkably, attempt an account of the 
Pauli Exclusion Principle, and basic Interference, and do so all from 
pretty minimalist Topological 4-Geon theory.

But I'll save that for the [chapter after next,](../007_pauli_ex_entanglement) and here instead 
do some more terminological work, but this can be skimmed and kept in mind 
just for reference if you are in a hurry.
We've done most of it already in the above exercises.

I know it's a bit deflating to go over terminology after the good stuff learning 
Pauli spinors are real geometric **_processes_**. 
So, maybe come back here when needed?



## Conjugation, Reversion and All That

The introduction of the timelike basis 1-vector $\gamma_0^2 = -1$ gives us more than 
one type of conjugation. 
It also gives us local "clocks," so-to-speak, co-moving with the 4-geon.

In fact there are so many different involutions I can never keep them 
straight in my head, you have to be doing STA for a week straight to keep it all together. 
Which is no problem for a university lecturer, but hard for us dirtbag physicists.

The gist of conjugation is simple though, it's an inversion sort of operation, either time-inversion, space-inversion, or a combined time-space inversion (a lot like doing a PT transform).

By the way, PT transforms are pretty darn interesting in themselves, take a look at 
Carl Bender's papers on PT symmetry. 
Prof Bender (the dude, not the [Futurama robot](https://en.wikipedia.org/wiki/Bender_(Futurama)) ) gets very close to identifying wormholes as a type of entanglement, but he is so fixated on the complex numbers he misses the spacetime algebra for the $\mathbb{C}$ trees --- a shame and pity, 
because he'd be able to do everything I want to do with T4GU over a summer sabbatical.
"Hellooo! Wake Up Carl!"

OK, that rant being done, the next business is to adopt one of the conventions for denoting the conjugations, and unfortunately there are several conventions. 
I'm choosing one that's easiest here for KaTeX.

It's a bit of an exercise to figure out which of these corresponds to complex conjugation, Hermitian conjugate, parity inversion, time inversion in QM, but since we've not yet defined spinors from QM in terms of the timespace algebra, that's what we need to do next. 
Once we're done, it'll be terrific, since we will finally have a geometric intuition for what complex and Hermitian conjugates are really doing, as well as later on trace and determinants (determinants are easy though $\sim$ volumes of $n$-dimensional hedra, hence scale factors for any linear transform).

The trace of a linear operator is not so straight forward in STA. 
But from prior QM we know the trace should be the sum of eigenvalues, 
so that's a little head start.

Anyway, let's make a start, first reviewing the main involutions we have already 
learned.

### Reversion $\tilde{M}$

We've already got the tilde sign for a reversion (reverses ordering of strings 
of 1-vectors in geometric products, (so *not* separately in not inner and 
outer products):
$$
\text{Reversion:}\qquad M=abcd \quad\Rightarrow \quad \tilde{M}=dcba.
$$

### Space conjugate  $M^\ast$

One can split any $\mathcal{G}^n$ into even and odd parts, the even sub-algebra 
will be closed, and similar to a "complexification." 
The natural conjugate should thus go over to orthodox complex conjugation 
$z\longrightarrow z^\ast$, if you hack at this for a bit you'll discover the 
natural generalization is a grade dependent change of sign on every odd $r$-blade, 
as follows:
$$
A_r \longrightarrow A^\ast = (-1)^r A_r
$$

**Exercise:** Show that another way to write space conjugation for the *relative* vector Pauli algebra (not the normal Euclidean 3-space) is,
$$
\mathcal{P}\ni\quad M^\ast = \gamma_0 M\gamma_0.
$$
Remember, in the Pauli algebra $\mathcal{P}$ the "vectors" are the bivectors 
$\boldsymbol{\sigma}_k$.

In terms of the *entire* subspaces of the geometric algebra $\mathcal{G}_n$, 
we've got abstractly,
$$
(\mathcal{G}_n)^\ast = \bigl(\mathcal{G}^-_n + \mathcal{G}^+_n \bigr)^\ast = \mathcal{G}^-_n - \mathcal{G}^+_n. 
$$

In *abstract* terms we can write this out explicitly for 3-space multivectors,
$$
M^\ast = \langle M\rangle_0 - \langle M\rangle_1 + \langle M\rangle_2  - \langle M\rangle_3
$$
or in plain English, flip the space 1-vectors.

Now that we've defined the space conjugate geometrically the meaning is clear 
(as it was in $\mathbb{C}$ I guess, but was not applicable to any space dimension). 


### Hermitian conjugate  $M^\dagger$

We've already encountered this one:
$$
M^\dagger = -\gamma_0 \tilde{M} \gamma_0
$$
it reversed the sense of bivectors, but did not change vectors.

**Note:** In the "mostly "$-$" metric there is a sign difference I think,
$$
M^\dagger = \gamma_0 \tilde{M} \gamma_0,\qquad \text{for $\eta = (+\\! - - -)$}.
$$

You should find in 3-space this Hermitian conjugate is the same as the matrix Hermitian conjugate. (Use the software Luke.)
We could abstractly by grade write it explicitly like this:
$$
M^\dagger = \langle M\rangle_0 + \langle M\rangle_1 - \langle M\rangle_2 - \langle M\rangle_3 
$$
Again, there will be a similar involution for the proper spacetime algerba (STA) which will have five grades.


### Hermitian transpose  $\bar{M}$

If we combine the space conjugation and Hermitian conjugate we get a type of transpose:
$$
\bar{M} = (M^\ast)^\dagger
$$

We are kinda running out of symbols here. But thankfully we will not need too 
many more than this. What we've got to do later on is do this all again for 
the 16-dimensional 5-graded spacetime algebra (STA). There'll be a couple of 
differences, and we'll be able to use the $\gamma_\mu$ and pseudoscalar 
$i=\gamma_0\gamma_1\gamma_2\gamma_3$ to define some of these involutions.


### Exercise: what is time inversion?

Try to figure out a neat way to do time-inversion in the STA. I know we have not 
covered the STA in full yet, but you do not need the Dirac algebra mapping to 
figure this out, it's all just done in the STA.
$$
\begin{array}{rl}
\text{What does time-inversion?}: \quad a^0\gamma_0\& \longmapsto -a^0\gamma_0\\\\
a^i\gamma_i \&\longmapsto a^i\gamma_i.
\end{array}
$$

Hint: is it "multiply by $i$? Or by $i\gamma_0$? Something else? 
It's gotta be something to do with two $\gamma_0$'s you might think? 

You could simply reverse $\gamma_0$, but what we are after here is a simple 
operation that works for any multivector, without having the peer inside and 
find all the $\gamma_0$.

Note, in the above Pauli 3-space relative algebra we "do not know about" 
time-inversion, except by simply $\gamma_0 \mapsto -\gamma_0$. 
But in the full STA it is an important symmetry operation when combined 
with charge and parity symmetry, CPT.

**Guess:** No peeking! It's not hard to guess and check here. 
A diminished Hermitian seems to do the job for at least scalars and 1-vectors, we drop the reversion, so maybe guess,
$$
T(M)?: M \longmapsto \gamma_0 M \gamma_0 ?
$$
It works for vectors since $\gamma_0$ anti-commutes with $\gamma_i$, 
$$
\begin{array}{rl}
\gamma_0 a^i \gamma_i \gamma_0\\!\\! \&= -\gamma_0^2 a^i\gamma_i = + a^i \gamma_i,\\\\
\gamma_0 a^0 \gamma_0 \gamma_0\\!\\! \&= -\gamma_0 a^0 = - a^0 \gamma_0.
\end{array}
$$
The question is what about the bivectors, the pseudoscalar, and the trivectors 
in the STA? Homework?

It does not work out, since, $\gamma_0 i\gamma_0 = + i$, and time inversion has to invert the pseudoscalar orientation, it should be $-i$. 

So what's the next guess?


### Quantum scalar product (Hilbert inner product) 

This was [Exercise 3](#Ex.3-a) above. For any Pauli spinors $\phi$ and $\psi$, we found,
$$
\langle\phi|\psi\rangle \longmapsto \langle\phi^\dagger\psi\rangle_S = \tfrac{1}{2}(\phi^\dagger\psi  -  J \phi^\dagger\psi J).
$$


###  A new scalar product and "orthogonal" and norm

This will **_not_** be the same as our previous inner product.  A different scalar product is defined by $(A,B)$ as follows, take the scalar part of the geometric product of $\tilde{A}$ with $B$,
$$
(A,B) =  \langle \tilde{A} B\rangle
$$
and thus can be applied to any GA numbers. 
This scalar product is symmetric, $(A,B)=(B,A)$. 

**Exercise <a name="Ex.7">7.</a>** Show $(,)$ is symmetric, hint: use a basis $\\{\vec{e}_i\\}$.

I forgot to mention last chapter with the grade projection operator $\langle \cdot\rangle_k$ the convention is that if no grade $k$ is subscripted it's implied to be the grade-$0$ part, i.e., scalar part. 
So $ \langle \tilde{A} B\rangle \equiv \langle \tilde{A} B\rangle_0$.

This makes it possible to generalize the notion of *orthogonality* for any blades, specifically,

**Definition:** $A$ is orthogonal to $B$ iff $(A,B)=0$.



**Definition:** The **norm** of $A$ is $||A|| = (A,A)$.  For 1-vectors this is the same as the square of the length of the vector, $||a|| = a^2$. 


```
[TODO: unfinished section.  Work in progress. 
We've got to do PT and T symmetry operations. 
Quite a bit more, maybe put trace and determinants here, briefly, the 
stock stuff one might use in simple QM applications, like QC.
```

## Summary of Pauli Algebra in GA

Here for reference are the main results. 

**The main mapping** (spinor equivalences):
$$
 \mathcal{H} \ni \quad |\psi\rangle 
 = \begin{pmatrix} a^0 + i a^3 \\\\ -a^2 + i a^1 \end{pmatrix}
 \longmapsto \sqrt{\rho}R = a^0 + I a^k \boldsymbol{\sigma}_k \quad \in \mathscr{P}
$$


**Operator equivalences**:
$$
\begin{array}{rcl}
\hat{\sigma}_k |\psi\rangle \&\longleftrightarrow\& \boldsymbol{\sigma}_k\psi\boldsymbol{\sigma}_3.\\\\
 i |\psi\rangle \&\longleftrightarrow\& \psi I \boldsymbol{\sigma}_3 = \psi J.\\\\
\langle\phi | \psi\rangle \&\longleftrightarrow\& \langle\phi^\dagger\psi\rangle_S = \tfrac{1}{2} ( \phi^\dagger\psi - J \phi^\dagger\psi J).
\end{array}
$$

**Observables**:
$$
\begin{array}{rcl}
\rho \& \longleftrightarrow\& \psi\psi^\dagger.\\\\
 \langle\psi|\hat{s}_k |\psi\rangle \&\longleftrightarrow\& \langle\boldsymbol{\sigma}_k \psi \boldsymbol{\sigma}_3\psi^\dagger\rangle_0\\\\
 \hat{s} \&\longleftrightarrow \&  \boldsymbol{s} = \psi \boldsymbol{\sigma}_3 \psi^\dagger
\end{array}
$$

For the full 16-dimensional Spacetime Algebra mapping of the same nature, see the end of [chapter on Hestenes Spinors here.](../010_hestenes_spinors#summary-dirac-hestenes)


<table style="border-collapse: collapse; border=0;">
    <colgroup>
       <col span="1" style="width: 25%;">
       <col span="1" style="width: 35%;">
       <col span="1" style="width: 25%;">
    </colgroup>
<tr style="border: 1px solid color:#0f0f0f;">
<td style="border: 1px solid color:#0f0f0f;"><a href="../004_geometric_algebra">Previous</a></td>
<td style="border: 1px solid color:#0f0f0f; text-align:center;"><a href="../">Back to Theory</a></td>
<td style="border: 1px solid color:#0f0f0f; text-align:right;"><a href="../006_spin_measurement_part1">Next chapter</a></td>
</tr>
<tr style="border: 1px solid color:#0f0f0f;">
<td style="border: 1px solid color:#0f0f0f;"><a href="../004_geometric_algebra">Geometric Algebra</a></td>
<td style="border: 1px solid color:#0f0f0f; text-align:center;"><a href="../">TOC</a></td>
<td style="border: 1px solid color:#0f0f0f; text-align:right;"><a href="../006_spin_measurement_part1">Spin Measurement</a></td>
</tr>
</table>
