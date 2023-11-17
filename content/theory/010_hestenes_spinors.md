---
title: "Dirac-Hestenes-Greider Spinors"
description: ""
date: 2016-12-04
lastmod: 2016-12-04
cover: ""
coverAlt: ""
toc: true
tags: []
katex: true
---

This is going to be a loooong chapter, buckle up, grab a drink, permit a few days of eyeball time (unless you are some sort of savant).

The promise is that after some exciting diversions in NRQM, that were foundational 
for T4G theory, we now want to see if Dirac spinors 
(four component complex column vectors) 
exist in timespace algebra with the same algebra as the Dirac matrices. 
The *Dirac matrices* ($\hat{\gamma}_\mu$) being the basis for the 
linear operators which act on the 
*Dirac spinors* ($|\phi\rangle$). 
The Dirac spinors being the solutions to Dirac's Equation in relativistic 
single-particle quantum mechanics.

Along the way we will find plenty of insights into the nature of spinors, 
including more realist interpretations, that were hardly possible 
(hard to discern) before Hestenes came up with the timespace algebra (STA) approach.


## Spinor Fields and Geons

Up front I want to emphasis T4G theory views the topological 4-geons as fundamental 
(not that we can prove this is the true ontology, but just that is a working 
assumption if one is doing T4G theory). However, we make extensive use of the study 
of spinor fields. Why?

It is because we regard the spinor fields as *not* "the particles" but as 
instructions that we need to model experiments, in particular the spinors are 
transformation of the other operators. In the STA (or any Clifford algebra you care 
to use as a geometric algebra for studying physics) the linear operators do not 
occupy a separate space, they can be constructed from the elements of the Clifford 
algebra itself, as previous chapters have shown. This, to our minds, is what makes it 
intellectually a little bit more comprehensible to think of the fields $\psi$ as 
instructions.

The instructions of course can be applied anywhere in spacetime, *which is why they 
are fields!*  This, conceptually, corresponds to the fact we can (with enough effort) 
perform a measurement anywhere in spacetime (in principle).

You do not have to like this interpretation of the spinors. I am not asking you to 
like it, but you will need to accept it to contribute to T4G theory (you might 
contribute by debunking the whole T4G program, please do try if you like that 
approach!).

Just like in the Pauli theory we ended up realizing the spinors were 
"instructions to dilate and rotate some object" and the "objects" 
so acted upon were our *abstract* measurement frames and operators, 
so too we will have exactly the same interpretation for the Dirac spinors.

That is to say, it's the spinors $|\phi\rangle$ that perform the process of a 
Lorentz transform boost (or rotation), and the objects they act upon 
(the operators in QM) were the *physical stuff*, more or less, crudely speaking.
Although by "physical stuff" in this context we really mean measurement instruments 
and that sort of thing, which includes the 4-geons because they are what get 
entangled with the measurement instruments.

The 4-geons though *themselves* almost fade into the background in this perspective, 
since we are describing them statistically in QM.

> This answers Sir Michael Atiya's ancient riddle of quantum lore, 
"*What the hell are spinors, yo?*" 

((There's a very geeky joke in there for those galaxy brained readers who 
need a laugh.))

Although this *seems* like merely a mathematical extension of Pauli theory, 
it will turn out much later on in our T4GU explorations, 
that it's not such a trivial thing to explore Dirac theory, 
even if you're not a relativist. 
That's because grokking how the Dirac matrices are pure **_classical_** 
spacetime geometry, sets you up nicely for brain re-wiring that can accept the 
Gell-Mann "gamma matrices" are also elements of classical geometry, 
once written in terms of spacetime algebra. 

"Where does that go...?" you ask, "... chromodynamics?"

Why yes it does!

But we're not even close to that yet.


## Prerequisites

You should go through the [geometric algebra](../004_geometric_algebra) and [spacetime algebra (STA)](../005_spacetime_algebra) basics.

In order to better understand and cement the lessons from the previous few chapters on 
Pauli Exclusion and entanglement, I offer this chapter and the next as 
auxiliary pedagogy for those unfamiliar with the geometric algebra (GA) 
approach to spin in quantum theory. 
I will try to re-emphasise a few points as we go (for learning, ok) 
and one of them is the idea that in the spacetime algebra (STA) we can usually 
think of 4-geon spin as a real spacetime property, so *not* as some internal space 
that just "happens" to have the same algebra as angular momentum.
 
