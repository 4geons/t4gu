---
title: "Spin Measurement, part-1 - Projection"
description: ""
date: 2016-10-28
lastmod: 2016-10-28
cover: ""
coverAlt: ""
toc: true
tags: []
katex: true
---
 
Building on the previous chapter about spinors in the Paul algebra, 
we now take a look at measurement of 4-geon spin, and suggest why there is 
not necessarily a "proof positive" that spin is discrete in quantum theory. 
The "quantum number" for "spin" is viewed as arising from topology, or the group 
(symmetry) structure, not from any fundamental discrete ontology.

This is crucial, since it will eventually brings us in a virtuous "full circle" 
back to the promise of T4G theory --- which was that most of the *weirdness* of 
quantum mechanics dissolves when we try better to see quantum mechanics as a 
theory of gravity but endowed with particle-like topological 4-geon structure 
down at the Planck scale.

The remaining little bit of weirdness we resolve in this chapter concerns 
supposedly "discrete angular momentum" and "discrete spin".

((Actually, this is not the last weirdness, since we still need to account for the 
extra symmetries seen in the Standard Model. All that in good time, hopefully. 
And I am not even going to sniff at cosmology.))

**Note:** we do not need the Dirac spinors for this work, that'll be a 
[later topic,](../010_hestenes_spinors) 
and this is because the *essentials* of spin measurements can be analyzed 
non-relativistically with no trouble.

## Measuring Spin Orientation

The paradigm for this sort of thinking is that of: "Do not discretize what does 
not need to be discretized."
So all particle properties associated with spacetime symmetries should be smooth, 
or at worst topological. 
That is because spacetime is itself a continuum. 
A lot of discrete physics can be derived from the discrete homotopy group 
structure, in other words. 
For that we need wormholes. 
And that is the T4G paradigm.

All measurements in QM have to specify some apparatus, since in QM, unlike CM, 
the measurement apparatus plays a fundamental role in the possible outcomes 
of any measurement. 
Although to the uninformed that sounds like a tautology, it really does have important nuance, but I'm not going to get diverted into an entire discussion behind the philosophy of measurement, because I do not think that is necessary *for our present purposes*. 
The idea is straight forward:
* We specify a particular experiment,
* that experiment, not the fundamental particles themselves, *the experiment + the particles* determines what the possible instrument recordings can be.

We will use the Stern-Gerlach experiment again for this chapter and the following.

{{< Stern_Gerlach >}}

According to which the electron "spin" --- which is a 1-vector in 3-space is 
*forced* by the apparatus to appear as either an upwards deflected beam or a downwards. 
So the apparatus, **_not the electron_** dictates the "spin value" is either $\uparrow$ 
or $\downarrow$. 
Here "spin value" does **_not_** mean the electron property, 
it means the recording on the instrument.
That's a pretty basic and *important* distinction.

The Stern-Gerlach apparatus therefore acts as a spin polarizer, not as a "filter".
All electrons get through the apparatus! But they get polarized by the magnetic 
field into the downwards deflected beam or the upwards deflected beam.

If you do not believe this is the correct description of the Stern-Gerlach 
experiment then I invite you to later read the chapter on 
[Spin Measurement part-2](../011_spin_measurement_part2) where we show the 
Dirac theory confirms our T4GU description of the apparatus as a beam polarizer.
If you are still not convinced then please let it slide for now. 
We're trying to develop a theory of quantum mechanics under-pinnings, 
not debate about interpretations. 


### The probabilities and their amplitudes

For the next chapter we will stick to orthodox QM for a bit, just to keep 
things familiar. But straight after that we''ll repeat it all in geometric STA.

