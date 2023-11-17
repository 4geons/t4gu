---
title: "Pauli Exclusion from Entanglement"
description: ""
date: 2016-10-30
lastmod: 2016-10-30
cover: ""
coverAlt: ""
toc: true
tags: []
katex: true
---

The necessary background for this chapter is a course on advanced quantum mechanics. 
But you do not need the whole course. 
Just the foundations and up to treatments of Hilbert spaces and spin states is 
sufficient, which is mostly logic and linear algebra, no dynamics needed. 
However, I thought it much more sensible and rational to use the geometric 
STA approach to spin, and so even if you have advanced QM background 
(Sakurai or Ballentine) I would recommend checking out my previous chapter 
on [Pauli algebra](../005_spacetime_algebra) and
on [spin measurement,](../006_spin_measurement_part1) and *then* you'll be able 
to follow the --- in many ways nicer --- account of Pauli exclusion or 
spin--statistics in the [next chapter,](../008_pauli_in_ga) when we repeat this current chapter 
using geometric algebra.

This chapter is better done using orthodox QM. I'm not yet sure why this comes 
out pedagogically nicer, it just does, but I think that's a failure of mine to 
motivate O'Hara's spin--coupling principle starting with geometric algebra. 
But obviously we could do it that way. Maybe it's just because I found it 
emotionally difficult not to *credit O'Hara first*. In my mind he's as important 
as Hestenes, Lasenby & Doran, just as important, and even more under\-appreciated.

((This is a lovely thing about T4G theory, I find accidentally I am acknowledging 
quite a few unsung heroes of theoretical physics. As well as the odd giant. 
And we'll not be stopping at Lenny, Juan, HLD and O'Hara!))


## Isotropically spin-coupled = entangled