Closely related to this is the idea spin in T4G is not discrete. 

Closely related to *that* is the idea that the "quantum weirdness" of spin involves 
the conservative thinking weirdness of spacetime topology. 
In other words, we are seeking a sort of mini grand synthesis of quantum mechanics 
with special relativity that avoids the need to introduce fictional field variables 
and one that has a realistic interpretation.

The final main thing I want to often repeat for emphasis is the understanding 
that none of this is a claim for a fundamental theory of physics. 
T4G is just offering a realistic way to interpret quantum mechanics. 
Hopefully in the future experiments will be possible to test T4G theory, 
but today the Planck scale structure (wormhole topology) that T4G postulates is 
simply not accessible to our measurement instruments, except highly indirectly. 

Thus, all the theory I write, borrowing the STA concepts and the realism of the 
Cambridge GA groups and of David Hestenes, is all provisional stuff. 

Hestenes has published numerous reviews of his on work, one of the nicer shorter 
accounts is the paper on 
[Real Dirac Theory](http://geocalc.clas.asu.edu/pdf-preAdobe8/REAL_DIRAC.pdf) 
and the more recent review is the new edition of the book 
[Spacetime Algebra](https://link.springer.com/content/pdf/10.1007/978-3-319-18413-5.pdf) 
(which should really be called Timespace algebra) 
for which there is a free tier version in the paper 
[Spacetime physics with geometric algebra.](http://reprints.gravitywaves.com/AJP/Hestenes-2002_SpacetimePhysicsWithGeometricAlgebra.pdf)

Lastly for this intro, the T4G paradigm adds even more realism to the GA/Hestenes 
approaches, since in T4G we think we know where entanglement and single particle 
interference, and hence all "weird" quantum effects, come from (ER=EPR).
 
Some people might criticize all this as being a massive hedge. 
But that's a bit unfair. 
I'm just being honest in thinking;
(a) I think T4G has something true to say about physics, 
and (b) I do not think I fully understand T4G theory implications. 
I'm not really hedging on (a).

 
### Warnings on the metric signature

I, by far, prefer the GR convention signature, $(- + +\\, +)$ (the timespace 
metric??). I could of course use a metric $(+ + + -)$ and call this the 
spacetime algebra, and that is what I wil l do.

But Hestenes got in first and used $(+ - -\\, - )$ for his 
"Spacetime" Algebra book, but I will not concede, this West coast metric has to be 
the Timespace Algebra (TSA), since this is in accordance with Cliffordian convention:
$$
\begin{array}{rl}
C\ell(1,3)\\!\\! &\Rightarrow \text{diag}\\,\\, \eta_{\mu\nu} \sim (+ - -\\, - ) \\\\
C\ell(3,1)\\!\\! &\Rightarrow \text{diag}\\,\\,  \eta_{\mu\nu} \sim (- + +\\, + ). 
\end{array}
$$ 
The latter is of course often written $(+ + +\\, -)$ but this truly *is* a difference without a difference.
So the algebra I mostly try to stick with is really the *proper* STA, the East coast metric or $(- + +\\, +)$. 

This puts us at odds with the vast bulk of spacetime algebra 
literature, which is very unfortunate, because although there are no known physical 
differences in the choice of metric signature, the geometric algebra that results is 
**_not isomorphic_**. You can reference the 
[classifications here on Wikipedia.](https://en.wikipedia.org/wiki/Classification_of_Clifford_algebras#Classification)

With $p=$the positive metric components, and $q=$ the negative, we have the Clifford algebras $C\ell(p,q)$, in this scheme,

* $C\ell(1,3)$ is the $(+ - -\\, -)$ Hestenes timespace algebra, which is isomorphic
to the matrix algebra $M_2(\mathbb{H})$ (real $2\times 2$ matrices over the quaternions.
* The spacetime algebra $C\ell(3,1)$ with $p=3, q=1$ and signature $(- + +\\, +)$ is isomorphic to the matrix algebra $M_4(\mathbb{R})$ ($4\times 4$ matrices over the reals).

It sounds like it morally *ought* to have some physical difference, and to my 
mind maybe it will, but only in the very esoteric stuff, which involves the 
gauge groups and their representatives in the geometric algebra of timespace 
versus spacetime. Although, I am not currently aware that there are any 
fundamental physical differences that are experimentally observable. It is just 
a possibility *because* the geometric algebras differ.

You might ask, who decreed that physics depends upon the spacetime algebra versus the 
timespace algebra? My answer is that I do not know, and I am not sure there is a 
difference, but if "the universe" is a "mathematical thing" then there could easily 
be a physical difference.

The first papers I know of where the $(- + +\\, +)$ metric was pointed out as the 
only way to factorize the Klein-Gordon equation without introducing a spurious unit 
imaginary (also what I would call the pure Clifford approach) is 
[Kenneth Greider (1984)](/home/geon/papers/GeomAlgebra/GAParticlePhysics/Greider_1984_A.unifying.Clifford.algebra.formalism.for.relativistic.fields.pdf). 
So I'm calling our spinors Hestenes-Greider. Hestenes used the $M_2(\mathbb{H})$ 
timespace algebra, which is funny because elsewhere the geometric algebra research 
groups like to point out the quaternions are a left-handed system (hence implying 
they're "a bit stupid").

For the development of Dirac spinor theory this is all a pain in the neck, because 
the Dirac spinor equations are sensitive to these algebraic differences. 
Apparently there is a covariant way to write down the Dirac Theory 
[see Pezzaglia (1997)](https://arxiv.org/pdf/gr-qc/970404) which is insensitive to 
these differences, and some day I hope to write about that approach. 

Other references are:
* [Lounesto (1993)](https://link.springer.com/article/10.1007/BF01883677) --- goes 
through the transform between signatures without need to use the complex imaginary,
Lounesto coined this transform the **Tilt**.
* [Miralles and Parra (2000)](https://arxiv.org/pdf/math-ph/0003041) --- show what 
they call a "simulation" of one Clifford algebra in it's opposite signature. 
I do not yet fully know what that means, but since $C\ell(1,3)$ and $C\ell(3,1)$ are 
not isomorphic I guess it can mean something interesting. Formally all it means is 
introducing a new operator, which Miralles calls the "vee product." Big deal. Well, maybe a little big deal but certainly not a huge big deal${}^\ast$.
* See also [Botman and Joyce (2000)](https://aip.scitation.org/doi/abs/10.1063/1.2375037), 
who motivate a geometric equivalence that is not 
algebraic equivalence, so this is a view that the physics might be the same, 
provided the physics is *only* sensitive to geometry, not to the full algebra.

${}^\ast$On this second paper by Miralles et al., the existence of their 
"vee product" operator $\vee$, just means that there is a description of a Minkowski 
metric within the Euclidean space.
So it amounts to something like a Wick rotation, but the significance is they get 
this "rotation" without introducing an external unit imaginary, they then do the same 
for $C\ell(1,3)$ to obtain $C\ell(3,1)$, showing the descriptive powers of each 
algebra are the same. Similar to Lounesto's Tilt transform.

Mathematics however has no concept of "expressive power" --- which is a relation 
between mathematical structure and a physical (or other) sort of *concrete* reality. 
So these results are interesting mathematical physics.

On the last point concerning the Botman and Joyce paper, I consider this a highly
interesting physics question!
*Is physics in our universe sensitive to the entire algebra of spacetime (timespace) and not just to the geometry (qua Botman and Joyce)?*

I do not think anyone can know the answer at this point in science history.

However, there is a way in which T4G theory might suggest physics is sensitive to the 
algebra, which would be through the topology, which goes beyond the smooth spacetime 
symmetry geometry. If non-trivial topology makes a difference that shows up 
algebraically, but not in the locally Minkowski geometry, then we might possibly have 
a reason for thinking the metric signature is an empirically determinable piece of 
information. It would mean the Hestenes spinor theory is perfectly fine, but also a 
"a little bit dumb."

Which brings us to the meat & potatoes of this chapter, and the pedagogical head 
scratch of how to begin.

### Boomerangs

I could not resist mentioning one delightful consequence of 
[Lounesto\'s approach](https://link.springer.com/article/10.1007/BF01883677),
which is that he discovers a new variety of spinor, distinct from the Dirac, Weyl and 
Majorana spinors, which he dubs a *Boomerang*. 

There is another curiosity, the so-called ELKO spinor, which introduces a sign difference between charge-conjugate pairs. 

Whether these spinors are realized in nature or not is unknown, but I thought it worth 
quickly highlighting. OK, got that off my chest. Now to scratch the head about where 
to begin with spinors.


## How then to proceed?

I have delayed writing this chapter on spinors because I want to use the proper 
spacetime metric $(- + +\\, +)$, but most of the Hestenes spinor theory uses the 
timespace metric $(+ - - \\, -)$, and we know now that there will be annoying 
algebraic differences. 

For the time being what I ended up doing is trying to develop the Hestenes theory 
using the spacetime metric. A couple of changes in sign and definitions for one or 
two of the involutions are needed, but I think not too much more.

What I quite liked was 
[Keselica\'s pedagogical approach](https://scholar.uwindsor.ca/cgi/viewcontent.cgi?article=8848) 
which starts with the free electron, which is a simple equation to motivate, 
expressing a spacetime relativistic identity, <a name="Eq.1">(Eq.1)</a>
$$
 p^2 = m^2.
$$
We then seek a linear form for an eigenstate equation:  <a name="Eq.2">(Eq.2)</a>
$$
p \psi = m \psi.
$$
Recall the reason for working with the linear relation [Eq.2](#Eq.2) is for 
quantum mechanics, our theory of measurements. We could use the quadratic 
Klein-Gordon equation too, based on $p^2=m^2$, but it does not describe fermions, 
because the symmetries of Klein-Gordon fields are spin$=0$.

The linear relation for the equation of state for $\psi$ is what we need for 
developing superpositions for spin-$\tfrac{1}{2}$ states, which is what we want in 
order to compute orthodox quantum mechanics.

I do not want to get too heavily into the philosophy here, so we can regard the 
search for a linear relation expressing the relativistic mass-energy relation as 
"empirically imposed" by the fact we observe superpositions in nature.
This nicely side-steps most of the philosophy. But, of course, waves 
in a medium will superpose even if they are solutions to non-linear wave 
equations, so this empiricism is not really enough justification. 

What we are *really* demanding is a Measurement Theory (Quantum Mechanics), not 
a phase space trajectory theory. So it is *really* measurement outcomes that we 
wish to model with the eigenfunction equations. Superposition is then a matter 
of presuming all possible measurement outcomes must be present in any solution 
$\psi$ to [Eq.2](#Eq.2). But we need one further choice of representation, which is 
to say that $\psi$ is going to (by choice) be a linear weighted sum over all possible 
measurement outcomes, in the discrete case, <a name="Eq.3">(Eq.3)</a>
$$
\psi = \sum_i c_i \psi_i.
$$
And when a geon is coupled via an ER=EPR bridge we'll have a superposition:
$$
\psi = \sum_{i,j} c_{ij}\\, \psi_i\otimes \psi_j = c_{ij}\\, {{<psi1>}}_i {{<psi2>}}_j
$$
By imposing this particular choice we are using up some freedoms, and the 
"price" to pay is that for spin-$\tfrac{1}{2}$ states we will be forced to use 
a linear eigenfunction equation [Eq.2](#Eq.2).  For spin$=0$ states we'd be ok 
using the Klein-Gordon [Eq.1](#Eq.1).

In summary, it is by our free choice of how we want to "do physics" --- with a 
measurement theory --- that we choose weighted linear sum solutions of the form 
[Eq.3](#Eq.3) (or the integral form for continuous state spaces). The further 
choice of whether to study spin-$\tfrac{1}{2}$ or spin-$0$ states imposes the form 
of the relativistic mass-energy relation we use. 

We can in retrospect note that nature forced our hand for the first choice: 
we cannot seem to find a nice complete phase space theory for quantum physics. 
QM in a phase space gets very weird, because it cannot be directly related to the 
physical space of classical mechanics. 

Provided we use a Measurement State space instead then no such problem occurs 
for any known quantum phenomena (here we mean: the photoelectric effect, single 
photon interference, electron diffraction, Bell-Aspect experiments and whatnot).

### Using Noether's Theorem?

Noether's Theorem in classical mechanics relates conserved quantities to 
symmetries of the equations of motion. In QM we have no such equations of motion,
since we are not using a phase space. We have measurement states and their 
possibilities. 

What remains invariant in QM is thus not a phase space quantity like 
"total energy" or "linear momentum" and so forth, but rather 
*the **symmetry** itself*. So that would be time translation invariance, rotational 
invariance, translation invariance. The physics should not depend upon any of these 
transformations.

We also have unitarity or "conservation of probability" --- which was trivial and 
thus not even spoken about in classical mechanics (we never lose track of particles 
in CM). Unitarity was a symmetry in CM too, we just never had to bother with it.

We will recover the classical conserved quantities now only in aggregate, so 
statistically. Without unitarity we'd be unable to guarantee these classically 
conserved relations. So that is how we are using Noether's Theorem.

Thus, if we apply any of the symmetry transforms to our fundamental 
mass-energy relation [Eq.2](#Eq.2), the relation had better not change.

Which transforms do we use though? The stupid (but as it turns out correct) 
thought is to use the infinitesimal generators for the symmetry groups themselves, 
since they are all Lie groups, except for parity, time or space inversion, 
and charge conjugation, the Lie algebra generators are all we need for differential 
forms for [Eq.2](#Eq.2).  The integral forms would follow by using a Lagrangian 
action principle with the same Lie algebra generators.

This, I believe, is the best way conceptually and pedagogically, to derive 
Schrödinger-Pauli theory --- from the symmetry generators, and from the 
relativistic mass-energy Law (law? relation? identity? Take your pick.) Start with 
the relativistic treatment first. Forget about the historical development of it all.

There is a loose analogy here to Einstein's general relativity. We couple terms 
from two realms: (i) spacetime curvature, (ii) stress-momentum. The coupling is 
achieved by (iii) finding a form that yields Newtonian gravity in the Minkowski 
flat space limit.

((One could equally well use the ultra-high energy limit, but of course we do not 
have empirical access to that.))

In relativistic quantum mechanics we are doing the same: coupling (i) the spacetime 
symmetry generators with (ii) the matter components which act on the generators. 
The form of the coupling is (iii) taken to express one of the fundamental physical 
constraints or laws, in this case the mass-energy relation in flat spacetime 
(since QM is not immediately concerned with spacetime curvature).

This is about as basic as I think we can get for developing a first quantized field 
theory. "Quantization" in the spacetime algebra form for QM is nothing more or less 
than:

* respecting the real algebra commutation relations for the symmetry generators. 
One has $\hbar=1$ from the get-go here, because there is literally no concept of a 
Planck's constant needing to be artificially introduced.  
&nbsp;&nbsp;&nbsp;&nbsp;and  
* noting the matter part (that is, $\psi$) of the measurement theory in the 
eigenfunction equation form [Eq.2](#Eq.2) is "particulate" (when detected is always a 
local energy deposition).

We are not saying Planck's constant is trivially unity, the importance is in the 
ratio of $\hbar$ to the actions of geometric objects swept through spacetime.

The second of these meanings for "quantization" de-mystifies a lot I think. We're 
just saying the fact $\psi(x)$ takes geometric multivector values at every point in 
spacetime $\\{x^\mu\\}$ implies $\psi(x)$ is not **_the_ particle**, but is an intrinsically 
statistical description of the particle via uncertainty in measurement outcomes.

So-called QFT (quantum field theory) reduces to the theory of these fields and their 
interactions when creation and annihilation processes are accounted for, which are 
necessary because your fermion (or boson) can disappear from the Measurement Process 
via interaction.

In T4G theory we have to allow superpositions in-between measurements (in the 
spacetime cobordism region) because of wormhole topology permitting discrete jumps in 
the particle trajectories. The function $\psi(x)$ does not "undergo" these jumps 
because it is  a statistical description, but $\psi$ "knows" about the jumps in at 
least two ways: (1) we permit superpositions, (2) we permit entanglement (pairwise 
coupling). 

Both the superposition and naïve entanglement are of course purely statistical in 
orthodox QM, and that is because orthodox QM only deals with $\psi$, not with the 
actual particles, which are deemed "too hard to keep track of" (which T4G theory 
provisionally well explains).

If you go back and run through my English language exposition in this section you will 
find it is a realists account of the fundamental postulates of orthodox QM, but with 
an ontology, and a measurement process methodology of description, backing them. 
Feel free and welcome to formalise it all, but that will not gain you any fresh 
insight or extra understanding.


### The spacetime element

One thing I want to do here, since this is the first chapter properly on relativity,
is to show how the anti-commuting Clifford algebra view arises from classical physics
with no need to invoke quantum mechanics.

We consider the spacetime element and metric $g_{\mu\nu}$,
$$
ds^2 = g_{\mu\nu}dx^\mu dx^\nu
$$
And ask for a square root, 
$$
d\vec{x} = \gamma_\mu dx^\mu
$$
This will have the required properties provided,
$$
\gamma_\mu\cdot\gamma_\nu = \tfrac{1}{2}(\gamma_\mu\gamma_\nu + \gamma_\nu\gamma_\mu)
 = g_\mu\nu.
$$
Thus,
$$
dx^\mu \cdot dx^\mu = \tfrac{1}{2}(\gamma_\mu\gamma_\nu + \gamma_\nu\gamma_\mu) dx^\mu dx^\nu
$$
is the desired spacetime element.  In flat Minkowski spacetime we recover the
geometric algebra $C\ell(3,1)$ with metric $(- + + \\, +)$.

In special relativity no significance is attached to the bivector and $k$-vector algebra for $k>1$, but if we refuse to ignore then in special relativity we already have spinors and higher grade objects, the general $k$-vector element being a scalar multiple of,
$$
\gamma_K = \tfrac{1}{k!} \[ \gamma_{\sigma_1},\gamma_{\sigma_2},\ldots, \gamma_{\sigma_k}  \]
$$
with the square brackets denoting the full anti-symmetric wedge product. 
For $k=4$ in the spacetime algebra we max out, and get the spacetime pseudoscalar,
$$
I = \gamma_0\wedge\gamma_1\wedge\gamma_2\wedge\gamma_3.
$$
In flat spacetime this is the same as $I=\gamma_0\gamma_1\gamma_2\gamma_3$ the geometric product, since the $\gamma\mu$ are orthogonal.

### The geometric algebra expression for relativity

The next question is how to express $p^2=m^2$ in the spacetime geometric algebra? 
Since we want to be doing quantum mechanics, we need to adopt the measurement 
theory formalism, which means the spinor $\psi$ which the multivector operators 
act upon is itself an instruction to transform frame vectors and other graded 
$k$-vectors.

In other words you can flip things around: regard $\psi$ as the object acting on 
the other multivectors, the other multivectors (linear operators in the matrix 
version of QM) represent abstract measurement processes, and so are usually 
represented by invariants of those processes, which are the symmetry group generators.

To generate spacetime translations we thus need $\psi$ to act on the time and 
space derivatives, which are $1$-vectors:
$$
\begin{array}{rl}
 \Box \\!\\! &= (-\partial_t, \nabla_k) \\\\
  \\!\\! &= \gamma_\mu^{-1} \partial_\mu
\end{array}
$$
when this d'Alembertian is acted on by the spinor $\psi$ we thus get the 
measurements corresponding to time and space translation invariance, i.e, energy 
and momentum. Putting these together as Einstein taught us we get the relativistic 
four-momentum $p$. 

Note that $\gamma_0^2 = -1$, so the inverse basis vector $\gamma_0^{-1} = -\gamma_0$. 
Whereas $\gamma_k^2=1$, so $\gamma_k^{-1}=\gamma_k$ for $k=1,2,3$.

Since we are restricting attention to negligible gravity, the global spacetime 
basis $\\{\gamma_\mu\\}$ vectors are used for every fermion, and we will not be 
needing a local frame basis say $\\{e_\mu\\}$ for each fermion.  We worry about a 
copy of the frame only for coupled geons, which we've already treated in the 
chapters on 
[Pauli exclusion](../008_pauli_in_ga) and 
[interference](../009_interference_from_entanglement) 
non-relativistically, which I have no desire to repeat relativistically, since nothing 
much changes. I say this knowing coupling in T4G is via an ER bridge EPR wormhole, so 
that's going to involve GR and local frames $\\{e_\mu\\}$ in a proper analysis, but I 
am not promising a fully fledged redo of general relativity with non-trivial wormhole 
topology for the T4G website. That is a project for someone else.

In QM then, in accord with our *precription* in the previous section, we use the time 
translation symmetry generator $\partial_t$ and the space translation generator 
$\pa_x$ for the four-momentum $\vec{p}$, and the unit scalar $1$ for the mass $m^2$ 
(since it is a Casimir invariant). Since it's a four-momentum we combine the time and 
space generators into the single d'Alembertian Lie generator $\box^2$, as appropriate 
for relativistic QM.

We note $\psi$ should then act by translating our laboratory coordinates for $\Box^2$ onto the rest frame of the particle or 4-geon, so that [Eq.2](#Eq.2) will hold.
We thus get,
$$
(\Box^2 - m^2)\psi = 0
$$
As per Dirac's observation that a fermion needs a linear equation we factorize,
$$
(\Box - m)(\Box + m)\psi = 0
$$
Since this is a physical identity in flat spacetime, it must hold for any $\psi$, 
so, <a name="Eq.4">(Eq.4)</a>
$$
\Rightarrow\qquad (\Box - m)\psi = 0
$$
which is the free Dirac equation.


#### Not fundamental

The free Dirac theory <a name="Eq.4">(Eq.4)</a> cannot be a fundamental theory 
of fermions because the mass $m$ has to be inserted "by hand".

This begs the question why we are bothering with Dirac-Hestenes theory? 

My only answer is that it is scaffolding and motivation for exploring T4G theory.
A theory with a statistical objective function like the spinors $\psi$ is not an 
ontological theory. However, owing to the success of the statistical theory, we might 
be guided to some understanding of the underlying topology assumed by T4G theory (as a 
string theorist might wish to be guided for their string modes).







## Spacetime Spinors

In spacetime algebra (STA) spinors (Dirac--Pauli, Weyl and Majorana) are all characterised by real spacetime geometry (no internal "spin space" required) and have the property of being acted on single-sided by rotations. 
We will see this is because the rotor component of a spinor is itself an "instruction to rotate". 
(The other component being a dilation, which we take in T4G to be accounting for wormhole gas dynamic statistics --- non-classical statistical mechanics, or "quantum mechanics".)

((Skip ahead to the bit at the end on [fractal spacetime](#fractal-spacetime) for an alternative view.))


This is all easy to comprehend when we use the GA/STA treatment, since in GA all rotations are performed by (double-sided) multiplication by rotors. 

What we are going to show is how to map the matrix algebra (over a Hilbert space $\mathcal{H}$) to the multivector spacetime algebra $\mathcal{G}^{1,3}$. 
If we are only worried about the non-relativistic case, we will not need the 
Lorentz boosts (space-time rotations) and so we can drop down from the 
16-dimensional Dirac algebra (*real* spacetime algebra or STA) to the 
8-dimensional Pauli algebra. Which we've already covered.

The curious thing is that basis vectors in the Pauli algebra are *best* taken as bivectors from the Dirac algebra. 
This is a curious thing about physical geometric algebra: 
even when you want to avoid the time direction in space+time you cannot avoid the time!

## The basic mapping from $|\phi\rangle \mapsto \sqrt{\rho}R$
 
Luckily, since we've already got the motivation from the Pauli spinors, we can, 
I think without intellectual debt, go straight to postulating the isormorphism, 
then if we feel inclined spend a few pages showing it is valid.
 
 
 
 
 
 
 
```
[TODO: unfinished.  Work in progress.]
```















## Caveats


### Fractal spacetime? {#fractal-spacetime}

There are a bunch of people who have been working over the years on theories of 
[scale relativity](http://luth2.obspm.fr/~luthier/nottale/arICCA7.pdf) and 
[fractal spacetime,](https://arxiv.org/pdf/0812.3857) such as 
[Laurent Nottale, here](http://elbereth2009.obspm.fr/~luthier/nottale/arCSF94.pdf) 
who think they derive 
Schrödinger--Pauli theory from the postulate spacetime is fractal on the Planck scale.

I believe their derivations are sound, and insightful for what they are --- what 
they are is the half of T4G theory that I have not written much about yet: 
the theory for the statistical probability density factor $\rho$ on the 
Dirac and Pauli $\mathcal{GA}$ spinors.

My take (not as an expert on fractal spacetimes) is that they (Nottale, et al) 
have an account broadly consistent with Ballentine's 
[statistical interpretation of QM.](https://doi.org/10.1103/RevModPhys.42.358)


I'm not quite sure what to make of it all though. 
I have never understood how the fractal spacetime theorists account for non-locality 
and entanglement. Nor do they have a theory for the Standard Model, 
which is very odd for a paradigm that suggests quantum mechanics is all about geometry.
(Perhaps I've not read their work closely enough, and it's been a while since I picked up 
one of Nottale's papers, so if you know any better please contact me and tell me what you 
know.)

Contrast with T4G theory, where we have a path --- not so well explored yet 
--- for getting at Standard Model phenomenology.

However, fractal spacetime and scale relativity are concepts that fit well 
with T4G theory as weak cousins. For example,

* The wormhole gas CTC geometrodynamics are going to generically yield fractal-like Feynman--Hibbs paths for 4-geons (in scale relativity they have to just *assume* 
non-differentiable spacetime as axiomatic, T4G does not). 
So tick that box. ☑
* We can use (borrow, beg from, or steal) the fractal spacetime folk's derivations 
of the Dirac equation.  Then it's almost *voila!* we have our 
"previously classically  unexplained statistical dilation factor" $\rho$ in the 
Pauli and Dirac rotor/spinors.  Thanks Laurent! Another box checked  ☑
* Scale relativity postulates physics has an additional conformal 
(scale invariance) symmetry in addition to Einstein's group 
(Poincaré plus parity inversion) --- but that this symmetry is broken at the 
Planck scale, which they consider to be the "quantum mechanics". 
I think that's a bit backwards, but the right idea, in T4G we have wormhole 
topology at the Planck scale, but which allows macroscopic separation between 
the wormhole ends, giving us proper non-locality. Tick that box  ☑

I don't know about you, but if you weigh all this "evidence" (can I call it that?) 
we build a pretty strong case for thinking T4G theory really is onto something 
profound, and scale relativity and fractal spacetime paradigms are just the 
surface of it --- I'd say, without meaning to snub anyone, that the fractal 
spacetime + scale relativity theory is a sub-branch of T4G theory, 
for the above reasons.

((I know it's an easy game to make up lists of check boxes that your theory 
ticks. I'm not suggesting this discussion is anything more than such a game. 
But I am saying it's a suggestive game. Let me know if you think it's not 
good physics via [Achrononmaster @ Ko-fi](https://ko-fi.com/achrononmaster/).))

Last note: if I ever get the time, I might go through Nottale's derivation of 
the Dirac equation, because I think someone should tie all these lose threads 
together some day. 

Hestenes, Lasenby & Doran are missing an explanation for $\rho$ and for 
non-locality (they are assuming those postulates of QM); 
Nottalle et al are missing the reason spacetime trajectories are fractal 
(they postulate it); and Susskind and Maldacena are missing the idea 
Schrödinger--Pauli--Dirac theory is a sound basis for QFT, 
since the creation and annihilation "operators" are likely just a way of 
describing spacetime topology change. 
And of course Nima Arkani-Hamed's Amplituhedron program seems to have 
re-discovered "it's all particles and local interaction," and so the 
$S$-matrix scattering approach should really morally work but they've not got 
the wormhole topology figured out as the proper foundation for non-locality, 
they still think in terms of locality being too primitive to do without.
They are right of course, but the problems of non-local correlation cannot 
be swept under any rug in scattering theory.

On the latter issue: the interactions (scattering, or Feynman vertices) are 
*always local*.  That's absolutely foundational to QFT and QM. 
But the ER=EPR bridges give us non-local correlators, 
which the modernized $S$-matrix paradigm (Amplituhedra) 
I think is not presently capturing. 


```
TODO: work in progress. Some day we shall complete the basics for Dirac Theory 
in the STA.
```




## Summary of Dirac-Hestenes Algebra in STA {#summary-dirac-hestenes}

Here for reference are the main results. I am using the TSA though 
(timespace $C\ell(3,1)$ algebra.)

```
Below is a repeat of the Pauli Algebra, I have no got around to writing 
out the Dirac Algebra yet. Coming soon.
```

**The main mapping** (spinor equivalences):
$$
 \mathcal{H} \ni \quad |\psi\rangle 
 = \begin{pmatrix} a^0 + i a^3 \\\\ -a^2 + i a^1 \end{pmatrix}
 \longmapsto \sqrt{\rho}R = a^0 + I a^k \boldsymbol{\sigma}_k \quad \in \mathscr{D}
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


## Caveats

No particular caveats for this chapter, but maybe a parting comment.

Nothing very profound has been accomplished physically in providing the language of STA for relativistic QM. The language is not the physics.

Plus, this is, from a sophisticated theoretical physicist perspective, pretty much just "baby mathematics."
And yet the physical insight afforded have been amazing (at least I think so --- what other approach using just a new language for QM has revealed so much ontology, that "elementary particles" are not the wave functions themselves, and that the wave-functions are describing **_processes_**, not objects?).

Compare this to String/M-theory, which uses incredibly complicated mathematics, 
and yet achieved very little fundamental ontological insights into quantum mechanics proper.
Imagine unloosing the mental prowess of a string theorist upon T4G theory?


[Next chapter (Spin Measurements, part-2)](../011_spin_measurement_part2)  
[Previous chapter (Interference from Entanglement)](../009_interference_from_entanglement)  
[Back to Theory TOC](../)