For the orthodox treatment, last chapter we already noted (recall: in motivating 
the mapping from the Hilbert space spinors to the STA Pauli rotor-spinors) 
that the amplitudes for a Stern-Gerlach apparatus measurement are in the 
$|\uparrow\rangle$, $|\uparrow\rangle$ basis, and are denoted $c_1(\theta)$ 
and $c_2(\theta)$ (or better linguistics: $c_\uparrow(\theta)$ 
and $c_\downarrow(\theta)$), where $\theta$ is the angle between the unknown intrinsic 
orientation of the electron spin vector $\mathbf{S}$ and the magnetic field 
direction (given by the central field in the region between the magnet poles).

We deduced, using physical arguments,
$$
c_\uparrow = \cos(\theta/2)e^{-i\alpha/2},\quad
\text{and}\quad c_\downarrow = \sin(\theta/2)e^{+i\alpha/2}.
$$
only I was being lazy and dropping the phase factors, which are needed for interference. 

If I recall correctly this is covered nicely in his inimitable way, 
by Feynman in the [Red Books, III, chapter 5 and 6.](https://www.feynmanlectures.caltech.edu/III_toc.html) 

Those are idealizations of course, but they suffice empirically, as any laboratory 
Dextor or Dextress will tell you.

We can of course experimentally test all this by first preparing the electron 
beam to be in a definite spin orientation using a pre-polarizer 
(a second Stern-Gerlach apparatus placed in front of ours, 
that has the magnetic field $\vec{B}_0$ is titled at an angle $\theta$ to ours $\vec{B}_1$.)

The probabilities for recording the $\uparrow $ and $\downarrow$ deflections will then be,
$$
P(\uparrow) = \cos^2(\theta/2),\quad\text{and}\quad P(\downarrow) =  1- P(\uparrow) = \sin^2(\theta/2).
$$
It's a little easier typesetting if we use the shorthand $\uparrow =$'$+$' 
and $\uparrow =$'$-$', and some authors do that, but I prefer the arrow notation.

I think the trigonometric functions are a nice way to point out how the Stern-Gerlach 
experiment is basically a simple projection apparatus. 
We are (can I say "literally"?) *projecting* the electron's 3-dimensional spin vector $\mathbf{S}=\tfrac{\hbar}{2}\vec{n}$ onto a detector screen.

At this stage there is nothing too weirdly "quantum mechanical".
But if you go and read that [chapter in Feynman\'s Lectures](https://www.feynmanlectures.caltech.edu/III_06.html) you will get all the weirdness.


### The two-valuedness

Just to emphasis the point: 
the two-valuedness of the spin measurement is *our choice* of measurement apparatus. 
So when we write the wave-function of an incoming electron as,
$$
|\psi\rangle = c_1 |\uparrow\rangle + c_2|\downarrow\rangle
$$
we are **_not_** saying the spin $\mathbf{S}$ *has to be* up($+$) or down($-$).

No. What we are describing is that the available information about the 
prepared state of the electron can be decomposed into one of two outcomes 
*for our experiment.* 
But that's *all* we are saying.

In T4G parlance, the measurement apparatus is creating a future spacetime boundary 
condition, and 4-geon wormhole trajectories can propagate onto that boundary or 
off it backwards in time, both directions.

This is how the interference arises, and that is why the phase factors 
$e^{\pm\alpha/2}$ are needed, they are *accounting tools*.
We hereby have given a T4G explanation, or an account, for the geometric phase factors. 
This account is entirely absent in orthodox QM, where it is taken as an unexplained axiom.


### Notation for the Bell multiplets

In the next chapter we get to the guts of what we want to show, where we'll be 
concerned with entangled Bell pairs. But to get there we have to show there are 
only Bell pairs, and there cannot be fully entangled Bell triples for $n\ge 3$ 
spin coupled wave-functions. 

To do so, I think I will lapse in notation and use Wigner and O'Hara's '$\pm$' notation.
I think this is just because it is easier on the eyes to see which particles go 'up' 
and which go 'down' for a triplet this way. 
(And we will see we only need to consider the triplet case, since the argument for 
spin-coupling pairing or monogamy, immediately extends to $n>3$.)

So when we simultaneously measure three coupled electrons (or any fermions) and 
get say a reading of (up, up down) then instead of writing this in our lab notebook as,
$$
\text{I observed:}\quad (\uparrow, \uparrow, \downarrow) 
$$
we are going to record it in pen as,
$$
\text{I observed:}\quad (++-) 
$$
if that's ok with you. Saves a bit on ink.

These measurements, just to be clear, are made on three different electrons.
So we simultaneously conduct three experiments.

The critical thing is that we are imagining we have some source of electrons 
which couples them, so that they are as dependent as possible, that is, 
as coupled or as entangled as maximally possible. 

What that means is simply that if we measure any *one* of the electrons, 
then we immediately know the result of the experiment on the other two electrons, 
simultaneously, with no light speed signal possibly fudging things for us.

The fact this sort of coupling exists in nature gives rise to violation of 
Bell's Inequalities. But that's a bit boring. We are not going to discuss the Bell Inequality violating experiments that "prove" quantum mechanics does not admit any local hidden variable interpretations. 
T4G theory is after all intrinsically non-local, since wormhole traversals by qubits of information violate local Minkowski causality.
So violation of the Bell Inequalities is trivial for T4G theory.

What we are interested in is how to account for Pauli exclusion with T4G theory, 
without needing to undergo the mess and headache of motivating quantum field theory 
from T4G principles. (We assume we could do that too, but we're too lazy to do it today.)

We are going to see shortly that the Pauli Exclusion Principle follows directly 
from this state of full tripartite entanglement being **_impossible_** for more 
than two electrons at a time. 
(Or generally for more than two indistinguishable 4-geons among 
$n$ indistinguishable 4-geons --- we will not be
using anything that is specific to electrons.)


## The Spin Vector

In GA the Schrödinger equation for a spin in a magnetic field reduces to a 
simple rotor equation. We'd like to see how. But first we need to cover the 
basics of spin expectation in the GA formulation of QM.

In GA the spin vector is defined,
$$
\boldsymbol{s} = \tfrac{\hbar}{2} \psi \boldsymbol{\sigma}_3 \psi^\dagger
$$
The motive for this definition comes from the mapping we established last chapter 
and the Hilbert space definition of the spin expectation value:
$$
\langle \hat{s}_k\rangle = \langle \psi | \tfrac{\hbar}{2}\hat{\sigma}_k|\psi \rangle 
$$
How do we get this mapped to the $\mathscr{P}$ algebra?

First we need,
$$
 \langle \psi | \tfrac{\hbar}{2}\hat{\sigma}_k|\psi \rangle 
 \longmapsto  \langle\psi^\dagger\boldsymbol{\sigma}_k\psi\boldsymbol{\sigma}_3\rangle -
 \langle\psi^\dagger\boldsymbol{\sigma}_k\psi I\rangle I\boldsymbol{\sigma}_3
$$
where $ \langle \cdot \rangle $ on the right of the mapping is "scalar part" recall.

This simplifies, because $\psi^\dagger\boldsymbol{\sigma}_3\psi$ reverse to minus 
itself hence must have zero scalar part, so the last term on the right-hand side vanishes.
Then for the other term in 3-dimensions $\psi\boldsymbol{\sigma}_3\psi^\dagger$ is both odd-grade and reverses to itself hence must be a pure vector. This motivates the GA definition:
$$
\boldsymbol{s} = \tfrac{\hbar}{2} \psi \boldsymbol{\sigma}_3 \psi^\dagger
$$
for the **spin vector**. Good.

The expectation value now reduces to,
$$
\langle \hat{s}_k\rangle \longmapsto \tfrac{\hbar}{2} \langle\boldsymbol{\sigma}_k\psi\boldsymbol{\sigma}_3\psi^\dagger\rangle = \boldsymbol{\sigma}_k \cdot \boldsymbol{s} 
$$

**The Insight:** This is a nice result, it tells us the formerly rather obscure 
"operator expectation value" in orthodox QM treatments is nothing more than a 
projection of the $k^\text{th}$ component of the real spin vector $\boldsymbol{s}$. 
At least for spin expectations.


```
TODO: maybe work through the rest of Lasenby & Doran section 8.1.4.
```

## A quick look at the road ahead

After this Pauli algebra stuff we are prepared for relativistic QM in the STA, 
and so Dirac-Hestenes theory. 
But I'm deferring that for much later, because with the Pauli algebra $\mathscr{P}$ we 
already have the tools to account for the Pauli Exclusion Principle and basic 
single particle interference.

It might seem pedagogically strained that I'm now going to treat multi-particle 
quantum mechanics first, before interference, but I think you will see why this 
is natural.
Without giving too much away, it is because to account for interference we have 
to account for atemporal (T4G motivated) interaction between the 4-geon and each slit 
(in the prototypical double slit interference case).
This means there is a description of the global system in the spacetime region of the 
cobordism from source to detector, that has to permit a coupling between the 
4-geon and each slit.
The single particle 4-geon thus has to be described *epistemologically* by a coupled geon, 
that is, a wormhole bridge connects ends of the internal structure of the 4-geon.

Only in T4G theory this is not a "hidden" internal structure anymore, 
it is real and manifest, and the apparent acausality in the self-interaction is 
due to the ambient vacuum wormhole gas dynamics, plus the fact the ER bridge 
intrinsic to the topological structure of the 4-geon is itself a non-local 
connection when viewed from the ignorance of Minkowski spacetime and it's trivial 
topology. 
This is at least the theory.

We will be able to describe single-particle interference phenomena with this 
approach without explicitly invoking the T4G geometrodynamics in the 
[third chapter ahead.](009_interference_from_entanglement.md)
But as I just explained, it arises from self-coupling, and in a 4-geon topologically 
agnostic sense there is little difference between such single-particle self-coupling 
and two-particle coupling that we need to explain Pauli Exclusion. 
So it is Pauli Exclusion next up.


### The measurement theory connection

In terms of measurement theory the remarks above are put in the context of 
T4G theory with an interpretation that goes like this:

> For a self-coupled 4-geon, the geon's wormhole structure (ER bridge) is 
"pinched off" or collapsed when a measurement process occurs, which re-connects 
the end where the energy is detected with a geon that is part of the measurement apparatus.<br><div style="text-align: center;">(Basically a scattering result in primitive terms.)</div>

It should be noted the term "self-coupled 4-geon" is a redundancy, 
since every 4-geon is considered non-trivial in topology, and so they are all 
self-coupled by minimal 
ER bridge structure, in some way.
Or, if not, they can behave "quantum mechanically" only if they can traverse 
ambient spacetime vacuum wormholes (the Planck scale wormhole gas geometrodynamics).

**The Anti-Crackpot Statement:** Yes, I know, pretty much every idea about what goes on at the 
Planck scale is today pure metaphysics. And a great place to hide all sorts of nonsense 
without immediate risk of embarrassment --- since... who is going to test it?
I would just say judge all such competing ideas on merit, 
and also by how parsimonious they are.
I've never known a more parsimonious model underlying quantum mechanics than T4G, 
but if you think you know of one that's more parsimonious please let me know, 
after donating on **[Ko-fi](https://ko-fi.com/achrononmaster/)** 
so I can give myself permission to read what you've got to say.


### Caveats

Although above I mentioned the "philosophy of measurement" is not too important 
for our present purposes, it is a topic I will want to come back to when we take 
a look at "measurement propositions" and so-called [quantum logic.](../099_quantum_logic) 
That's because quantum logic is really all about measurement propositions!
And I think T4G theory sheds a pretty unique light upon all of that.

[Next chapter (Pauli Exclusion and Entanglement)](../007_pauli_ex_entanglement)  
[Previous chapter (Spacetime Algebra)](../005_spacetime_algebra)  
[Back to Theory TOC](../)