In T4G theory all 4-geons can be entangled by being connected by a minimal 
(ER=EPR) wormhole bridge.
(Got a problem with that? Then take it up with 
[Maldacena](https://arxiv.org/abs/1306.0533) and 
[Susskind,](https://arxiv.org/pdf/1412.8483) and 
[GR=QM](https://arxiv.org/pdf/1708.03040))

We now *repeat* [Paul O\'Hara\'s work,](https://arxiv.org/abs/quant-ph/0109137) 
for pedagogical purposes. 
But now with the insight that the spin-coupling is actually an ER bridge.

No geometrodynamics are assumed, so we know this is all consistent with T4G 
and ER=EPR. 
We do not yet know if geometrodynamical implications will help to refute T4G theory. 

What does this mean for theory development?

It means that T4G can explain the Pauli Exclusion Principle. 
That is, if you like to think of T4G as a good model for fundamental physics, 
then *at least* you get Pauli exclusion right. 
"At least," ok? This is not total confirmation of T4G theory.

### A bit of ontology

Next up we are going to define entanglement of spins states (a specific type 
of entanglement) using [O\'Hara\'s](https://arxiv.org/abs/quant-ph/0109137) 
concept of *isotropic spin-coupling* (ISC). 
We then follow O'Hara almost verbatim, to show ISC states can only exist in 
**_pairs_**. 
From this almost trivially (a few pages of mathematical physics, just linear 
algebra mostly) the Pauli Exclusion Principle will follow.

All of O'Hara's work presumes the orthodox QM postulates. 
We however must obey only the T4G postulates. It turns out we can. 
But this means a shift in ontological perspective.
This will have geometrodynamical implications that we do not fully understand 
yet, so it might fail ontologically. 
But in-principle we will have derived the PEP from T4G theory.

If the T4G ontology fails for other reasons, we have still derived the PEP from entanglement.
All that this failure of the geometrodynamics would imply, if indeed it fails, 
is that we still have no ontology for "quantum" entanglement.
However, Maldacena and Susskind's ER=EPR conjectures (because now there are 
[several of them](https://arxiv.org/pdf/1412.8483)) suggest the basic T4G ontology 
looks pretty good (a non-scientific statement, but take it for what it is.)

Our aforementioned ontological shift is to note that ISC states are 4-geons 
connected by a minimal spacetime wormhole bridge, an ER bridge. 

As just noted, this is not an awfully big perspective shift for the present purposes, 
because no geometrodynamical implications are invoked in the derivation of the 
Pauli exclusion principle.
All it amounts to is giving the reader a mental model of what an ISC state looks 
like if you happened to have a Planck microscope.
The only difference with O'Hara's paper is thus that he gives no mental 
**[pictorial model.](https://arxiv.org/abs/0908.1787)**  See [Bob Cooke\'s stuff.](https://arxiv.org/abs/0908.1787)

That's the preliminaries, now we have to do the basic mathematics. 
It ain't too hard, thanks to Paul O'Hara having done it for us, 
all we at T4GU need is a nice exposition chapter. 
The philosophy to aid understanding will be continued at the end and at the 
beginning of the [next chapter](../008_pauli_in_ga) when we repeat this using the 
*real* geometric algebra --- to "prove" it's got nothing to do with the 
axioms of Hilbert space quantum mechanics. It's all classical geometry, 
only with non-trivial spacetime topology.

Who would've thought it could be so simple, huh? 
Although, the $\mathcal{GA}$ version we'll do in the next chapter looks a 
bit nastier, I have to admit. But I think that's only because of the 
unfamiliarity with GA --- we were not taught GA from kindergarten.


## Spin states

We'll introduce some notation for a simple system of $n$ particles, 
together with a Stern-Gerlach type of apparatus, which means we can ignore most 
of the information and focus only on the component part of the wave-function 
for this type of spin measurement.

A general $n$-geon wave-function will be denoted,
$$
|\psi\rangle = |\psi(\lambda_1, \lambda_2,\ldots \lambda_n)\rangle
$$
where the parameters $\lambda_i$ are whatever we need to specify states w.r.t. 
to possible measurement observables. In our case this could be position 
or momentum as well as spin orientation. But we're going to be mostly concerned 
just with the spin.

What is "spin"? 

In this context all it means is deflection "up" or "down" by the Stern-Gerlach 
apparatus. 
We do not need it to mean much more, except for one critical thing:
> the spin state is rotationally invariant.

This refers to abstract rotation in the Hilbert space $H_1\otimes\ldots \otimes H_n$, 
not in real Euclidean space.

But *also* in *real* space if we rotate the whole experiment around in space, 
including the geon, we'll get the same measurement outcomes too 
(statistically of course, since we're doing QM not CM). 
That is, the amplitudes of the wave-function remain invariant upon a rotation 
of the system. 
But the same applies if we rotate the Hilbert space states around "internally".

Abstractly, an "internal" rotation on particle $i$ is a result of applying the operator 
$R_i(\phi)$, and the same on particle $j$ is $R_j(\phi)$, then 
$$
\text{Rotaional invariance:}\quad \[R_i(\phi), R_j(\phi])\] \circ |\psi\rangle = |\psi\rangle.
$$
Not all states of $n$-geons will be rotationally invariant like this, 
the rotationally invariant states are *special*.

OK, so strictly speaking we aught to note that there was a tensor product 
Hilbert space $H_1\otimes H_2$ and so forth, and $\psi\in H_1\otimes H_2$ would 
be one of the $n=2$ geon systems. We cooked up only two electrons.

But all that generalizes to $n>2$ multiparticle states, if we have the 
electricity to cook up $n$ electrons. Here electron$\leftrightarrow$geon. 
And suppose we do not lose track of any of the little buggers.

The $k^\text{th}$ geon thus will result in some recorded spin on our S-G detector, 
but due to the way we set-up this type of experiment there're only two possible 
instrument readings, $\uparrow$ or $\downarrow$. 
So let the observed $k^\text{th}$ geon be in one of the reduced "spin states" 
denoted by 
$s_k(\theta) = |\pm\rangle$ where for later eye-ball convenience 
'$+$'$=\uparrow$ and '$-$'$=\downarrow$.

$\theta$ is the angle of the Stern-Gerlach magnetic field orientation w.r.t. our 
lab technicians vertical $z$ (or $\boldsymbol{\sigma}_3$) axis. 
OK, so we can rotate our hulking big magnet around.


### What exactly is rotationally invariant?

I think it needs to be stressed that what is invariant above is the whole experiment. 
We cannot separate the state $|\psi\rangle$ from the measurement system, 
since it is in the basis we choose --- by choice of measurement apparatus --- 
that we are expanding $|\psi\rangle$. 

We chose the Hilbert space $H_1\otimes H_2$ to describe the system. 
Now whether this is just "the pair of electrons" or the pair of geons, 
or "geons + measurement apparatus" 
is a fair point to quibble about. But instrumentally we cannot say it's 
"only the electron". It makes no sense in QM to think of an isolated 4-geon, 
since we can only know there is a particle at all by interacting with it. 

Also, the fact the rotational invariance refers to the whole system, 
characterized by the "state vector" $|\psi\rangle$ is clear enough from the 
description of "rotation" above. We rotated an object clearly *in the Hilbert space* 
not in real Euclidean or Minkowski spacetime. 

Obviously if we rotated *just* the 4-geon (electron) and *not* the magnetic field, 
we'd get a different system, *that* sort of space rotation would not be an invariant.
Hope that is all clear.

If you beg to differ, then [donate](https://ko-fi.com/achrononmaster/) and let me know.

### Some notation

I'll denote by $s^\perp_k(\theta)$ the spin state of the $k^\text{th}$ geon 
which is orthogonal to $s_k$.

We do not know ahead of time whether $s_k(\theta)$ will turn out $+$ or $-$, 
only that by set-up it'll be one or the other. We *would* know the amplitude for 
each though, in an independent geon state, if we knew the geon was initially 
aligned at $\theta=0$ or $\theta=\pi$, since in those two special cases we'd 
get with $P=1$ (for sure) the results $+$ and $-$ respectively. 
But we're going to be considering arbitrary angles for the magnetic field can 
be dialed up at will by the experimentalist.

So, if the unknown spin of the geon was actually at some angle $\theta$ w.r.t 
the magnetic field (which is in the $z$ direction) then it will have probability,
$$
\begin{array}{ll}
\&P = \cos^2(\theta/2) \quad \text{for projecting to}\quad |+\rangle,\\\\
\text{and,}\& \\\\
\& P = \sin^2(\theta/2) \quad \text{for projecting to}\quad |-\rangle.
\&\end{array}
$$
We worked all that out in the previous chapter.


## Spin-Coupled States

Now we add a twist to the experiment. We cook up geons (electrons) that are 
maximally entangled. This means there are several EPR wormhole bridges 
connecting the geons, such that:
> If any one of the geons spin is measured, we will know the spins of all 
the $(n-1)$ others simultaneously. <br> <div style="text-align:center">(An **_ISC_** state.)</div>

And of course we'll imagine conducting all the $n$ measurements simultaneously, 
or as near to as can be humanely arranged.

Such a batch of nicely cooked up geons are called an Isotropically Spin Coupled 
system, or **_ISC_** state. The reason we can call this rotationally invariant 
system a single "state" is precisely because they're fully entangled or 
coupled by a sequence of wormhole bridges.
We do not attempt to mentally picture this topology --- partly because we've 
read ahead a few paragraphs and know that there's only one sort of wormhole 
coupling that nature will allow.

((Yeah, ok, I get it. I also hate pedagogy done by magical "look-ahead". Deal with it.)) 

This means we can write down a single wave-function in 
$H_1\otimes H_2\otimes\ldots \otimes H_n$ for this sort of fully entangled state.

((And do not fear, in the next chapter we will show how to do this in the 
real geometric algebra. Here we are bowing to the orthodoxy and doing it the 
old fashioned Hilbert space way. Tipping our hat to O'Hara.))

### The general $n$ particle case

With respect to our Stern-Gerlahc experiment, the general state of interest is a linear combination of the $s$ and the orthogona $s^\perp$, which could be written:
$$
|\psi\rangle = \tfrac{1}{\sqrt{2}}\left(s_1(\theta)\otimes s_2(\theta)\otimes\ldots \otimes s_n(\theta) \pm s^\perp_1(\theta)\otimes s^\perp_2(\theta)\otimes\ldots \otimes s^\perp_n(\theta)\right)
$$
OK, breath.  We are not going to need all of that.


### Notation for tensor spaces

If we have three 4-geons in respectively pure states $\uparrow$, $\downarrow$, 
$\uparrow$, we will denote the system of all three of them by,
$$
|\psi = |+\rangle \otimes |-\rangle \otimes |+\rangle
$$
and then to be awfully crude we'll drop the tensor product symbol, it will be "implied",
$$
|\psi = |+\rangle|-\rangle|+\rangle
$$
and then we'll go the whole hog and drop the separate bra's and just write 
the lazy notation,
$$
|\psi = |{\scriptsize + - +}\rangle
$$
and similarly for any of the $2^8$ combinations of the spin measurement outcomes `$\pm$'.

And similarly for any whole number $n$ of geons: $|{\scriptsize + + - + - - - +}\rangle$ 
for instance for one of the $n=8$ geon systems.

In fact, I kind of like the lazy notation, it usefully encapsulates the mental 
concept that "the system" really is "a whole".


### Forbidden states

States where the spins of $(n-1)$ of the geons cannot be determined from a 
measurement of one of them, say $s_1$, or any one $s_k$, are forbidden 
from being "**ISC**." 
They are *allowed* in nature, in fact they'll be the generic class of states, 
but if they occur then they're not maximally entangled.

This just means if we had a magical Aasgardian cube that maximally coupled 4-geons, 
then a state like,
$$
\psi = \tfrac{1}{\sqrt{2}} \left( |{\scriptsize + + -}\rangle + |{\scriptsize - - +}\rangle + |{\scriptsize + + +}\rangle \right)
$$
would be excluded from the cooking of this Aasgardian cube. Why?  
Because, for instance, 
if we measured the first spin $s_1=|+\rangle$ then *either* or both of the 
first or last terms in this linear combination could get projected, 
so we'd surely know $s_2=|+\rangle$ but we would have no clue what the 
third geon state $s_3$ was.

That above state $\psi$ could come out of the cube of course, 
but then our cube would be broken, 
we'd have to send it to the dwarf repair shop.


## Monogamy of entanglement  {#theorem-1}

**Theorem 1:** ISC states can only exist in pairs. 
<a name="Thm-1"></a>

**Proof:** There is no proof. This is an empirical observation, we interrogate 
nature about it. Nature seems to hold to the bargain.

However, given quantum mechanics has the necessary empirical backing, 
we can take the postulates as given and then show that a proof of the ISC theorem 
can be derived. I'm still not calling this a proof because that does violence 
to the language of mathematics. I'm only going to give a physicists hand-waving 
justification. 
But you can feel free to rigorously construct the mathematical proof in the 
privacy of your torture chamber if you like, don't let me stop you.

To begin: we only need to consider the case of three coupled geons, because 
if three cannot be maximally coupled, then neither can there be $n$=4, 5, ...

Good. So the spin states of two coupled geons can have the form, <a name="Eq.1">(Eq.1)</a>
$$
\begin{array}{ll}
\& |\psi\rangle = \frac{1}{\sqrt{2}}\left( |{\scriptsize + +}\rangle + |{\scriptsize - -}\rangle  \right) \\\\
\text{or} \& \\\\
\& |\psi\rangle = \frac{1}{\sqrt{2}}\left( |{\scriptsize + -}\rangle - |{\scriptsize - +}\rangle  \right)
\end{array}
$$
those would be two of the allowed ISC states. The second of these is called the 
**_singlet state_**. 
The first of them is "pseudo-singlet" and is rarely observed in the wild, 
but it is a valid ISC state, and can be produced in quantum computers using Hadamard and CNOT gates.

The minus sign in the singlet paired state ensures rotational invariance in the 
Hilbert space.

The theorem is to prove these two are the only possible ISC states, 
for any number $n$ of coupled 4-geons.

As noted above, we only need a proof for $n=3$, because if we cannot get 
three ISC coupled 4-geons, we'll never get 4 or 5 or more.

The proof is by contradiction.  **_Suppose we do have three ISC geons._**

Then by appropriate use of Stern-Gelach polarizers we can conduct three simultaneous measurements using magnetic fields aligned by $\\Delta \theta = \pi/3$ radians 
angle spreads.
As in the figure below:

{{< Three_ISC_measurement >}}

Denoting $\theta_{ij}$ the spread between the $i^\text{th}$ and $j^\text{th}$ 
electron's spins $\mathbf{S}$, and using the previous theory for the spin states, 
we can write down a few simple relations concerning the probabilities of 
observing various combinations of the spins, assuming they are ISC as our magic 
box specifies.

For instance, if $S_i$ and $S_j$ are spread by $\theta_{ij}$ in the measurement plane, 
or that's how they align relative to the magnetic fields, then, if 
$s_i = |+\rangle$ and $s_j=|-\rangle$ are the measurement outcomes, 
we'd expect to see this with probability,
$$
P(s_{i=+}, s_{j=-} ) = \tfrac{1}{2}\sin^2(\theta_{ij}/2).
$$
This is from our theory in the previous chapter.
One specific relation then is the set inclusion,
$$
\\{ (+ + -),\\, (+ - -) \\} \subset \\{ (+ + -),\\, (- + - ),\\, (+ - +),\\, (+ - -)\\}
$$
which by standard measure theory means,
$$
P\left( {\scriptsize (+ + -)},\\, {\scriptsize(+ - -)} \right) 
\le P\left( {\scriptsize (+ + -)},\\, {\scriptsize(- + -)},\\, {\scriptsize(+ - -)},\\, {\scriptsize(+ - +)}\right)
$$
Now if we look at the pairs with opposite outcomes in each measurement triple, 
but with the same outcome for that pair in the sets just defined, 
we can see this inequality implies,
$$
\tfrac{1}{2}\sin^2(\theta_{ik}/2) \le \tfrac{1}{2}\left(\sin^2(\theta_{jk}/2) + \sin^2(\theta_{ij}/2) \right) 
$$

Here is where we test the specific set-up in the above figure, 
with the magnetic fields aligned at $\theta=\pi/3$ intervals. 
In this particular case we have $\theta_{ij}=\theta_{jk}=\pi/3$ 
and $\theta_{ik}=2\pi/3$.
For which,
$$
\sin^2(\theta_{ik}/2) = \tfrac{3}{4},\quad\text{and}
\quad \sin^2(\theta_{jk}/2) + \sin^2(\theta_{ij}/2) = \tfrac{1}{2}.
$$
and so if the three geons are ISC this implies,
$$
\tfrac{3}{4} \le \tfrac{1}{2}
$$
a contradiction. Therefore our supposition has to be false.  Therefore
ISC particles can only exist in pairs. Which completes the "proof".

The reason we know *paired* ISC states *can* occur is because we explicitly 
constructed two of them in [(Eq.1)](#Eq.1).
 
For what it's worth, I think the above demonstration due to [Paul O\'Hara](https://arxiv.org/pdf/quant-ph/0310016) is 
cleaner than the Wikipedia article on [monogamy of entanglement,](https://en.wikipedia.org/wiki/Monogamy_of_entanglement) 
but that too would do the job for us.

### Corollary: spin singlet ISC states obey Fermi-Dirac statistics

We consider the second proper singlet state in [(Eq.1)](#Eq.1). 
The argument for the pseudo-singlet state is the same only you imagine rotating 
the second magnetic field by $180^\circ$ every simulataneous measurement, 
so that with this one twist the $|{\scriptsize ++\rangle}$ outcome will become "on paper" $|{\scriptsize +-\rangle}$.

For Fermi-Dirac statistics we require a parity transform flips the sign of the wave-function in real Euclidean position space. For this we need *all* the spatial variables $\lambda_i$ for each geon, not just the spin variables. So we require:
$$
\text{Fermi-Dirac statistics:}\qquad \Pi_{ij} \left\[ \psi(\lambda_i, \lambda_j)\right\] = \psi(\lambda_j, \lambda_i) 
= -\psi(\lambda_i, \lambda_j). 
$$

To prove the corollary then, start with the general two-particle ISC state:
<a name="Eq.2">(Eq.2)</a>
$$
\psi = |\lambda_1, \lambda_2\rangle = c_1|\lambda_1\rangle\otimes |\lambda_2\rangle + 
c_2|\lambda_2\rangle \otimes |\lambda_1\rangle
$$
Now, if the geons are in the spin singlet state of [(Eq.1)](#Eq.1), necessarily,
$$
P(\lambda_1=\lambda_2) \le P(s_1=s_2)
$$
because the spin outcomes $s_k$ are a subset of the full position-momentum-spin space of observables $\lambda_k$. But in the ISC singlet state,
$$
P(s_1=s_2)=0
$$
identically, hence, 
$$
\langle \lambda_1, \lambda_1 | \lambda_1, \lambda_1 \rangle = 0.
$$
But it is a basic result of the inner product on a Hilbert space that if the 
inner product $\langle a| a\rangle=0$ then $|a\rangle \equiv 0$, and therefore,
$$
| \lambda_1, \lambda_1 \rangle = 0.
$$
This is only possible in [(Eq.2)](#Eq.2) if,
$$
 c_1 = -c_2
$$
which by normalization means,
$$
c_1 = \pm \tfrac{1}{\sqrt{2}},\qquad c_2 = \mp \tfrac{1}{\sqrt{2}}.
$$
Inserting these coefficients into [(Eq.2)](#Eq.2) yields:
$$
\psi(\lambda_1, \lambda_2) = - \psi(\lambda_2, \lambda_1)
$$
which is *the* Fermi-Dirac statistic. qed.


#### What about spin $=1/2$?

The above derivation shows obeying Fermi-Dirac statistics is not about 
spin-${\scriptsize 1/2}$ geons. 
It is about isotropically spin-coupled geons, or ER=EPR entangled geons in the 
T4G language.

> For Pauli exclusion (Fermi-Dirac statistics) **_both_** the coupling and the 
rotational invariance are necessary. 

So, bosons can also be EPR wormhole coupled, but if not rotationally invariant 
we will not get the Fermi-Dirac statistics, we would get Bose-Einstein statistics.

For example,
$$
|\psi\rangle = \tfrac{1}{\sqrt{2}}\left(|{\scriptsize + -}\rangle + |{\scriptsize - +}\rangle\right)
$$
is coupled, but not rotationally invariant. So would represent the state w.r.t 
spin measurements of a boson.

Particles of spin-$n$ states can also be treated by the previous deduction of the 
spin-statistics theorem. For example, there is a singlet state for spin$=2$,
$$
\psi = \tfrac{1}{\sqrt{5}}\left( |2,-2\rangle + |1,-1\rangle + |0,0\rangle - |-1,1\rangle - |2,2\rangle\right)
$$
which can be decomposed into two irreducible ISC forms plus a remaining 
$|0,0\rangle$ state that will exhibit Bose-Einstein statistics.

The simplest geons that can be entangled isotropically are the elementary fermions, 
and we will see this in the next chapter when we repeat all this in the language of the 
geometric algebra or spacetime algebra (STA).

The "bosons" do not have this property because they lack the rotational 
symmetry property required for this theorem. But this is hard to see in the 
orthodox QM context. It will be "manifest" in the STA treatment, next chapter.

#### The tensor product 

Just note that $a \otimes b$ is symmetric in the basis vectors, 
unlike the GA wedge product. So it is not the outer product. 

The tensor product has a different meaning, it is a product of entire spaces, 
so is used to describe a *composite* system, not a bivector or $k$-vector.

Composition of vector spaces is a commutative operation, and so 
$\vec{e}_1\otimes \vec{e}_2 = \vec{e}_2\otimes \vec{e}_1$.
That's because, as we just said, those basis vectors "live" in totally 
different vector spaces.

Thus, if we have a composite system of $n$-indistinguishable geons, a 
permutation of the "quantum numbers" $\lambda_i$ does not change the 
wave-function, provided we also permute the coefficients in the same way. 
So if we denote some arbitrary permutation of the label indices by the 
symbol $\varpi_P$, then we can 
define a general linear combination of states, 
by summing over all possible permutations,
$$
\psi\left\[ \lambda_1, \lambda_2,\ldots , \lambda_n \right\] = 
\sum_P \varpi _P c_P \psi(\lambda_1, \lambda_2, \ldots , \lambda_n)
$$
the square bracket on the left here denoting the fully expanded linear 
combination over all permutations $P$.


#### The wedge product 

Closer to the outer product in geometric algebra, we can form a completely 
anti-symmetrized product out of the tensor products, but again this is in 
Hilbert space, not real Euclidean space. 

I will not write out the formal definition using the tensor symbols, 
instead let's show exhibit the case for a triple product:
$$
\begin{array}{l}
a_1 \wedge a_2 \wedge a_3 \& = \frac{1}{\sqrt{3!}} \left( a_1 \otimes a_2 \otimes a_3 + 
a_2 \otimes a_3 \otimes a_1 + 
a_3 \otimes a_1 \otimes a_2 \right. \\\\
\& \qquad \left. - a_1 \otimes a_3 \otimes a_2 - a_3 \otimes a_2 \otimes a_1 - 
a_2 \otimes a_1 \otimes a_3 \right).
\end{array}
$$
I think that should be clear enough. Put a $+$ on the even permutation of indices, 
and a $-$ on the odds. Then divide by the square root of the number of 
permutations to get a normalized state.

Actually, this composite system *could* be one living in Euclidean space or 
spacetime, and we will need to consider this so very shortly, 
but for our present purposes we're focusing on the abstract 
spin sub-space which is defined for us by our choice of measurement system.

So, ok, it's **_not_** the same as the geometric algebra outer product, 
but let's not let that worry our heads for now. 
The Hilbert space wedge is a composition of systems operation, whereas the 
geometric algebra outer product is a formation of an $n$-volume in *real* space. 
So quite distinct meanings!
If you keep in mind what space you are acting within then the context gives you the 
clarity to make the distinction.


## The Pauli Exclusion Principle

To clear the air, the QFT version of Pauli Exclusion is stated in terms of 
commutation relations for the creation and annihilation operators. But this is 
a tad baroque and does us no particular good in non-relativistic QM. 
We desire a more general statement of Pauli's spin-statistics theorem. 
The appropriate statement is <a name="Thm-2">(Theorem-2)</a>:

> **Theorem:** (Pauli exclusion or Spin-Statistics.) A sufficient condition for a system of $n$ indistinguishable geons to obey Fermi-Dirac statistics is that the system 
contains a pair of ISC coupled particles, i.e., a pair of geons with an 
EPR wormhole bridge connection.

As previously discussed on the T4GU website, we postulate that an EPR bridge is 
a minimal ER bridge wormhole connection, so one with horizons that encode only a 
single qubit or similar (an "elementary particle".)

We can use an inductive argument to show Fermi-Dirac statistics applies whenever 
there is a pair of ISC coupled geons.  To do so we use the Corollary above 
for pairs of ISC states. 
We use the permutation notation to write out a general $n$ geon state.

Remember, an index on $\psi_k$ is the $k^\text{th}$ geon.  Whereas an index on 
$\lambda_i$ is a spatial and spin coordinate, not a geon.

For the case $n=3$, for maximal isotropic coupling we only have recourse to the pairs, but we can still show we will get Fermi-Dirac statistics. 
On the second line below, we insert the singlet state for $\psi_{23}$ and for $\psi_{31}$ and for $\psi_{12}$, and will see we only need these in pairs. 
We have,
$$
\begin{array}{ll}
\psi\left\[ \lambda_1, \lambda_2, \lambda_3\right\] 
\&= \tfrac{1}{\sqrt{3}} \left( \psi_1(\lambda_3)\otimes\psi_{23}\[\lambda_1, \lambda_2\] + \psi_2(\lambda_3)\otimes\psi_{31}\[\lambda_1, \lambda_2\] +
\psi_3(\lambda_3)\otimes\psi_{12}\[\lambda_1, \lambda_2\] \right) \\\\
\&= \tfrac{1}{\sqrt{3!}} \biggl\\{ \psi_1(\lambda_3)\otimes \[ \psi_2(\lambda_1)\otimes 
    \lambda_3(\lambda_2) - \lambda_3(\lambda_1)\otimes \psi_2(\lambda_2)\] \biggr. \\\\
\& \qquad \biggl. + \psi_2(\lambda_3)\otimes\[\psi_3(\lambda_1)\otimes\psi_1(\lambda_2) - 
    \psi_1(\lambda_1)\otimes\psi_3(\lambda_2)\] \biggr. \\\\
\& \qquad \biggl. + \psi_3(\lambda_3)\otimes \[ \psi_1(\lambda_1)\otimes\psi_2(\lambda_2) - 
    \psi_2(\lambda_1)\otimes\psi_1(\lambda_2) \]\biggr\\} \\\\
\&= \sqrt{3!}\\, \psi_1(\lambda_1) \wedge \psi_2(\lambda_2) \wedge \psi_3(\lambda_3).
\end{array}
$$

So this is the general three-geons spin coupled state, in full. 
It is clearly antisymmetric upon exchange of the *indistinguishable* 
geon's, so satisfies Fermi-Dirac statistics.  qed. 


## What about Bose-Einstein?

We already mentioned the singlet Bose-Einstein state above, which is coupled, but 
not rotationally invariant. 

Fermi-Dirac and Bose-Einstein statistics are not the only statistics physical 
systems of particles can obey, we've got Boltzmann statistics in classical regimes, 
and Maxwell-Boltzmann and whatnot. But I'm not prepared at this stage to delve 
into much of that. If time permits, later I might go over O'Hara's writing on how 
the ISC view on spin-statistics relates to phenomena involving baryons, 
but it is not central to the development of T4G theory, because once T4G theory 
motivates quantum mechanics formalisms we are basically done with T4G --- 
at least until there are some tests that can probe the Planck scale topology. 

But if you want a justification in terms of Clebsch-Gordan coefficients for O'Hara's 
view of the Pauli exclusion principle as a result of rotationally invariant 
spin-coupling, then [Section 6](https://arxiv.org/pdf/quant-ph/0310016) of his 
[paper here](https://arxiv.org/pdf/quant-ph/0310016) is where you can find it.


## Caveats

I had to gloss over why the fully entangled state of $n$ geons has to have 
several EPR wormhole bridges. Since our (O'Hara's) result was that only an 
$n=2$ geon system can be so *completely* connected, it did not matter too much! 
You could imagine any crazy wormhole topology that results in the wormhole 
horizons encoding the deterministic spin information.
It's all academic, since even if you could imagine such a knot, 
it probably cannot exist in nature, or at least not stably, since orthodox QM is 
not sensitive to such effects. That was the result of [Theorem 1.](#theorem-1)

It is much simpler to visualize the more natural entanglement implied by O'Hara's 
version of spin-statistics, which is that we always only have pair-wise 
EPR bridges connecting systems.

One might debate about whether the rotational invariance or the coupling is the 
more important property of the entangled system. For Fermi-Dirac statistics it 
is clearly both that are required.  So when O'Hara says that, "... it would seem 
that Fermi-Dirac statistics follows as a consequence of this coupling while 
Bose-Einstein follows by breaking it. ..." I am not so sure I fully agree. 
Could not one equally say that the rotational invariance can be broken but the 
coupling remain? 

In any case, from a T4G perspective this all makes sense to me, since an EPR wormhole 
bridge connection implies coupling of the spins in a rotationally invariant manner. 
Although, having just written that, I think this will all make more sense when 
we review all this in geometric algebra.

I am not yet sure about this, but I think, or suspect this is also all we will 
need to account for multi-partite entanglement as seen in so-called GHZ states.
In GHZ states any two geons are entangled, but all $n$ geons are not fully entangled, 
but are partially entangled.

From a T4G perspective, this would be seen as a special kind of state preparation 
where coupling of the entire system exists, but only via pair-wise ER bridges. 
But this is pretty much like the general $n$-geon coupled state we used in 
proving the Pauli exclusion principle for the three-geon state above.
Although I did not rigorously go through the mathematical induction, 
it should be pretty clear this generalized to the $n$-geon system. 

If this is *not* related to GHZ states then I could be wrong about how T4G would 
account for GHZ states.
If you have any thoughts about this please [consider donating via Achrononmaster @ Ko-fi](https://ko-fi.com/achrononmaster/)) and let me know.

[Next chapter (Pauli Exclusion in GA)](../008_pauli_in_ga)  
[Previous chapter (Spin Measurement, part-1)](../006_spin_measurement_part1)  
[Back to Theory TOC](../)
