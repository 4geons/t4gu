---
title: "Sums Over Histories"
description: ""
date: 2018-02-25
lastmod: 2018-02-25
cover: ""
coverAlt: ""
toc: true
tags: []
draft: false
katex: true
---

## T4G and Feynman Path Integrals

In the last chapter, [Problem of Interference,](../003_problem_of_interference/) we considered how superposition could be derived from the wormhole gas hypothesis (WHG) in T4G theory, or from self-entanglement. 
One possibility floated was that a Lorentzian wormhole gas topology allows 4-geons to "time travel" in effect, although in a highly constrained way --- basically consistent with "no-signalling". 

No-signalling is a lynchpin of quantum mechanics. 
It holds in T4G theory because the wormhole bridges are minimal, so one cannot use a T4G wormhole to send *useful* information faster than light. 
Alice (A) sends a signal to Bob (B) via a T4G wormhole in exactly the same way as in orthodox QM. 
When Alice collapses the EPR=ER bridge, she knows the result of her qubit's state, say "Up". 
She then instantly knows Bob's state will be "Down". 
But this is entirely useless for anyone in ambient spacetime, because Alice cannot tell anyone near enough to Bob that Bob's qubit is going to be Down before Bob learns it is Down. 
"Near enough" that is, to seem omnipotent (violating Einstein causality).

Likewise, Alice cannot use an ER bridge time-machine to get to Bob after he measures his qubit and then use a second ER bridge to go back in time before she measured her own. 
Why not? 
It is because the ER bridges are EPR bridges, one cannot traverse them without collapsing the bridge, i.e., conducting a measurement. 
The notion of "going back in time" cannot apply to a classical system like "Alice" it can only apply to her entangled qubits. 
So no matter what protocol she adopts, she cannot get the information about what state her bit will be in before she measures it, one way or another, or before Bob measures it and sends her an *unentangled* light speed message.

But this is just the phenomenon of entanglement.

In this post I want to discuss superposition, and how there might be a brute force kind of method for proving T4G theory yields quantum mechanical superposition, but derived from spacetime topology rather than as an axiomatic postulate.

### All possible paths all at once

Before tackling interference, we can first understand how T4G theory explains the effectiveness of the path integral or sum-over-histories (SOH) formulation of QM. 
Because of the hypothetical wormhole gas (WHG) a 4-geon can stochastically traverse a closed timelike curve (CTC). 
We could call this "time travel," but it is highly restricted by the WHG statistics. There is *no* time machine here in the scifi sense.

Time looping like this does not give rise to proper superpositions however, because once a 4-geon loops then it's prior past history is not amenable to measurement. 
We refer here to a concept of *proper history* which is history along the now acausal worldline of the 4-geon, which may have looped backwards in time. 
I will also call the worldline kinematics allowing closed timelike curves "**atemporal**" dynamics/kinematics.

If the 4-geon is a normal element of matter it propagates forwards in time of course, unless it turns into an anti-particle, which is a topology change and is a little more complicated (since by conservation laws this process can never be a pure time-reversal of a worldline). 

Leaving aside topology change, which is a relativistic QM effect, the end result of the time looping can be thought of in two ways:

1. In information theoretic terms it endows classical physics with a resource of CTC's which turns classical computers into quantum computers.
2. In spacetime dynamics terms it endows spacetime with a quasi-superposition structure.

