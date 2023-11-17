---
title: "Spin-Statistics in Geometric Algebra"
description: ""
date: 2016-11-02
lastmod: 2016-11-02
cover: ""
coverAlt: ""
toc: true
tags: []
katex: true
---


To denote a system with two *indistinguishable* particles we need a **_pair_** of 
spacetime frame vectors, since each particle carries it's own clock.

((Why is that? Well, remember in QM/QFT all fundamental particles are "oscillators" 
and in T4G theory they all are assumed to have an internal CTC structure which permits 
geometrodynamic oscillations, which are very much like string vibrations in M-Theory. 
But this is not really the reason why we need a copy of a spacetime fame for each 
particle. We need a copy for each in order to specify results of measurements 
independently using the geometric algebra multivectors.))

To denote this in GA we need an extra decoration on the spacetime frame vectors 
$\\{\gamma_\mu\\}$. Doran & Lasenby use a right superscript, which clashes with exponentiation, 
so I've invented my own notation, which uses a left scriptsize underlined index. 
Thus if we have two coupled particles we just add their respective frame vectors 
to denote the singlet state, like so:
$$
{{<lsup1>}} +{{<lsup2>}}
$$
((No worries if this never catches on, but it's good for this website, 
which I have to write in KaTeX, so I cannot write left superscripts.))

**Note 1.** Note that $\underbar{\scriptsize 1}\gamma_\mu$ and $\underbar{\scriptsize 2}\gamma_\mu$
are two full-blown copies of the entire spacetime algebra (STA).
Which might strike some younger sensitive folks as a bit profligate. 
But fear not! For a few reasons:
* In general relativity we are already comfortable with the notion of a privileged local 
frame of reference that any particle essentially "carries around with itself". 
You know,... a muon knows what it's lifetime to decay is supposed to be, and it never 
changes, and a photon knows it's supposed to "live & die in an instant" 
from source to sink. 
* We are not making a copy of spacetime. The reference frames 
$\\{ {{<lsupi>}} \\}$ are book-keeping accountancy, 
they're not ontological. 
* But they do *help us* express a real physical relationship, in some cases 
(namely the cases where we entangle two geons).
* Multi-particle quantum mechanics is an interesting applied field of research, 
but we'll have very little use for it, because the case of a **_pair_** of 
indistinguishable particles is the only fundamental case we need consider, 
since, as we've learned, spin-coupled states can only exist in *pairs*.
* The exotic cases of GHZ states (multipartite entanglement) are a cool speciality topic, 
but pretty rare in the wild, and we'll have a pretty similar STA generalization to 
handle them, if and when we bother to handle them.

**Note 2.** Crucially though, **_this is more than notation_** --- since what we mean in 
T4G theory by these coupled pair systems is that an EPR=ER wormhole bridge 
*might* connect the two indistinguishable geons. 
If two fermions are *not* so coupled then we cannot write a pure singlet state to 
describe them, we'd have a mixed state. 
In T4G and in O'Hara's terms, that just means the uncoupled geons are 
statistically independent, not Bell pairs.
If they once had an ER bridge connecting them, it's collapsed --- by some ant 
or speck of dust or Dextor in his lab making "a measurement."

Why is this T4G view justified?

It is because with an ER=EPR wormhole the same quantum information goes down 
both wormholes, or can traverse out either end, after perhaps oscillating in-between 
them a countable number of times. 

