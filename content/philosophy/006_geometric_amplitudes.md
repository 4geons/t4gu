---
title: "Geometric Amplitudes"
description: ""
date: 2018-02-27
lastmod: 2018-02-27
cover: ""
coverAlt: ""
toc: true
tags: []
katex: true
draft: false
---

Going to be a but "dumb" or deliberately naïve here for pedagogical purposes. 
I want readers to figure things out for themselves. I'm just giving some prompts, 
and I am sure some of them will be unwittingly misleading. But whacannido?

## Complex or Geometic Amplitudes?

In a Hilbert (vector) space formulation of a Measurement Theory the probability amplitudes have to be complex-valued, because there is no other option.

[Scott Aaronsen,](https://scottaaronson.blog/?p=4021) among others, [teaches](https://scottaaronson.blog/?p=4021) that if the algebra is extended over quaternions or any higher algebra, then faster-than-light signalling is possible. 
While if a real vector algebra is employed the system is under-determined.

That squeezes us in terms of Hilbert space options, we *must* use complex amplitudes for QM.

(One should note that a real algebra can always be used for QM provided we go up to higher dimensions, this allows us to avoid complex numbers. 
The only reason textbooks and research papers do not use matrices instead of complex numbers is for convenience. 
The complex (i.e., *geometric*) *structure* is what is important in QM, not the "complex numbers".)

In T4G theory there is no such constraint because we do not employ a vector space, instead we use the full spacetime Clifford or "geometric" algebra. 
This is a graded multivector algebra, and can be shown to map isomorphically onto the Hilbert space basis states, only very elegantly and cleanly.

In the [Geometric Algebra](http://geometry.mrao.cam.ac.uk/home/introduction-to-ga/) (GA for short) things are much clearer than in the corresponding matrix algebra. 
In the mapping from the Hilbert space category onto the GA or [STA](vhttps://geocalc.clas.asu.edu/pdf/SpacetimePhysics.pdf) ([spacetime algebra](https://geocalc.clas.asu.edu/pdf/SpacetimePhysics.pdf)) the matrix operators get replaced by multivectors (the linear operators for any GA). 
(To learn more about GA I recommend the book [Geometric Algebra for Physicsts](https://www.cambridge.org/core/books/geometric-algebra-for-physicists/FB8D3ACB76AB3AB10BA7F27505925091) by Doran and Lasenby. The [Cambridge GA research group](http://geometry.mrao.cam.ac.uk/) also has a lot of free articles, and there's also [David Hestenes pages](http://geocalc.clas.asu.edu/).)

However, in any GA formulation of QM, the states are also multivectors, unit rotors to be precise. Or at least the mathematical representations of the states are, and so in the GA formulation of QM all objects, states & observables, are all multivectors. 
That's the elegance.

What about amplitudes?

Well, in orthodox QM the amplitudes are weights, and so in GA they'll also in general be multivectors, *in the graded algebra* and that means they are geometric quantities. 
They have geometric interpretations.
In orthodox QM this is entirely hidden and obscured by the squeezing of the measurement theory into a Hilbert space.

Hilbert spaces can be nice compact ways to express quantum mechanics, but they do so at the expense of clarity. 
We lose geometric insight in the Hilbert space formalism, because the matrices are basis-dependent representations, and it is very hard for the mind to extract geometric meaning out of a matrix.
The same for *every appearance* of the unit imaginary in quantum mechanics on Hilbert spaces.

We will come across several geometric roots of $-1$ in spacetime algebra when we do some theory, but next I am going to focus on just the two most primitive types, 
the pseudoscalar and the unit bivectors.

The unit imaginary is always a geometric quantity, but most primitively it can be either;

* a unit pseudoscalar --- there is one of these,
* a bivector --- there are 6 of these in the STA,

but which one of these unit imaginaries is the "$i$" in Hilbert space QM? 
The answer is all of them, and which one you are using is totally obscured! 
In the Schrödinger equation the unit imaginary is best regarded as derived from the bivector structure of an elementary particle, which in turn derives from rotational symmetries. 
But you would not know this from any Hilbert space textbook treatment.

Specifically, the unit imaginary in orthodox QM is played by a fixed spacetime bivector (a generator for a Lorentz boost) and it singles out a preferred axis. 
The reason it is nevertheless Lorentz covariant is because the Dirac or Pauli wave-function is interpreted as an instruction to rotate our fixed STA frame onto the spin frame of a particle. 
A 4-geon with rotational symmetry, or a spinning 4-geon, thus has an intrinsic orientation, and that's what the STA rotor component of $\psi$ is orienting our laboratory frame onto.


### Interlude: roots of $-1$ are geometric

Even in orthodox QM we get a hint that the unit imaginary is really geometric, not algebraic (whatever that distinction means!) 
For example, one can do all of QM with real numbers. 
For a 2-state system this just means we have to go up a dimension to $3\times 3$ matrices, since there we get a square root of a unitary matrix like,

$$ U = \left(\begin{array}{cc} 1 & 0 \\\\ 0 & -1 \end{array}\right) \\
$$
we do this by bumping up to 3D, the square root of $U$ is then,

$$  U^{1/2} = \left(\begin{array}{ccc} 1 & 0 & 0 \\\\ 0 & 0 & 1 \\\\ 0 & -1 & 0 \end{array}\right)  \quad \text{with} \quad U = \left(\begin{array}{ccc} 1 & 0 & 0 \\\\ 0 & -1 & 0 \\\\ 0 & 0 & -1 \end{array}\right)
$$
This is the sense in which we can very primitively see roots of $-1$ are "geometric". 
You can argue that merely "going up a dimension" is not necessarily a *geometric* requirement or condition, but then I'd have to just beg to differ.

This is one of the obscuring things about orthodox Hilbert space QM. 
It hides the geometry. 
In the geometric algebra (STA) formulation *all* of the roots of $-1$ are manifest, all the appearances of $\sqrt{-1}$ have a *geometric* content. 
And all without artificially jacking up the algebra dimensions. 
This is because the 16-dimensional spacetime algebra (STA) uses graded multivectors. 
In this geometric algebra the most common root of $-1$ is the grade-4 spacetime pseudoscalar, denoted $i=e_0e_1e_2e_3$.

If you've never learned geometric algebra before, since this online course is not going to teach you GA, let me just whet your appetite for devouring more GA (there are plenty of [free online learning materials](http://geometry.mrao.cam.ac.uk/home/introduction-to-ga/)) with the very brief intro, which is best done in spacetime.

In the spacetime algebra, with metric signature $(-+++)$ we have four basis vectors in any local frame:
$$ \\{e_0, e_1, e_2, e_3\\}\quad\text{with}\quad e_0^2=-1,\quad\text{and}\quad e_1^2=e_2^2=e_3^2=1. $$
and the spacetime algebra (STA) is completely specified by defining geometric products, which are a sum of a symmetric and anti-symmetric parts (inner and outer product respectively):
$$ e_i e_j = e_i\cdot e_j + e_i \wedge e_j$$
Although this seems to do a very nasty thing of "mixing grades" it is non-nasty because of the (anti)symmetry. 
The mixed grade geometric product is never ambiguous, it can always be decomposed into symmetric and anti-symmetric parts, for vectors. 
For higher grade products the decomposition is just as neat, but is into terms of each grade from $0$ to $D$.

In the universal geometric algebra we can keep wedging vectors (taking outer products) to get higher dimension blades, the basis bivectors like $e_1\wedge e_2$ are basis 2-blades, while the blade $e_1\wedge e_2 \wedge e_3$ is a spacelike basis 3-blade (sometimes called a trivector, an oriented 3-dimensional volume).

We can take outer products though only up to the spacetime dimension, $D=4$. 
Once we hit a 4-blade then any further outer products will project down to lower dimensions. 
This means there is only one unique unit 4-blade, called the spacetime pseudoscalar.
$$ i = e_0\wedge e_1\wedge e_2\wedge e_3$$
As an exercise check for yourself that $i^2=-1$ for this STA pseudoscalar.

To finish defining the algebra we need to know the geometric products between all the basis vectors. 
The algebra is:
$$ e_i\cdot e_j = \delta_{ij}, \quad\text{for}\quad i,j\in \{1,2,3},\quad \text{and} \quad e_0^2=-1$$
and for the wedge products we get the bivectors,
$$\quad e_\mu\wedge e_\nu = B_{\mu\nu}\quad\text{for}\quad \mu\ne\nu,\quad\text{with}\quad B_{\mu\mu} = 0.$$
From the definition of the geometric product into symmetric and antisymmetric parts, we also have for the wedge products:
$$ e_i\wedge e_j = -e_j \wedge e_i$$
in other words, the outer product is antisymmetric. 
This means we've defined the geometric product $ab$ in terms of an antisymmetric part $a\wedge b$ and a symmetric part $a\cdot b$. 
The vectors $a$ and $b$ can be expanded as usual in basis vectors in any given frame: $a=a^i e_i$.

Pretty much the rest of the STA geometric algebra can be "completed for homework".  But it'll take you a lifetime, it's a rich structure! 
(You can do all of general relativity as a gauge theory using STA objects called fiducial frames --- which are local copies of $\{e_0,e_1,e_2,e_3\}$).

That was just to get you started. 
But I wanted to finish whetting your appetite with the spacetime pseudoscalar,
$$ i = e_0e_1e_2e_3. $$
By the above algebra this is a unit grade-4 blade, or 4-blade. 
It is, by the orthogonality relations, an outer product, since, 
$$ e_0e_1e_2e_3 = e_0\wedge e_1\wedge e_2\wedge e_3 $$
You can now work out for yourself in a couple of lines that,
$$  i^2 = -1$$
But I have one more treat. 
First, try to discover this for yourself. 
Ask yourself, what do you get if you,

1. square any one of the unit bivectors?
2. work out the traility or triadic relations for the bivectors?

I will not spoil the fun of deriving the results, but do not read on until you have had a go at working it out for yourself. 

**Here's the answer:**  the answer is that all the bivectors square to $-1$. 
And the triadic relations show the bivectors form a *right*-handed coordinate basis.

The second result is very cool, because it "corrects" a fundamental "stupidity" (not an error) in Hamilton's Quaternions. 

The quaternions form a *lef*t-handed system. 
Although this is a bit of nerdy pedantry, it "kind of matters."
It is part of the reason why no one (until David Hestenes came along) could figure out how to extend the quaternion algebra to get a simple algebra for spacetime rotations.
The next higher division algebra --- of the Octonions --- doesn't work, because we lose associativity 
(rotations are not commutative in 3D or 4D but they are still associative.)
The spacetime algebra (STA) is instead the proper extension of the complex numbers from 2D planar rotations up to 4D, and the STA includes the rotations in the timelike planes $e_0e_k$ which turn out to be exactly the Lorentz boosts.

Very, *very* cool, huh?

By the way, if we stayed in the 3D 8-dimensional graded algebra of Euclidean space, we'd retrieve the Pauli algebra. 
Which immediately tells you all of non-relativistic quantum mechanics comes from a real 8-dimensional 3-space geometric algebra. No complex numbers appear at all.
But, "Hey?" you say, "isn't the Pauli algebra the basis for spin in quantum mechanics?"

Why yes it is sir or madam, why yes it is.

So every bivector is a sub-algebra of the full STA, the bivector algebras are really rotation generators, and so every rotation plane is a complex sub-algebra within the full 16-dimensional spacetime algebra. 
How cool is that?
We now have a much better handle on where all the unit imaginaries come from. 
They come from spacetime geometry.

**Aside:** I guess for the amateurs I should write down the triadic relations for the bivectors in $\mathbb{R}^3$. (This does *not* refer to the group theoretic triality in higher dimensional algebra, it's just a plain old basis vector structure, but bumped up in grade to bivectors.) 
The set of bivectors is properly written,
$$ B_3 = e_1\wedge e_2 \equiv e_1e_2,\quad B_2=e_3e_1,\quad B_1=e_2e_3.$$
Now you should be able to spot Hamilton's "stupidity" (or call it a mistake?). 
Hamilton "blindly" tried to extend $\mathbb{C}$ algebraically, ignoring the geometry, and so he implicitly defined,
$$
`B_2' = e_1e_3,\quad\text{instead of preserving right-handedness,}\quad B_2=e_3e_1
$$
this made the quaternions into a left-handed system. 
The algebraic correspondence is to preserve "no sign changes upon cyclic permutations of indices."
If you learn to do 3-rotations first with quaternions I bet you never even knew. 

You can now also tell that the $B_k$ are spin planes, since they are grade-2 objects, 2-blades. 
They are GA duals to the axial vectors for the rotations. 
We can now dispense with axial vectors and use the bivectors to perform rotations, and it is all much cleaner this way.

$$ 
B_1 = I e_1,\quad\text{or generally,}\quad B_k = Ie_k,\quad\text{where}\quad I = e_1e_2e_3
$$
here $I$ is the 3-space pseudoscalar, also $I^2=-1$, but it is a 3-vector, not the 4-spacetime pseudoscalar which I prefer to denote $i$. 
(Life would've been much simpler had Cardano or Gauss or whoever chosen a different letter for the unit imaginary. 
An anticlockwise $90^\circ$ rotated "r" symbol would've been cool.)

All very super cool & awesome then.

In particular the "small miracle" occurs in GA, which is that in GA all rotations are performed on all objects of the algebra in the same way: 
by double-sided multiplication by unit rotors. 
(Rotors are just sums of a scalar plus bivector.)

So to rotate a vector $a$ by say $90^\circ$ anticlockwise in the plane $B=Ie_3$ (i.e., the $xy$ plane), we use the transform,
$$ 
a^\prime = R a \tilde{R} 
$$
where $R$ is the rotor, $R=e^{-B\theta/2}$, and $\tilde{R}$ is the *reverse* of that rotor $e^{B\theta/2}$, and we then put $\theta=\pi$. 
The rotor argument is thus the half-angle of the rotation times the unit bivector defining the plane.

With this, you can check for yourself that another rotor, say $R_2$ will transform under this rotation like a fermion --- yes, that's right, you have to rotate a *rotor* by $4\pi$ radians to get back the original rotor. 
This is just classical geometry however, nothing quantum mechanical has yet been introduced.

That's it for today!

You've learned how spacetime geometry has several built-in complex structures, all in a real number system. 
All we had to do was recognize that the proper algebra for physics is a higher dimensional algebra, not the complex numbers, not merely a simple single grade vector space over $\mathbb{R}$.

This also means complex structure has been present in Classical Mechanics all along, it is not particular to quantum mechanics.
Which begs the question, *why is the complex structure more "obvious" in QM and not so much in CM?*

### But why, why, why? Why a complex structure in QM?

All right, so the above notes are just mathematical preliminaries, we have not got to the good stuff yet. 
God (or the putative gods of physics (A. Einsinos and I. Neutonos)), doesn't care what mathematics we use to formulate quantum mechanics. 

All we've got so far is that the weights in QM are geometric quantities.

The serious question is why are the weights geometric?

Another way of framing this is "*why is geometric algebra so natural in quantum mechanics?*"  Could it be that quantum mechanics all boils down to some rich gnarly geometry?  (Why, yes it does! --- according to T4G theory.)


### OK, but why complex amplitudes in QM?

The section prior to previous explained that the need to deal with the basic symmetries of spacetime implies bivector algebra is paramount in quantum mechanics. 
It was present already in classical mechanics, but people have since Gauss used matrix algebra for rotations, or quaternions, which obscures the proper STA. 

One reason the "complex" bivector structure becomes clearer in QM is because quantum mechanics is a Theory of Measurement, whereas classical mechanics is a theory of phase space propagation. 
These are very different paradigms.

When you have Equations of Motion from Newton or Laplace or Euler-Lagrange, you can just get down to solving them, ignoring all measurement problems. 
That's because in CM you have $\hbar\rightarrow 0$ and so infinitely precise measurements are possible, so there is no "measurement problem."

Incidentally, at this point it is worth noting that the non-commuting observables 
so often rightfully emphasized in textbooks on QM come from the symmetry groups 
of the generators of spacetime invariants. 
These are purely classical concepts. 
The generators are non-commuting even in classical mechanics. 
So "incompatible observables" are a thing in CM as well as QM. 
The reason they have no importance in CM is because CM is the singular limit where 
$\hbar\rightarrow 0$, and that means even when observables do not commute, 
we do not care, 
because any perturbation of one quantity in a measurement altering an 
incompatible quantity can be shrunk down to as small as we like, 
and we only need it to be smaller than our instrument resolution. 
In CM this can always be imagined, or idealized, as being done, and indeed it 
has to be so idealized, otherwise we do not have CM, we'd have the 
semi-classical approximation to QM. 
However, read the [next post](../6_black_holes_and_t4g) for a twist in this story.

The up-shot of all this is that you then only care about symmetries in CM for 
the purposes of simplifying the solutions to the PDE's.

This, in my opinion, is why the bivectors make no significant appearances in CM 
--- it's because the symmetries are not put first, they do not go up-front, 
they are glued on to physics only when we want to simplify the EOM. 
At least this is what I think it boils down to, we cannot really say, 
since classical mechanics got enshrined in the olde textbooks before anyone 
knew about geometric algebra.
So I am inventing a kind of pseudo-history of classical mechanics here. 
But it makes some sense to me.

It is of course *possible* to do classical mechanics with geometric algebra, 
a couple of books have done most of the good stuff in CM using GA or STA. 
[New Foundations for Classical Mechanics](https://link.springer.com/book/10.1007/978-94-009-4802-0) for instance by Hestenes, 
and [Geometric Algebra for Physicists,](https://www.cambridge.org/core/books/geometric-algebra-for-physicists/FB8D3ACB76AB3AB10BA7F27505925091) 
by Lasenby and Doran.

To elaborate a little bit: if you go through the textbook treatment of the 
elementary particles in any advanced Quantum Mechanics course, you will know, 
or realize, the Poincaré symmetries are pretty darn crucial. 
The tradition has been to regard all "fundamental" (whatever that means) 
elementary "particles" (whatever that means) as *irreducible representations* 
of the symmetry groups in physics. The inviolable symmetries, 
those that cannot be disobeyed.

No one ever explains *why* this is the case, you can after-the-fact just say, 
"Well, it works, doesn't it?" 
And indeed it does. 
It's the whole Standard Model.

T4G theory promises an explanation for the *why*. 
And I think the best approach in T4G theory to cash this promise out is to use 
the STA geometric algebra to redo all the Standard Model symmetries. 
And what's more, I think this is possible, all the symmetries should exist 
within the STA. 
(I write "probably" but in fact I know this to be true, I just do not want to 
commit to proving it in these notes, it is tedious work, but the past work of 
Coleman, Mandula and Witten kind of already show the raw spacetime symmetries 
alone are insufficient for the Standard Model.)

If the basis multivectors of the STA are not going to be sufficient, there is 
not enough symmetry in them for the Standard Model, all that means is that the 
elementary "particles" of the Standard Model are likely not point-like, 
and so they will require non-trivial elements of the full 16-dimensional STA 
to describe them, to describe their invariants. 
It's the invariant quantities that count in any Theory of Measurement you see, 
and that is what quantum mechanics *is*, in essence. 
Since what is not held invariant will in general deform.

This is the essence of why we see the symmetries close and up-front in QM and 
not so much in CM. 
Well, hell, at least philosophically ok, I'm still working on the raw mathematics. 
But if you follow Wigner's classification scheme it does seem to all drop out nicely.


### A possible, almost trivial answer

The blunt answer for why quantum mechanics amplitudes need to be geometric is 
of course that conventional Kolmogorov probabilities give you 
Statistical Mechanics (SM) not Quantum Mechanics. 
And if you just basically "do statistical mechanics" but with geometric probabilities, which thus need to be normed to get real probabilities (which is ultimately what a time oriented observer needs, in order to do *any* physics) then you are essentially doing quantum mechanics. 

In a bunch of breezy papers [Lisi](kn_Lisi2006universal), 
[Baez, Pollard](kn_Baez2015quantropy), [Munkhammar](https://arxiv.org/pdf/1507.07793) 
and others showed how QM is essentially SM but with geometric amplitudes. 
The mystery then is why? 
Why do we get QM pretty much just by replacing real probabilities with 
geometric amplitudes? 
(Or in Munkhammer's version, we get QM from an "entropy = action" 
equivalence conjecture.)
Those cited papers do not say *why*.

Of course, you could just "be an instrumentalist" and say you do this in order 
to get interference! Why else? Duh!

That's wholly unsatisfactory for the philosopher though! It should also be 
unsatisfying to any decent theorist, because one of the main ways of 
***advancing* theory** is to have something ontological in mind behind the 
instrumentalism. 
You want to "back" your theory "currency" with something real. 
Even if what *you* think is *real* is only in your head. 
(At least I've always thought this the most honest way to do science, 
[others](https://backreaction.blogspot.com/) may not.)

## Why geometric amplitudes in T4G

OK, but here's the good stuff:  T4G theory has a possible answer to why the 
amplitudes are geometric. 
The answer is, in a nutshell, it's all about the time-loops, the closed 
timelike curves, the non-trivial spacetime topology. 
This is really what the previous three or four posts 
[[1](../001_basic_t4g), [2](../003_problem_of_interference), [3](../004_sum_over_histories), [4](../005_t4g_account_of_superposition)] have been about. 

There is an intrinsic type of interference in nature when things can "time travel". 
But QM does not admit superluminal signalling, which generic time-travel would. 
So the time jumps in nature have to be fairly special, constrained, and limited 
to the morally "quantum realm." 
The aim of T4G theory should be to turn this moral statement into hard 
mathematical physics.

If there are CTCs then 4-geons undergo what amounts to time-loops 
(not literally closed curve trajectories, just "jumps" backwards (or forwards) in time). 
This erases possible futures, possible histories, and so probabilities must 
get *updated*.

These are also the explanations (in T4G theory) for why the off-shell 
trajectories need to be included in the Feynman sums.

That's the basic explanation. 
You cannot make do with fixed Bayesian style probabilities in a theory that 
permits backwards causation or time-loops.
You need geometric probabilities, and that is all the amplitudes are, 
they are just generalized probabilities. 
You get proper probabilities by summing and then norming them.

Why do we sum them? 
Short answer is, "What else is there you'd do?" which is a bit facetious, 
but it boils down to a choice of framework. You do not have to "sum them" if 
you choose a Bohmian Pilot Wave treatment or a Many Worlds theory. 
But *both* those theories can be done by using the same accounting framework as the SOH. 
In other words, *how can you "account" for the Hidden Variables in Bohmian mechanics?* 
--- answer is to use SOH.
And *how can you "account" for branching in Many Worlds mechanics?* --- answer 
is to do a SOH.

Well then, that's yet another PhD or smart Masters thesis topic. 
Put all this into a more rigorous framework.
If you search the literature there is already a lot of work on generalized 
probabilities done for you, so "all" you need to do is redo all that using T4G ideas.
I'd suggest using the spacetime (Clifford-multivector) algebra for this, 
not matrix (Hilbert-vector) algebra --- just at least so that you always know 
what unit imaginary you are using.


## Summary

Hope I've given enough crumbs for some bright research students to run with. My own 
view has been edging over time towards thinking we can prove that no other options 
are available in T4G or QM, we are forced to use the bivector algebra structures 
for the amplitudes because they ultimately arise from the Lie algebra symmetries.

One thing that still bugs me a little though is the Lagrangian for quantum field 
theory. What is the geometric meaning of exponentiating the action that yields the 
interference? I've tried to explain why this is a good physical principle above, 
but I also think there is a proof somewhere that there is no other Lagrangian 
formulation of T4G. If so, T4G yields QFT.


<table style="border-collapse: collapse; border=0;">
    <colgroup>
       <col span="1" style="width: 33%;">
       <col span="1" style="width: 25%;">
       <col span="1" style="width: 35%;">
    </colgroup>
<tr style="border: 1px solid color:#0f0f0f;">
<td style="border: 1px solid color:#0f0f0f;"><a href="../005_t4g_account_of_superposition">Previous chapter</a></td>
<td style="border: 1px solid color:#0f0f0f; text-align:center;"><a href="../">Back to Philosophy</a></td>
<td style="border: 1px solid color:#0f0f0f; text-align:right;"><a href="../007_amplitudes_hadtobe_complex">Next chapter</a></td>
</tr>
<tr style="border: 1px solid color:#0f0f0f;">
<td style="border: 1px solid color:#0f0f0f;"><a href="../005_t4g_account_of_superposition">Account of Superposition</a></td>
<td style="border: 1px solid color:#0f0f0f; text-align:center;"><a href="../">TOC</a></td>
<td style="border: 1px solid color:#0f0f0f; text-align:right;"><a href="../007_amplitudes_hadtobe_complex">Amplitudes are geometric</a></td>
</tr>
</table>