The first way of understanding "explains" why we can build effective quantum computers. Every physical classical computer *is* a quantum computer, only one that is not exploiting spacetime topology fully, so is limited in algorithmic complexity, whereas a classical computer equipped with CTC resources has [PSPACE](https://en.wikipedia.org/wiki/PSPACE) complexity power, meaning it is a quantum computer (from a purely information theoretic point of view).

The second is the more pertinent to dynamical systems. 
What it means is that although time loops permit a 4-geon to "pop up" anywhere in spacetime according to some (perhaps vanishingly small) probability, determined  by the WHG statistics, the 4-geon itself can only be detected (absorbed, so annihilated or scattered) *once* --- **once** for all time --- in it's entire proper history (atemporal) worldline. 

The point is, we get all the effects of a superposition just by permitting a decent enough stochastic wormhole gas topology. 
The constraints like the Tsirelson Bound and Cluster Decomposition follow fairly naturally in T4G theory if we pick the appropriate WHG statistics. 


#### Brute force proof of superposition

So far this is all philosophy. But I think there is a pretty dumb brute force way to get to a proof that T4G theory can reproduce superposition effects.

The model I would suggest is that of Feynman and Hibbs, or SOH (sum-over-histories). 
The path integral assumes all possible paths really do occur. 
But they're never observed, only one set of paths with the same beginning and end points are observed, and we have no idea what happens in-between times.

Did the particle actually take all those paths? (Including all off-shell paths.)

Orthodox SOH formulation might tell us, "Yes, all paths really do *occur*." 
But this is pure metaphysics. 
There is in fact no reason to assume all possible paths occur. For the SOH formulation to work effectively it is only necessary that;

<!--
<ol type="a"> 
   <li>all possible paths might have occurred, statistically,</li> 
   <li>there be interference between them.</li>
</ol>-->

&nbsp;&nbsp;&nbsp;&nbsp; **(a)** all possible paths might have occurred, statistically,
<br>
&nbsp;&nbsp;&nbsp;&nbsp; **(b)** there be interference between them.
  
The reason SOH and Many Worlds seem weird theories or ontologies is because of part (b), not part (a). 
How on earth do the histories/worlds interfere?

In T4G theory the 4-geon does not really take all possible paths, but it may be able to *sample* a pretty large number of them, depending upon the ambient WHG distribution.
This is all we require to retrieve raw superposition or SOH, we just need the available Feynman-Hibbs paths to be sampled.

The remaining tricky bit is to show this also can lead to interference.

### Interference effects

It should be pointed out that the SOH formulation does not have to add in interference effects by hand. 
What SOH does is employ complex amplitudes. 
These are what get summed, and this leads to interference.

The question for T4G theory is **why the geometric amplitudes?**

This is the right question, because in T4G we are doing classical mechanics (or GR) with closed timelike curve topology. 
So all the probabilities are real. 
The complex amplitudes are thus not some weird new ontology, but need to be derived from spacetime geometry.

But how?

This is the puzzle.

Hopefully you've already conceived of an answer, in which case flick me an email! 
I only have some vague ideas that I'm yet to check rigorously.

#### A possible way to get interference --- from unitarity

Actually this way we absolutely do get interference, but it is not yet clear it is *of the right kind* to reproduce QM.

We get interference naturally because whenever a 4-geon traverses a CTC it effectively 
"erases" the possible future trajectory it was heading down. 
This is essentially a result of Unitarity --- we do not create or destroy 4-geons 
without obeying the fundamental conservation laws!

As a result, any time-looping 4-geon is erasing possible histories. 
*This is interference,* though obviously not in the same manner of the Schrödinger--
Dirac wave equation solutions, which are Hamiltonian time-evolutions, so a completely 
different paradigm to the *whole spacetime* approach of T4G.

The task (for a good PhD) is to reconcile these paradigms. 
If T4G is a good theory they have to be reconciled.

<div style="text-align:center;">*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*</div>

Another possibility I wrote about last chapter was that a 4-geon could contain 
internal wormhole substructure, and so can be self-entangled. This would permit 
another way for interference to occur, but, I believe, does not account fully for 
superposition.

Although, if we can get interference, do we really then need the superposition 
postulate?  I have not arrived at a good answer to this question yet.


#### Some opinionated clues (or misdirections)

I hesitate to give away this research direction because it might bias your thinking. 
So please pause here and think of your own research approach to the interference 
problem in T4G first!

Seriously, *go away now* and come up with your own approach. 
It does no one any good if you follow my hints and thus end up going down a wild goose 
chase.

OK.  I assume you've come back just to compare your approach with mine. 
I will say this is only one direction I've thought of, there are others. 
But this one is particularly simple-minded, and so might work! 
(By dumb luck.)

I can only provide a flavour of the idea for now. 
I'm working on computer simulations to explore it numerical.

The idea is that the "right" sort of interference (wave solutions essentially) might 
emerge naturally out of the T4G atemporal dynamics. 
The thing is, if the WHG statistics are powerful enough but not too powerful, then we 
can get enough time-looping;

&nbsp;&nbsp;&nbsp;&nbsp; **(a)** without excessively wild chaos,
<br>
&nbsp;&nbsp;&nbsp;&nbsp; **(b)** wave-like behaviour when viewed from time oriented 
evolution.

There is a tension here. 
We cannot get wave-like atemporal dynamics without a lot of time looping. 
But if 4-geons can "invade" a spacetime volume too wildly we will likely get more than 
we bargained for, total *Doctor Who* world. 
The natural constraints preventing a *Doctor Who* universe in T4G theory are that 
(i) when entanglement breaks down that's a type of "measurement process" and that 
destroys wormholes; 
(ii) the boundaries of any experiment are exactly such processes.

The importance of not having too much time-looping involves quantum chaos. 
We know strict quantum mechanics cannot exhibit chaos, we have to exceed basic 
coherence characteristic times to get emergence of classical chaos in quantum systems, 
as Berry and others have explored. 
If we do not get decoherence then the linearity of Schrödinger time evolution implies 
that after a long enough time quantum mechanics will always suppress classical chaos.

<div style="text-align: center;"> *&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  *</div>

**Short interlude:** Remember the lesson from Berry (on quantum chaology) is that 
semi-classical dynamics emerges in a limit of infinitely many oscillations. 
The other moral is, "There is no quantum chaos." 
This is often taken to mean that Schrödinger time evolution cannot be exact, which 
everyone sort-of knows, but no one has ever explained exactly what the inexactness is 
that leads to emergence of chaos (though there are lots of proposals). 
In T4G language that would morally mean effectively infinite time-looping; 
or less dramatically, *enough time loops that we really cannot tell the difference*. 
In orthodox QM it is still a big problem because the usual "semi-classical limit" is 
the limit $\hbar\rightarrow 0$, which is a singular limit, and that obscures concepts 
of a transition or emergence of chaos. 
(Do we have to go all the way to the limit physically? No. But then how do we get 
there? Because mathematically the limit is indeed singular.)


<div style="text-align: center;"> *&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  *</div>


The cool thing about all this is that we've learned from decoherence and quantum chaos 
that quantum mechanics is "smooth, but not too smooth" --- it eventually admits 
classical chaotic dynamics at some characteristic time and decoherence intervals. 
If you can break down entanglement structure you can retrieve classical chaos, 
*physically*, without needing to jump over a mathematical hurdle of a singular limit 
in an idealized mathematical formalism.

This means the constraints on any spacetime topology explanation for quantum mechanics 
are pretty severe, and that means T4G is highly testable! 
We will not need to probe Planck energies to get good tests of T4G theory.

Fundamentally this is because, unlike String Theory, T4G theory derives quantum 
mechanics. If you have a theory that derives quantum mechanics then ordinary everyday 
physics becomes a test of your theory. If your theory presupposes QM is true, and is 
"only" a theory of high energy particle physics and cosmology (string theory for 
instance) then you have to somehow probe Planck energies and whatnot, or undergo some 
other devious experimental machinations to test your theory.

If your theory does not presuppose QM, but derives QM, then you have loads of 
possible tests to hand. And if, like me, you're a lazy SOB then you'd want your 
theory to fail early and fail hard --- so you can get on with better things in life.

I think T4G theory can fail early and hard, which is why I love it... for now.


### Reverse engineered theoretical physics

It is one of the nice theoretical features of T4G, in my opinion, that all the right 
sort of quantum mechanics depends upon the statistics of the putative wormhole gas.  
Since the WHG probably involves Planck scale spacetime topology, it's practically 
unobservable, and so this lack of empirical evidence for T4G turns into a theoretical 
puzzle involving reverse engineering physics.

We use already known quantum mechanics correlations and scattering amplitudes to 
infer the properties of the WHG. Like in String Theory this is not totally ideal, 
because we'd rather have an empirical foundation.  But the reverse engineering of 
physics theory has a long storied tradition, and is "the next best thing" to hard 
empiricism. It also helps keep theoreticians employed --- not an altogether ignoble 
justification.

In order to keep you in suspenders, I'll say here I have a little more than a 
research direction hint, I have a near to proper program, and I'm going to write 
about it in the next post --- 
[A T4G Accounting for Superposition.](../005_t4g_account_of_superposition)



<table style="border-collapse: collapse; border=0;">
    <colgroup>
       <col span="1" style="width: 30%;">
       <col span="1" style="width: 30%;">
       <col span="1" style="width: 30%;">
    </colgroup>
<tr style="border: 1px solid color:#0f0f0f;">
<td style="border: 1px solid color:#0f0f0f;"><a href="../003_problem_of_interference">Previous Chapter</a></td>
<td style="border: 1px solid color:#0f0f0f; text-align:center;"><a href="../">Back to Theory</a></td>
<td style="border: 1px solid color:#0f0f0f; text-align:right;"><a href="../005_t4g_account_of_superposition">Next chapter</a></td>
</tr>
<tr style="border: 1px solid color:#0f0f0f;">
<td style="border: 1px solid color:#0f0f0f;"><a href="../003_problem_of_interference">Basic T4G</a></td>
<td style="border: 1px solid color:#0f0f0f; text-align:center;"><a href="../">TOC</a></td>
<td style="border: 1px solid color:#0f0f0f; text-align:right;"><a href="../005_t4g_account_of_superposition">Account of Superposition</a></td>
</tr>
</table>