Recall (or learn) that *wormholes growing* means more information going in, 
an increase in the quantum complexity 
[(Brown, Susskind, Roberts and Zhang, 2016)](https://arxiv.org/pdf/1512.04993)
(see also [Susskind\'s teleportation paper](https://link.aps.org/pdf/10.1103/PhysRevD.98.046016)).
But fundamental particles do not grow in complexity, so their wormhole's do not grow 
(a proper mathematical physics result! Go on, try to fact-check me!) and 
so the horizon of a minimal wormhole in a t4g-geon structure preserves 
"quantum information" until it decays, and so both ends of these 
Planckian wormholes in T4G theory _have to be horizons for the **same information**_, 
meaning they're "the same particle" or two copies --- coupled --- 
of indistinguishable geon's.

((I realise this raises the conundrum that if geons themselves contain CTC's, 
then every fundamental particle modelled by a t4g-geon has, in some sense, 
this sort of dual horizon, it "carries information about itself in two copies," 
is how I would put it. But I am not sure this gives us any headaches, 
in fact it greatly relieves one headache I had while writing the older 
[philosophy](/t4gu/philosophy/) pages, which is that I wondered how we justify 
geometric amplitudes in the superpositions. Well, we're going to get an answer 
from entanglement in the [next chapter](../009_interference_from_entanglement).))

That's the preliminaries, now we have to do the basic mathematics. 
It ain't too hard, luckily, which we saw in the previous chapter in O'Hara's 
version. 
Who would've thought. 
Although, the $\mathcal{GA}$ version we'll do now looks a bit nastier, 
I have to admit. 
I'd like to have a slicker presentation. 


## Two-particle Correlator

We have a copy of the pseudoscalar for each geon, that is, for the space labelled 
by $\underbar{\scriptsize 1}$ there is a pseudoscalar $\underbar{\scriptsize 1}i$, 
and for the space labelled by $\underbar{\scriptsize 2}$ there is a pseudoscalar $\underbar{\scriptsize 2}i$.

So we aught to write:
$$
{{<J1>}} = \underbar{\scriptsize 1}i {{<S1_3>}} 
$$
and likewise for ${{<J2>}}$, $ \underbar{\scriptsize 2}i$  and ${{<S2_3>}}$. 
This is for notational convenience, to avoid a bit of mess down the road.

For either a coupled or uncoupled two-geon system with two-states, e.g., spin 
$\uparrow$ and $\downarrow$ we have the shorthand tensor product notation 
that covers the basis,
$$
\begin{pmatrix} 1\\\\ 0\end{pmatrix} \otimes \begin{pmatrix} 1\\\\ 0\end{pmatrix},\quad 
\begin{pmatrix} 1\\\\ 0\end{pmatrix} \otimes \begin{pmatrix} 0\\\\ 1\end{pmatrix},\quad 
\begin{pmatrix} 0\\\\ 1\end{pmatrix} \otimes \begin{pmatrix} 1\\\\ 0\end{pmatrix},\quad 
\begin{pmatrix} 0\\\\ 1\end{pmatrix} \otimes \begin{pmatrix} 0\\\\ 1\end{pmatrix}.
$$
The first of these is also written $\ket{\scriptsize ++}$ in bra-ket notation, 
the second $\ket{\scriptsize +-}$ and so forth.
But we have a dictionary for translating these into geometric algebra spinors, 
$\psi$, or even elements of the Pauli $\mathcal{G}^+_3$ algebra.

For a two-geon system we will have a product spinor,
$$
\underbar{\scriptsize 12}\psi = {{<psi1>}}{{<psi2>}}
$$
we will just be lazy and call this tensor space spinor ``$\psi$'' for this chapter.

We need the two-particle state to act (or be acted upon) the multivectors in 
each of the product spaces in an invariant manner, so the ${{<J1>}}$ and ${{<J2>}}$
simply *cannot be* the pseudoscalar for the two-particle system. 
We need to find a new pseudoscalar that acts invariantly on both spaces when 
multiplying $\psi$.

We thus need to find spinors that satisfy,
$$
\psi{{<J1>}} = \psi{{<J2>}}
$$
And yet, take note, each spinor in it's own half of the tensor space is just a 
normal Pauli rotor from our previous $\mathscr{P}$. 
So the above constraint is very interesting.
But we are "doing QM" in T4G & GA context here, and so the spinors are not 
physical particles, they are not *the geons*. They are processes or instructions 
for how to translate laboratory instrument settings onto the frame that describes 
the geon properties, which is what a measurement theory demands, as per our previous 
philosophy and theory of QM from a T4G perspective.

That is all just to say that we are free to do essentially what we please to the 
separate spinors ${{<psi1>}}$ and ${{<psi2>}}$ provided we do not deform their 
action on their local variables in their respective ${{<lsupk>}}$ frames. 
This is another constraint on the possible form that the ${{<psik>}}$ can take.

You can scribble around for a while, but one shortcut through the potential mess 
is a slick but simple bit of algebra, just note that each ${{<Ji>}}$ satisfies,
$$
{{<Ji>}}^2 = -1,
$$
so that,
$$
\psi = - \psi {{<J1>}} {{<J2>}}
$$
so we can form $2\psi$ by adding that expression to $\psi$, hence,
$$
\begin{array}{lrl}
\& 2\psi \\!\\!\&= \psi - \psi {{<J1>}} {{<J2>}} \\\\
\therefore \& \psi \\!\\!\&= \tfrac{1}{2}\psi \left( 1 - {{<J1>}} {{<J2>}} \right)
\end{array}
$$
and so in what seems like a bit of wizardly sleight of hand we've found a candidate 
form for the general two-particle state, which is that whatever 
$\psi = {{<psi1>}}{{<psi2>}}$ is, if it has this post-factor on the right-hand 
side it will have invariance upon right multiplications by the Pauli algebra $\mathscr{P}$ mapping of the unit imaginary for both spaces in the tensor form 
(namely ${{<J1>}}$ and ${{<J2>}}$).  So, abstractly,
$$
\psi = \left(\text{some spinors}\right) \left( 1 - {{<J1>}} {{<J2>}} \right)
$$
and we tidy this up a little by defining a new idempotent element we name, $E$, 
$$
E = \tfrac{1}{2}\left( 1 - {{<J1>}} {{<J2>}} \right)
$$
since we need the factor of $\scriptsize 1/2$ to make it square to itself, you can check that, 
$$
E^2 = E
$$
which is the definition of an **_idempotent_** element of any algebra. 
(I do not know who settled on the name `$E$' for this idempotent, 
but it is kind of "elementary".)
In physics-ese lingo this property also means $E$ is a **_projector_**. 
(You act with it once is gives you back a new spinor projected onto a 
measurement subspace, but act twice it does no more or less.)

Next, with this projector defined we can now write down an invariant "unit imaginary" for the whole product space,
$$
J = E {{<J1>}} = E {{<J2>}} = \tfrac{1}{2}\left({{<J1>}} + {{<J2>}}\right) 
$$
Again , you could scribble around a while trying to invent this, but you'll find it's the simplest and obvious choice.
But you should check it is a tensor space version of the pseudoscalar:
$$
J^2 = -1.
$$
Which is not hard, since we already have $E^2=E$, and $({{<Jk>}})^2 = -1$ for 
each geon's tensor space label ${{<ubark>}}={{<ubar1>}},{{<ubar2>}}$.

You might be asking why we're doing all this? It is because we need a 
geometric algebra basis for this new thing called a 2-geon system. 
And *that* in turn is because later on we will want to couple such a system with 
a wormhole ER=EPR bridge, the same way we did last chapter. 

The object that allows us to do this for geometric algebra spinors is this thing 
$E$, which we will now enshrine a bit further by christening it:

> The object $E$ generalizes to a system of $n$ geons, where it is denoted $E_n$ 
and is called, <br><div style="text-align: center;"> *The quantum correlator*</div>

To figure out what $E_n$ boils down to you need to have it satisfy:
$$
E_n {{<Jj>}} = E_n{{<Jk>}} = J_n,\quad\text{for each }
{{<ubari>}},{{<ubark>}}\in\\{{{<ubar1>}}, {{<ubar2>}},\ldots , {{<ubarn>}}\\}
$$
It turns out this is just a product over all the correlators with any one of the ${{<ubari>}}$, 
so we can choose ${{<ubari>}}={{<ubar1>}}$, for simplicity and write,
$$
E_n = \prod_{{{<ubark>}}={{<ubar2>}}}^{{{<ubarn>}}}  \tfrac{1}{2}\left(1 - {{<J1>}}{{<Jk>}} \right).
$$
Not bad for an afternoon's algebra huh?

Note also that we get the "complex structure" for the mapping from Hilbert to 
$\mathscr{P}$ GA space with any one of the ${{<Ji>}}$, so for instance,
$$
J_n = E_n{{<Jk>}}
$$
is independent of which ${{<ubark>}}$ label we choose, all give the same $J_n$.

The pay-off for going to all this effort is that now all the operations we did 
in the single geon geometric algebra $\mathscr{P}$ work the same in the 
multi-particle setting, just with $J_n$ instead of the old single GA pseudocalar $I$.

So,
* reversion,
* space conjugate,
* Hermitian conjugate,
* Hermitian transpose,
* spinor inner product, $\langle\cdot\rangle_S$

all work the same as before. In particular rotations by rotors works the same.


### Computations for 2-geon systems?

So we might want to check some of those operations, in particular rotations. 
How?

I found the Julia `Multivectors.jl` package to be far too awkward. 
So I tried Python's `galgebra`.

To check all this stuff computationally, we would need two or more GA bases 
defined, and I am not sure that works even in the Python `galgebra` library yet, 
so in a lot of this multi-particle GA quantum mechanics we are off on our own 
pen & paper without a computer algebra checker I think. Like in the olde days of
Newton, Maxwell, Dirac and Pauli.
But you might like to write a multi-particle galgebra module for Python yourself? 
Think about it anyway, if you like a programming challenge.

One possible way if you are careful and "behave" is to just use a higher dimensional 
basis, so in `galgebra` I might define an 8-dimensional basis as follows 
(apologies for the long scroll needed in the code box, for aesthetics I did not 
want to do too much line wrapping),
```python
import sympy
from galgebra.ga import Ga

txyz12 = (t1, x1, y1, z1, t2, x2, y2, z2 ) = sympy.symbols('t1 x1 y1 z1 t2 x2 y2 z2', real=True)
o8d = Ga('e1t e1x e1y e1z e2t e2x e2y e2z', g=[-1, 1, 1, 1, -1, 1, 1, 1], coords=txyz12)
```
However, this is **_not_** going to work, because what it defines is a 256-dimensional 
algebra, with grades of $k=0\ldots 8$, whereas what we want is a tensor of spaces of 
grades $k=1\ldots 4$. 
For two-geon quantum mechanics we want a doubling of the space, 
not an exponentiating!
Also, we need the multivectors in the separate quotient spaces of the 
tensor space to commute, but they will not commute if we take them from the 
8-dimensional (3+3)-space (1+1)-time frame basis.

One option was to use numpy arrays, which can vectorize multiplications. 
I had a go at this but numpy arrays do not work in the same way as tensors, 
so I think to get multiparticles into `galgebra` it might be necessary to write 
a whole new class that piggy backs on the underlying multivectors.

There is a Python library for tensors called [pytearcat](https://pypi.org/project/pytearcat/)
but I have not tried it together with galgebra yet, but it seems too specialized for general 
relativity. A more general package is [algebra](https://pypi.org/project/algebra/) which might 
be easier to extend with galgebra.
But provided speed is not of the essence, I don't see much wrong with writing our own 
python classes for at least the $n=2$ geon systems.

I've put this on a TODO list.

The project is "complicated" because the Pauli relative vectors in different 
halves of the tensor space need to commute, while for the same subspace they do not.
This strongly suggest to me that no native Python matrix or tensor libraries 
are going to be able to cope. We'll need to build our own.



### Notation for the 2-geon systems

Suppose we had a 2-geon spinor expressed in geometric algebra of $\mathscr{P}$ 2-geon space, that was something like,
$$
\underbar{\scriptsize 12}\psi = \cos(\alpha)\\,{{<iS1_2>}} + \sin(\alpha)\\, {{<iS2_2>}} E.
$$
A nice convention to tidy this up a little is that when the pseudoscalar $i$ 
is next to a $\underbar{\scriptsize j}\boldsymbol{\sigma}_k$ from one of the 
spaces of relative vectors we can drop the left script label on it, 
taking it as implied.  So the tidier format is,
$$
\psi = \cos(\alpha)\\,i{{<S1_2>}} + \sin(\alpha)\\, i{{<S2_2>}} E.
$$
Since the spinor components given are obviously for a 2-geon system we've afforded 
to drop the left underbar scripts $\underbar{\scriptsize 12}$ from the $\psi$ too.

That'd also get pretty tedious for an $n>4$ geon system, imagine,
$$
\underbar{\scriptsize 123456} \psi
$$
for $n=6$. What would happen when we get to $n=12$,
$$
\underbar{\scriptsize 123456789101112} \psi \\,\\, ?
$$
it gets a bit ridiculous, even though it's unambiguous.
So we drop the labels whenever possible.
But you know the right-hand side would look even more horrific. 
Nature serves us up some respite, since it's difficult to couple more than 
$n=2$ geons, so in large $n$ systems of interest typically semi-classical 
physics approximations will be good enough for all practical purposes, 
and count for us as **_applied physics_** and so we're not interested in them.

I guess I'd adopt a shorthand if pressed to use explicit identifications, like,
$$
\underbar{\scriptsize \ldots 12}\psi
$$
for the $n=12$ geon case. The lead ellipsis is just to be sure we did not mean 
$n=1, 2$. After all, we do not need to be reminded to start 
counting geons at $\underbar{\scriptsize i}=1$.

Particle physicists at CERN do not need to worry much at all about entanglement 
except for computing two-particle scattering amplitudes that are sensitive to 
whether particles are created in the singlet sates or not, 
and I don't think many are. Although I guess the glueballs could pose a hairy problem. 
I wouldn't know.


### The 2-geon basis states

Above we wrote down the Pauli column vector and ket representations for the 
basis states for a two-state 2-geon system. That is, two maybe coupled (maybe not) geons, 
that have $\uparrow$ and $\downarrow$ states they can be projected into by a 
spin measurement.

((Although, this is more general than spin measurement, they could be two atoms 
that have two energy eigenstates some energy measurement projects onto. Like 
Feynman's ammonia molecule example in the *Red Book* Vol-III. 
Or like a two-slit interference experiment.))

It turns out we can get the tensored basis state just with geometric products of 
the correlator $E$ and the $i{{<S1_k>}}$ and $i{{<S2_k>}}$

To do so, remember the principle mapping from $\mathcal{H} \mapsto\mathscr{P}$:
$$
 \mathcal{H} \ni \quad |\psi\rangle 
 = \begin{pmatrix} a^0 + i a^3 \\\\ -a^2 + i a^1 \end{pmatrix}
 \longmapsto \sqrt{\rho}R = a^0 + I a^k \boldsymbol{\sigma}_k \quad \in \mathscr{P}
$$
From which we can read off the first basis column vector, which goes like,
$$
\begin{pmatrix}
1 \\\\ 0
\end{pmatrix} \longmapsto 1
$$
So in the 2-geon (potentially coupled, but maybe not) system we need to 
post-multiply by the correlator $E_2$, so we've got,
$$
\begin{pmatrix} 1\\\\ 0\end{pmatrix} \otimes \begin{pmatrix} 1\\\\ 0\end{pmatrix} 
\longmapsto (1)(1)E = E.
$$

I guess the rest of the tensor basis is homework?

**Exercise <a name="Ex.1">1. (a), (b), (c)</a>** write down the other 
three 2-geon basis states.

**Solution <a name="Ex.1-a">Ex.1.(a)</a>** The second of the 1-geon base states goes as,
$$
\begin{pmatrix} 0\\\\ 1\end{pmatrix}
\longmapsto - a^2 I \boldsymbol{\sigma}_2 = i\boldsymbol{\sigma}_2
$$
so the second of the 2-geon base states must go as,
$$
\begin{pmatrix} 1\\\\ 0\end{pmatrix} \otimes \begin{pmatrix} 0\\\\ 1\end{pmatrix}
\longmapsto  (1)(-i{{<S2_2>}}) E = -i{{<S2_2>}} E.
$$

**Solution <a name="Ex.1-b">Ex.1.(b)</a>** The third of the 2-geon tensor base states,
$$
\begin{pmatrix} 0\\\\ 1\end{pmatrix} \otimes \begin{pmatrix} 1\\\\ 0\end{pmatrix}
\longmapsto  (-i{{<S1_2>}})(1) E = -i{{<S1_2>}} E
$$


**Solution <a name="Ex.1-c">Ex.1.(c)</a>** The fourth of the 2-geon tensor base states,
$$
\begin{pmatrix} 0\\\\ 1\end{pmatrix} \otimes \begin{pmatrix} 0\\\\ 1\end{pmatrix}
\longmapsto  (-i{{<S1_2>}}) (-i{{<S2_2>}})E = i{{<S1_2>}}\\,i{{<S2_2>}}E.
$$

I will admit here that visually the column matrix rendition looks more appealing 
and "physical" but that's a bit of a mirage. 
What we are going to see later is that the geometric algebra 2-geon states are 
superior for deriving basic results like the Pauli Exclusion principle.
For that though, we need to get an expression for the singlet 2-geon state.


### The singlet state

Maybe this is an exercise.

**Exercise <a name="Ex.2">2.</a>** Show that the isotropic spin-coupled singlet state, 
$$
\ket{\varpi} = \tfrac{1}{\sqrt{2}} \left(\ket{\scriptsize + -} - \ket{\scriptsize - +}\right)
$$
is expressed in geometric algebra of $\mathscr{P}$ 2-geon space as,
$$
\varpi = \tfrac{1}{\sqrt{2}} \left({{<iS1_2>}} - {{<iS2_2>}}\right) E.
$$
Just naming it "$\varpi"$ for the heck of it, or not really, 
I like the suggestive overbar connector on that Greek letter.

Recall the convention is that when the pseudoscalar $i$ is next to a 
$\underbar{\scriptsize j}\boldsymbol{\sigma}_k$ from one of the spaces of relative vectors we can drop the left script label on it, taking it as implied, so a bit tidier is,
$$
\varpi = \tfrac{1}{\sqrt{2}} \left( i{{<S1_2>}} - i{{<S2_2>}}\right) E.
$$

**Solution 2.** Using the previous tensor base states we've got a sum of two of them, 
from [Ex.1.(a)](#Ex.1-a) and [1.(b)](Ex.1-b):
$$
\begin{array}{rl}
\ket{\varpi} \\!\\!\&= \tfrac{1}{\sqrt{2}} \left(\ket{\scriptsize + -} - \ket{\scriptsize - +}\right) \\\\
 \\!\\!\& \longmapsto \varpi = \tfrac{1}{\sqrt{2}} \left((-i{{<S2_2>}}) - (-i{{<S1_2>}})\right) E \\\\
 \\!\\!\& = \tfrac{1}{\sqrt{2}} \left(i{{<S1_2>}} - i{{<S2_2>}})\right) E \\\\
\end{array}
$$
as required.


**Exercise <a name="Ex.3">3.</a>** Show that $\varpi$ can be factored into two new 
idempotents, as follows:
$$
\varpi = \tfrac{1}{2} \left(1 + i{{<S1_2>}}\\,i{{<S2_2>}}\right)\\,
\tfrac{1}{2}\left(1 + i{{<S1_3>}}\\,i{{<S2_3>}}\right) \sqrt{2}\\, i{{<S1_2>}}
$$

**Exercise <a name="Ex.4">4.</a>** Use the quantum scalar product from 
[chapter 4](../005_spacetime_algebra) to show the singlet state $\varpi$ is 
already unit normalized.


**Comment:** I am pretty sure this spinor encodes a lot of the mystery of 
quantum mechanics. And yet, all we've got is that it is,
* spin-coupled,
* rotationally covariant,
* represents a wormhole bridge between the 1-geons.

and if that third point is taken seriously that's the only non-classical thing 
about the singlet state $\varpi$. 
It's all classical spacetime geometry otherwise, with the weird thing being how 
we interpret this object, a spacetime Pauli spinor, as an instruction for telling 
us what'll happen if we measure the spin orientations at each of the possibly spacelike separated locations $\\{{{<gam1>}}_\mu\\}$ and $\\{{{<gam2>}}_\mu\\}$.

The thing that existing T4G theory cannot yet show is why an ER bridge couples 
the spins in a singlet state and not in one of the other paired states.
On the other hand, this could be taken as a sort of definition of what an 
ER=EPR bridge accomplishes. Then T4G theory would be about figuring out why that is, 
and what sort of properties the putative EPR wormhole has to have.

Actually we did not show $\varpi$ is rotationally covariant.


#### The singlet state is rotationally covariant

You could stop and do this as an exercise, but unless you have facility with 
the tensored geometric algebra it might be a bit odd figuring it out. 
So let's go through it lemma style.

What we need is a joint rotor to perform the rotation, plus the knowledge from 
[the Pauli algebra chapter](../005_spacetime_algebra) 
that under a rotation a spinor transforms by single sided left-multiplication 
(recall all pure $k$-blades would transform double-sided).

The rotor's carry the labels for the separate copies of the frames, so we've got a rotor:
$$
R = {{<R1>}}{{<R2>}}
$$
and to rotate the singlet state, it is:
$$
\varpi \longrightarrow \varpi^\prime = {{<R1>}}{{<R2>}}\varpi
$$
But now a bit of magic happens.
Use the following exercise to simplify the rotated $\varpi$.


**Exercise <a name="Ex.5">5.</a>** Show that for the singlet state,
$$
i{{<S1_3>}} \varpi = -i{{<S2_3>}}\varpi 
$$
and hence that also,
$$
 i{{<S1_1>}} \varpi = -i{{<S2_1>}} \varpi
$$
and hence, finally, that for *any* even multivector $M$, 
in the Pauli algebra $\mathscr{P}$, 
$$
{{<L1>}}M \varpi = {{<L2>}}M^\dagger \varpi.
$$


**Exercise <a name="Ex.6">6.</a>** Use [Ex.5](#Ex.5) to show that the singlet state $\varpi$ is rotationally covariant.

To solve this exercise we might need a hint. We know rotors satisfy,
$$
R\tilde{R} = 1
$$
so since the Hermitian conjugate is in timespace signature, 
$M^\dagger = -\gamma_0\tilde{M}\gamma_0$, and if $M$ is even grade then it 
commutes with $\gamma_0$, so we get,
$$
M^\dagger = \tilde{M},\\quad\text{for $M$ even.}
$$

**Solution 6.** The rotors are even elements of $\mathscr{P}$, so we can directly 
apply Ex.5, and the hint above,
$$
\varpi^\prime = {{<R1>}}{{<R2>}} \varpi = {{<R1>}}{{<L1>}}R^\dagger \varpi = \varpi.
$$
OK, I said it was magic, but we should have proved this result non-magically for 
the singlet state in the previous chapter using the general rotation matrix. 
The reason I did not is because that sucks. The use of rotors for rotation is so 
much more elegant.

The cost was having to prove the lemma above for the even multivectors, 
but that was not so bad. So I guess I lied about it being magic, 
but it's still pretty slick.

Anyway, now we've found spin coupling, rotational covariance, hence ISC states, 
and all with classical geometry and the only weird bit of it being how to 
interpret the coupling, and from T4G we're claiming it's via an ER=EPR bridge.

It should be possible now to state the Pauli Exclusion Principle in this language.
We might even get a slicker proof than in the last chapter.


## The Pauli Principle

In the "[STA and electron physics](https://arxiv.org/abs/quant-ph/0509178)" paper, 
Doran *et al* would develop the wave equations for the multi-particle systems at this stage. 
I'm going to skip that because it's not essential for the rest of this chapter.

All we need to know is that in a measurement theory the Pauli spinors describe well 
enough what the results of measurements of the two-particle system will be, 
and that if the two geons are coupled then the spin measurements will be more 
correlated than classical mechanics can account for, they will be Bell correlated.

The previous expressions using the quantum correlator showed us how to describe such correlations. We are interpreting them as an implied ER=EPR bridge connection, 
such that the pair of particles share two horizons and the same qubits.
Enough qubits to describe two particles, not just one.

So we could say this is "not quite" a minimal Planck wormhole, but it's the 
next most minimal ER bridge.
And as O'Hara's results from the previous chapter already alerted us, 
hardly a more minimal wormhole is possible, since entanglements involving more 
wormholes would have to violate rotational covariance, and so would be *distinguishable* particles.

The trouble was, O'Hara's formalism for all this exploited existing Dirac 
bra-ket machinery, which obscures the *real* geometry. So now we wish to see how 
it is all described with real geometric algebra. And we've already obtained the 
singlet state for a spin $\uparrow | \downarrow$ coupled system.

### What is the Pauli Principle?

You can forget about the field commutation relations, there're not fundamental, 
since the field variables are fictional accounting tools useful for differential 
Hamiltonian time evolution. 
We want to be doing T4G theory, which is global and must deal with a full 
4D cobordism all at once, and that means --- if we do not want to risk madness --- 
simplifying analysis to the spacetime boundaries of a measurement process.

At the measurement boundaries what matters are the symmetry principles, 
since they express what is conserved. (Deep down that's all the field 
variable commutators were expressing as well.)

But at this level of analysis this means the Pauli Exclusion Principle boils 
down to a simple statement about symmetry of the wave functions or spinors 
used to describe possible outcomes of spin measurements.
(Implying a magnetic field of some sort or another, possibly Stern-Gerlach, 
or more naturally the Coulomb fields of an atomic nucleus. Anything that can 
be counted as a type of detection of the geon's spin.)
The statement is, for a wave packet $\psi = {{<psi12>}}$ describing two-geons, 
$$
\psi (\vec{r}) = -\psi(\mathcal{I}\[\vec{r}\]).
$$
where $\vec{r}$ is an 8-dimensional coordinate vector, and
$$
\vec{r} = {{<q1>}} + {{<s2>}}
$$
is the multi-particle 3-space position tensor, and $\mathcal{I}$ is abstractly
the operation (we know not yet how to do it) of "swapping the particles", that is,
abstractly, 
$$
\mathcal{I}\[ {{<q1>}} + {{<s2>}} \] = {{<s1>}} + {{<q2>}}
$$


((Have a bit of a stare at that for a minute. The English symbols $q$ and $s$ 
are standing for Euclidean vectors 
$(x=q_1, y=q_2, z=q_3)$, and $(x=s_1, y=s_2, z=s_3)$, while the left 
underbar scripts stand for the separate copies of the spacetime frames, i.e., 
particle labels. 
So the abstract operator $\mathcal{I}$ really is "swapping geons".))

The point of the Pauli Principle is that when the particles are indistinguishable, 
we should see no essential physics change if we swap them around, and yet if we 
make some physical swap (via say wormhole traversals) something does change, 
a sign on the two-geon wave function. This sign change has no effect classically, 
due to employment of Kolmogorov probabilities, but quantum mechanically it is a 
phase change on the measurement algebra descriptors (the spinor tensor) and can lead 
to interference effects, and that's what "causes" the Pauli exclusion phenomenon.
It's an interference phenomenon.

In T4G terms, it is an effect of wormhole topology, which is the underlying 
cause of all the non-classical interference effects.

To do this in $\mathscr{P}$ we first seek a multivector operator 
(so just a multivector) that 
swaps $(x,y,z)$ coordinates on a spinor like the singlet state $\varpi$, 
but which does so for *both* of the tensor subspaces simultaneously, 
so it has to invert or swap a frame 
$\\{{{<lsup1>}}\\}$ with a frame $\\{{{<lsup2>}}\\}$.

But we cannot simply parity swap the coordinates in the geometric algebra 
$\mathscr{P}$ treatment, because recall the two-geon spinor ${{<psi12>}}$ was 
a little more complicated than a 1-geon spinor, since it has two copies of the 
spacetime algebra. It's a tensor product space object.

So we need a frame swapping multivector operation, and there isn't one 
single multivector geometric product to do this (at least I think not, 
you could try finding one). But there is a next best thing, 
which is a single multivector that can perform the frame swapping by a 
double-sided geometric product, so just like the action of a rotor for rotations. 

### The geon exchange operation $\mathcal{I}$, in GA

And to be honest I have no idea how long it would take me to figure out what it is, 
probably days, maybe weeks. Luckily I never had to, since 
[Doran et al](https://arxiv.org/abs/quant-ph/0509178) found it for us.
All we need to do is verify that it works. It is denoted $\mathcal{I}$ 
(for "frame inversion" I guess, but it is really a swap, not an invert, 
but whatever...) 
and is defined by,
$$
\mathcal{I} = \Gamma_0\Gamma_1\Gamma_2\Gamma_3
$$
where,
$$
\Gamma_\mu = \tfrac{1}{\sqrt{2}}\left({{<lsup1>}} + {{<lsup2>}}\right).
$$

Checking this works can be now made into exercises.

**Exercise <a name="Ex.7">7</a>** Show that,
$$
\mathcal{I}^2 = -1.
$$
this is what we'd expect if we think we need to act double-sided by $\mathcal{I}$ 
to do a coordinate frame swap.


**Exercise <a name="Ex.8">8</a>** Show that $\mathcal{I}$ does indeed invert 
coordinates in each tensor subspace correctly, that is,,
$$
\mathcal{I}{{<lsup1>}}\mathcal{I} = {{<lsup2>}},\qquad\text{and}\qquad 
\mathcal{I}{{<lsup2>}}\mathcal{I} = {{<lsup1>}}.
$$
In other words, $\mathcal{I}$ is confirmed as the particle-exchange operation 
in the geometric algebra $\mathscr{P}$.


**Exercise <a name="Ex.8">8</a>** it is trivial now to show that,
$$
\mathcal{I}\left({{<q1>}} + {{<s2>}}\right)\mathcal{I}  = {{<s1>}} + {{<q2>}}.
$$
all you need to do is note ${{<q1>}} = {{<lsup1>}}q^\mu$
and ${{<s2>}} = {{<lsup2>}}s^\mu$, for $\mu\in\\{0,1,2,3\\}$.


## Geon exchange is rotationally covariant

Recall the Pauli Principle, or ISC statistics, applies only to pairs of geons, 
and in particular we get Fermi-Dirac statistics for the singlet state $\varpi$. 
We are cheating here because we know this from orthodox QM. Nevertheless, for 
geometric algebra pedagogy we can imagine some genius figuring this out 
using the GA language rather than Dirac bra-kets.
We're going to skip the tormented genius scribbling in vain stuff.

But the question to hand is how do we know the geon exchange 
$\mathcal{I} \psi \mathcal{I}$ will preserve rotational covariance?

We should also worry about preserving solutions to the Dirac equation, 
since we'd like the geon-exchanged two-geon system to be a solution to the 
Dirac equation, otherwise it will not be counted as "behaving like a fermion".
You might think this is trivial, since "How can swapping the coordinate 
frames possibly change solutions to the wave equations?" 
You'd be right, but we have no right to just assume this. 
So we also have to show the exchanged state is a symmetry of the 
Dirac equation for paired geons.

These are the two next tasks: check $\mathcal{I} \psi \mathcal{I}$ is; 
(i) rotationally covariant, 
(ii) Lorentz invariant,
(iii) a symmetry of Dirac 2-geon equation.

These are perhaps a bit more than homework exercises, so I'll walk through them 
pedestrian like.

### Rotational covariance

The problem to solve is to show that if we rotate the tensored frames 
$\\{{{<lsup1>}}\\}$ and $\\{{{<lsup2>}}\\}$ equally, then we should paranoid-like in 
*a worst case scenario* expect to get a "different" geon-exchange 
operator $\mathcal{I}^\prime$, which *would be a bad thing* because it would mean 
$\mathcal{I}$ would depend upon our choice of spacetime frames, 
and we actually want it not to! 
We would like to find a 2-geon exchange operator that does **_not_** depend 
upon our choice of frame! 

So instead we hope that the naïve paranoid expectation is wrong and that when 
we rotate the frame basis vectors nothing happens to the new $\mathcal{I}^\prime$ 
it should end up equal to the original $\mathcal{I}$. So let's see if the good 
scenario is always going to be true.

We rotate frame vectors as normal in GA with a rotor,
$$
{{<lsup1>}}^\prime = {{<R1>}} ({{<lsup1>}} ){{<R1rev>}}
$$
and similarly for the other tensor subspace, with a rotor ${{<R2>}}$.
This will change the $\Gamma_\mu$ in the definition of $\mathcal{I}$, 
and that will completely describe or new $\mathcal{I}^\prime$ by definition. For the $\Gamma$ we've got,
$$
\Gamma_\mu^\prime = \tfrac{1}{\sqrt{2}}\left( {{<R1>}} ({{<lsup1>}} ){{<R1rev>}} + 
 {{<R2>}} ({{<lsup2>}} ){{<R2rev>}} \right)
$$
but the slickness of our notation means we can gather the rotors to the left 
and right hand sides, since each labelled rotor acts only on it's labelled tensor 
subspace, hence,
$$
\begin{array}{rl}
\Gamma_\mu^\prime\\!\\! \&= \tfrac{1}{\sqrt{2}} {{<R1>}} {{<R2>}} \left( {{<lsup1>}}  + 
 {{<lsup2>}} \right) {{<R2rev>}} {{<R1rev>}} \\\\
 \&= \tfrac{1}{\sqrt{2}} {{<R1>}} {{<R2>}} \\,\Gamma_\mu\\, {{<R2rev>}} {{<R1rev>}} 
\end{array}
$$
We have to use this to define the new $\mathcal{I}$, which is the geometric 
product of all these, which is thus,
$$
\mathcal{I}^\prime = \tfrac{1}{\sqrt{2}} {{<R1>}} {{<R2>}} \\,\Gamma_0\\, {{<R2rev>}} {{<R1rev>}} {{<R1>}} {{<R2>}} \\,\Gamma_1\\, {{<R2rev>}} {{<R1rev>}} 
\ldots {{<R1>}} {{<R2>}} \\,\Gamma_3\\, {{<R2rev>}} {{<R1rev>}} 
$$
Now notice tall the inner rotors cancel in pairs, since $R\tilde{R}=1$ for any 
individual rotor whatsoever. So this is cleans up to,
$$
\mathcal{I}^\prime = {{<R1>}} {{<R2>}}\\, \mathcal{I}\\, {{<R2rev>}}{{<R1rev>}}
$$
To finish the demonstration we need to consider what this "new" $\mathcal{I}^\prime$ does to even elements in $\mathscr{P}$. For scalars it is obvious, since they just "move through" all the rotors, and that will leave us with $\mathcal{I}^2 = -1$.

For other even elements we've only got bivectors like $a\wedge b$ in each subspace. 
But consider how the original $mathcal{I}$ acts double-sided on *any* bivector in 
the single geon subspace, 
$$
\begin{array}{rl}
 \mathcal{I}\\,{{<a1>}}\wedge {{<b1>}}\\, \mathcal{I} \\!\\!
 \&=  -\mathcal{I}\\,{{<a1>}}\\,\mathcal{I} \wedge \mathcal{I}\\, {{<b1>}}\\, \mathcal{I} \\\\
 \&= -{{<b2>}}\wedge {{<a2>}}\\\\
\end{array}
$$
where on the second line there we just *inserted* a pair $\mathcal{I}^2$ which 
is illegally inserting a $-1$, hence the prefactor $-1$ out front to cancel 
this to make it legal *al-jabr*.

In other words, the effect of sandwiching a bivector between 
$\mathcal{I}(\ldots)\mathcal{I}$ is to exchange the tensor spaces but with a 
sign change too. The bivector gets flipped a sign upon particle exchange.
There is no such change for a vector or odd grade element of the algebra, 
they just get exchanged *without* a sign change, since the $\gamma_\mu$ do.

So think about this.  Rotors have only even grade terms. 
This means we can, by using the same trick of inserting a few $\mathcal{I}^2$, 
write,
$$
\begin{array}{rl}
 \mathcal{I}\\,{{<R1rev>}}{{<R2rev>}}  \\!\\!
 \&= - \mathcal{I}\\,{{<R1rev>}}\\,\mathcal{I}\\,\mathcal{I}\\, {{<R2rev>}} \\\\
 \&= + {{<R2rev>}}\\, \mathcal{I}\\,{{<R2rev>}}  \\\\
 \&= - {{<R2rev>}}\\, \mathcal{I}\\,{{<R2rev>}}\\,\mathcal{I}\\,\mathcal{I}  \\\\
 \&= + {{<R2rev>}}\\,{{<R1rev>}}\\,\mathcal{I}
\end{array}
$$
Now substitute this result for the last three factors in the above expression,
$$
\mathcal{I}^\prime = {{<R1>}} {{<R2>}}\\, \mathcal{I}\\, {{<R2rev>}}{{<R1rev>}}
$$
and we get,
$$
\begin{array}{rl}
\mathcal{I}^\prime \\!\\!\&= ({{<R1>}})({{<R2>}})({{<R2rev>}})({{<R1rev>}})\mathcal{I} \\\\
\& = \mathcal{I}
\end{array}
$$
which is what we hoped for, the geon-exchanger $\mathcal{I}$ is rotationally covariant.
qed.

I used a few parentheses to make it easier to read back there, you can see repeated 
applying unitarity of rotors $R\tilde{R}=1$ vanishes them all.


### Lorentz invariance of $\mathcal{I}$

I have no plans to write on this, since Lorentz invariance is a matter of checking 
the action of $\mathcal{I}$ does not change under a boost.
But boosts are nothing but rotations with the timelike relative bivectors in the STA, 
and we've already shown the exchange operator is invariant under rotations.

But if you wish to check the fine details then just look at section 9.5 in the [spacetime algebra and electron physics paper.](https://arxiv.org/abs/quant-ph/0509178)
It is only a couple of paragraphs long, so hardly worth reproducing here.


## Dirac wave equation symmetry

It is slightly more interesting to run through the check that the exchanged 
wave-function is still a solution to the Dirac Equation for the two-geon system, 
because this requirement does not automatically follow from rotational invariance. 
The problem is I have not yet covered Dirac Theory, so let's defer this until 
after we go through Dirac-Hestenes spinor theory.

So let's mark this section as a TODO. I will try to remember to put it at the end of the 
[Hestenes Spinor chapter.](../010_hestenes_spinors)



## todo

```
[TODO: unfinished.  Work in progress. Rest of Doran et al 2005 Sec.9.5...]
```

## Summary of Pauli Exclusion

There is a lot more that could be written on the applications of Pauli exclusion 
and "exchange forces". In STA there are numerical simulations for one, 
but I am not interested in such applied physics. It stretches my time too thin.

Here we can just make do with summarizing what Pauli Exclusion looks like in simplest fundamental terms in the geometric algebra.

First, we find that the exchanged state,
$$
\psi\prime = \mathcal{I}\\,\psi(\mathcal{I}x\mathcal{I})\\, \mathcal{I}
$$
is Lorentz invariant and a solution to the Dirac equation whenever $\psi(x)$ is a solution.

Second, this being the case we know the fully anti-symmetrized wave function, 
denoted $\psi_\mathcal{I}$, 
$$
\psi_\mathcal{I} = \psi(x) + \mathcal{I}\\, \psi(\mathcal{I}x\mathcal{I})\\, \mathcal{I}
$$
thus also solves the Dirac equation, but also is by construction invariant under the exchange operator,
$$
\psi_\mathcal{I} = \mathcal{I}\psi_\mathcal{I}(\mathcal{I}x\mathcal{I})\mathcal{I}
$$
This last expression is the full and complete statement of Pauli Exclusion 
in the spacetime Pauli algebra. All the practical effects of Pauli Exclusion follow therefrom.

Finally, and this is what orthodox QM and QFT cannot and do not supply, we have 
available now a realist underpinning for Pauli exclusion, which is that the effect 
follows from pair-wise coupling in a rotationally covariant "state" --- which in orthodox 
QM and QFT is nothing but a mathematical formalism, hence quite mystical. 
In T4G theory we have a realist *picture of this mathematics*, which is that an 
ER=EPR bridge connects the pairs in these Bell states, and so entanglement, 
*à  la* Paul O'Hara, is responsible for Pauli Exclusion.
O'Hara almost had this, but did not posit the ER bridge as the geometric causal factor.

The singlet state we denoted $\varpi$ in the last chapter, is the Measurement Theory 
description of a minimal Maldacena-Susskind wormhole topology. We all it a "quantum state" 
but in fact it is pure gravity. Non-classical *classical* gravity mind you.

This statement or claim might make more sense to you after reading the chapter on 
[Spin Measurement Part-2.](../011_spin_measurement_part2)
The key is the "quantum state" or "wave-function' needs to be interpreted as 
instructions for what can happen (what we need to do to a lab reference frame) 
*when we conduct measurements*. The "sate" is **_not_** the elementary particle.
The "quantum state" is *physically* in fact a *process*, not an *object*.


## Two Slit Experiment Amplitudes

To my mind the simplest way to conduct a mathematical formal analysis of Young's 
experiment with *single photons* is the path integral formulation of Feynman. 
And for beginners the simplest way to do *that* is to make the 
first order approximation that the classical ray trajectories dominate the path integral.

This is a bit gross and icky for purists, but it is a fair pedagogical way to go. 
I'm not saying "go way and compute the full path integral to check," I am saying 
others have done so and there is no use in reinventing such a pedantic wheel.

However, that is not the reason I want to make the ray approximation.

I want to make the approximation because my interest is in getting to the 
core of T4G theory explanations.  And the core of the T4G account of the 
Two Slit experiment is not the sum-over-histories. The core is the simple 
ER bridge entanglement.
This is O'Hara's lesson: Pauli exclusion and interference for singlet states is 
more fundamentally a coupling principle, not a superposition principle.

The reason superposition comes into play at a first or zeroth order level in the 
Two Slit experiment is really only because the singlet state $\varpi$ is described 
in the mathematical formalism by a superposition. 
In T4G theory we recognize it not as a superposition, but as a wormhole bridge. 
The geon really is in two places at any time, but when detected the ER bridge 
must collapse and so it is no longer in two places, at least not for a 
split second or femtosecond or whatever --- until it gets entangled with bits 
of the measurement apparatus and then thus spread out again.

You have to remember to not take this T4G picture as "realty" because it is only 
a mental model. I'm betting on it being something close to true reality 
(for my Ko-Fi funding fans), but you should not. You should ask yourself if this 
mental model has flaws, and if so how to correct them or use them to definitively 
disprove T4G theory. 



## Caveats

This is more a teaser than a caveat. I want to point out another of Paul O'Hara's papers, 
this one is on the "[EPR Paradox and SU(2) symmetry,](https://iopscience.iop.org/article/10.1088/1742-6596/1239/1/012021/pdf)" --- in it O'Hara almost gets around to using 
geometric algebra, as we've done in this chapter, but he failed to release himself 
from the grip of the matrix representation of the Pauli algebra.

At the end of his paper O'Hara rediscovers the result of Hestenes, Lasenby and Doran, 
et al., which is that the bivector which encodes the instruction to rotate is a component 
factor of the Pauli spinor $\psi$, and further, that it is the invariance of the 
coupled 2-geon bivector under SL(2,$\mathbb{C}$) which is responsible for EPR correlation. 
In addition the spin vector property of the particle (geon) described by the 
instruction $\psi$, is SU(2) frame-of-reference dependent.
Finally O'Hara suggests multipartite entanglement seen in GHZ states is an 
analogous consequence of a more general invariance under a semi-group, 
denoted SM(2,$\mathbb{C}$). 

O'Hara somewhat mystically writes this as an expression that, 
"*the whole is more than the sum of its parts*," but T4G provides a 
non-mystical account for that, which is that an ER bridge connects the 
"parts" of every "elementary particle." So the deep principle rediscovered 
here is only that elementary particles are (a) not point-like, and 
(b) are not trivially embedded in spacetime like superstrings or $p$-branes, 
but are rather non-trivially connected, via wormhole topologies.

What I would suggest is that with the aid of the geometric algebra approach 
developed by HLD and colleagues, we are probably well situated to account for 
GHZ states within the geometry of spacetime rotors.

My own attitude to this project is that it'd be nice to complete, 
but I feel it is more applied physics than fundamental physics, 
so I have to leave it to cleverer people to polish off.


[Next chapter (Interference from Entanglement)](../009_interference_from_entanglement)  
[Previous chapter (Pauli Exclusion from Entanglement)](../007_pauli_ex_entanglement)  
[Back to Theory TOC](../)
