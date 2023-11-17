---
title: "Measures and Manifolds"
date: 2023-09-20
toc_depth: 3
draft: false
katex: true
toc: true
disableTitleSeparator : true
---

Just a research note on quantum logic today. Plus some lyrics!

## Quantum Logic

T4G should be able to derive quantum logic. What is quantum logic?

For my purposes QLogic is the logic of measurement propositions under the 
Heisenberg constraints imposed by non-commuting observables. 
Quantum logic is the semi-boolean algebra of measurement propositions.
By *semi-boolean* I mean propositions take values in the set $\\{0,1\\}$ 
but the distributive rule can fail under some circumstances due to 
the Heisenberg Uncertainty relations (non-commuting observables) 
or due to superpositions.
That's the physics of it.

The mathematics is:
> QLogic is a non-distributive orthomodular lattice.

The marriage of the physics and the mathematics is simply in recognizing in 
our universe detailed physical measurement propositions conform to the 
mathematical QLogic lattice. Which basically means the distributive rule fails.


### Example 1 --- Superposition confounds us

The layman gist of this is captured in a specific instance of a measurement 
yes/no proposition. We'll use Natural units.

1. Consider a measurement proposition $P$: the particle momentum is such 
that $|p|<1$,
2. a measurement $Q$ of the position $x<0$,
3. and a measurement $R$ of the position $x\ge 0$.

**Classical case:** classical mechanics --- where measurement propositions 
are boolean --- would tell us,
$$
P \wedge (Q \vee R) = (P \wedge Q) \vee (P \wedge R).
$$
and this follows simply by the distributive rule.  Classical mechanics 
measurement propositions know of no violation of distributivity, and is a 
Boolean algebra of propositions, also an 
[orthomodular lattice](https://encyclopediaofmath.org/wiki/Orthomodular_lattice).

**Quantum case:** in QM restricting $|p|<1$  means there is an inherent 
uncertainty in the position $\Delta x > 1$. We measure the momentum and 
find $P=$True. Then the proposition,
$$
P \wedge (Q \vee R) = T, \qquad (\text{is true})
$$
simply because $P$ was observed true and the particle has to be somewhere.

However, the proposition $(P \wedge Q) \vee (P \wedge R)$ cannot be true in QM 
due to the possibility of superposition. The particle can be (for all we know) 
at both $x<0$ and $x\ge 0$, because we did not measure the position, we measured 
the momentum.

((A subtlety here is that the $p$ measurement might have inadvertently 
constrained the possible restriction on the momentum squared to less than 
$1.0$ which means the position is even more uncertain! But this does not 
effect the logic.))

I will come back to this **Example 1** later, it's the interesting case from the 
point of view of T4G theory. But first let's look at two other ways QM 
imposes a non-distributive lattice of propositions.


### Example 2 --- HUP confounds us

We can also use non-commuting observables another way,
$$
\Delta x \Delta p \ge \tfrac{1}{2}.
$$

Thus, consider three propositions,
1. $P$: the particle momentum is in the range 
$\[0,0.25\]$
2. $Q$: the position $x\in \[-1,1\]$,
3. $R$  the position $x\in \[1,2\]$.

We can definitely have,
$$
P \wedge (Q \vee R) = T
$$
because the Heisenberg bound implies 
$$
\Delta x \ge 1.0
$$
in his case, since $\Delta p = 0.5$.  

But we find,
$$
(P \wedge Q) \vee (P \wedge R) = F
$$
is false, again, because for both $P\wedge Q$ and also $P\wedge R$, 
*both* have,
$$
\Delta x\Delta p = \tfrac{1}{4} < \tfrac{1}{2}
$$
(excuse the redundancies in language made for emphasis.)
Too tight for Werner's waistline.


### Example 3 --- HUP confounds us again

Another example is for magnetic spin measurements, which can be 
conducted on single charged particles.

Due to the intricacies of subatomic physics we cannot measure any rotational 
motion directly. We must use polarizing filters. For charged particles strong 
magnetic fields serve the purpose. But we get one-shot measurements, we are 
forced to choose a $\vec{B}$ field axis for the filter, since we ourselves 
--- and more particularly our laboratory --- cannot be put into a superposition.


Consider the propositions:
1. $P$: the spin is $\uarr$ definite in the $x$ direction,
2. $Q$: the spin is $\uarr$ definite in the $y$ direction,
3. $R$: the spin is $\darr$ definite in the $y$ direction.

Again, $P \wedge (Q \vee R) = \text{True}$ no problem, since the 
hypothetical $B_y$ polarizer will certainly split the particle beam (so 
any particular particle) along either "up" or "down" paths.

However, $P\wedge Q$ alone is impossible to assert True, so it must be 
false, because the measurements on $\sigma_x$ and $\sigma_y$ are incompatible, 
the symmetry generators for rotations around orthogonal axes do not commute.
(Note this is true in classical mechanics too!)


### Classical Mechanics had it too

In fact I claim the other two examples also occur in classical mechanics.
The reason we do not use a non-distributive lattice of propositions in CM 
is because Planck's constant is too darn small to make a bit of difference, 
we can artificially set the commutators to zero.

This is, to my mind, the same as ignoring measurement disturbances. These 
measurement disturbances (as per the Bohr--Einstein debates) have to occur in 
general relativity due to back reaction. We cannot send in a high energy probe 
in general relativity  to make precise position measurements without forming 
black holes at some resolution.

The *mystery* here is why GR does not have Planck's constant?

I claim GR does have Planck's constant. It is definable as the dimensional 
factor we have to insert in the commutation relations once we dimensionalize 
the measurement quantities from the associated Lie group generators.

I have yet to write this all up in more succinct (I mean less succinct, lol)
academic form! 


### Example 1 (superposition) revisited

(Caveat: I am open to corrections, I'm just writing this free form, no 
peer review.)

Recall we had $(P\wedge Q) \vee (P\wedge R) =\text{False}$, in the case of 
$Q$ being a proposition the particle has $x<0$ and $R$ the proposition $R\ge 0$, 
and $P$ the momentum $|p| < 1$.  This was not exploiting Heisenberg uncertainty 
specifically, it was using the *possibility* of superposition.

But superposition is not possible in general relativity, right?  So the T4G 
theory cannot explain this, right? There has to be a way to refute T4G here, 
right?  No. Not so fast. Indeed, this is a very interesting case for T4G.

The situation is that superposition cannot be observable in GR directly. 
The best we can hope for is fuzzy measurements that show non-zero probability 
density for a single particle at two spatially separated regions.
But this is in fact the case in GR in the presence of closed timelike 
curves (CTCs).  The more energetic the probe into a 4-geon region, the more 
severe the back-reaction. CTCs imply we cannot compute the effects of such 
probes without knowing *both* past and future boundary conditions.
In other words, we've got some variety of quantum mechanics already.

Recall this poses no paradoxes involving time-travel, because T4G is a block 
universe model, all the "time travel" has already occurred, if you like "the 
universe" has already accounted for the CTCs.  The problem for *us* is given 
only information from past light cones, *we* cannot use any of the 
CTC effects ourselves to see how causality and locality are recovered in 4D.

((Also, in T4G theory we might postulate (further) that the CTC structure 
gets restricted in GR to regions that cannot Hawking evaporate${}^\ddagger$ 
to lower entropy states. So the time-travel gets confined to Planck scale 
4-geon structure. The cool thing is this structure can span spacelike 
separated regions of arbitrary separation, and that's our non-locality, but 
it is connected topology, so it is *non-locality without non-locality*.))

(((${}^\ddagger$Triple parenthetical remark, rare! The process of Hawking evaporation is, we might conjecture, wormhole or T4G mediated, as per Susskind 
and Maldacena ER=EPR conjectures.)))

GR is still local and causal in T4G, but an observer with only information 
from a past Cauchy hypersurface trivially cannot construct the future from 
the past data. (That's almost QM in a nutshell.)

In T4G the elementary particles themselves are **_postulated_** to be 
regions of non-trivial topology, and so themselves contain CTCs. OK, you say, 
but how does this give rise to effective superposition?

I've always thought there are at least two ways:
1. The 4-geon (particle) itself can contain space-like separated wormhole 
structure, so can "collapse" (the wormhole ER bridge collapses dynamically) 
upon destructive measurement or scattering, so-to-speak. 
2. It might be possible for elementary quanta (parts of a 4-geon structure) 
to traverse wormholes in other 4-geons. This really just redefines "4-geon" 
to include widely separated bounded regions that are path connected but 
not genus$=0$.

T4G speculates type-1 superpositions are true by postulates. But type-2 
superpositions are dynamic and need explication.  Or they ned simulating. 
The simulation of choice is of course Dirac's superposition postulate,

It's tough for me to get much further with this thinking.  I constantly 
daydream about replicating Mark Hadley's discussion of non-distributive 
orthomodular lattices of measurement propositions arising from GR + CTCs 
in a more spacetime physics centred way.  Maybe one day I'll get a flash 
of inspiration and figure out the elegant way to present this aspect of T4G.


I might come back to this later, but the little hint I have is that I think 
we could do a very general sort of account of the Lie algebra generators for 
the Poincaré symmetries of spacetime. But this is centered more on the non-
commuting measurement angle, not the superposition angle. At other times 
I think both these aspects of QM are tightly related, and I just ave not 
grokked the relation well. However, let me write a few more crumbs...

The idea would be that measurements *and preparations* have two important 
aspects. (1) They forbid other measurements that cannot be made with the same 
preparation. (2) They physically (Bohr--Einstein--Heisenberg style) back-react 
on the spacetime manifold so that dynamical CTC type superposition effects rule 
out even the logical possibility of knowing the values of incommensurate 
observables.

Since this is a dynamical effect in T4G it is really hard to study and 
formulate precisely.  One would like to make some idealizations.

Also, let's note (again?) that Mark Hadley has already shown a non-distributive 
orthomodular lattice of measurement propositions is constructed in GR with CTCs. 
The QLogic thus cannot be avoided in GR equipped with CTCs.

But this does not quite say that GR + CTCs equivalent to QM.

We would need to know that al measurement propositions in GR + CTCs are 
subject to QLogic, not just those we can construct.  An aid in this direction 
is a vague idea I recall Hadley or someone making that 
> "All measurements can be reduced to position measurements."
(Yes, I checked, Hadley mentions this and cites Peter Holland's 
*Quantum Theory of Motion* 1993.)

If that really is a robust result, then maybe GR + CTCs has already been shown to be equivalent to QM?

Note also Scott Aaronson together with David Deutsch, have written on how 
classical computation equipped with CTC is equivalent to quantum computation. 
Which I think is important support for GR + CTC structure 
having the basic underpinning of quantum mechanics. Also we've remarked on 
how QLogic together with only the mathematics from Gleason's Theorem is 
sufficient to derive formal QM.

So I think circa 2023 we could claim GR + CTC $\Rightarrow$ QM.

QM is however not the Standard Model, or QM does not imply the SM. So most of 
the phenomenology in *quantum physics* is not yet known to be captured by T4G 
(by GR + CTCs).



#### How orthodox QM ignores spacetime

Continuing this thread of thought, the way QM forgets about the back-reaction 
is I think one of the crucial pieces of the puzzle.

If we wrote down the back-reactions that change the topology of the spacetime 
manifold in subatomic scale measurements, then we'd be changing the CTC causal 
structure and would need to account for CTC effects (in any case), and that 
means having some accounting rules for superposition. Only we'd recognize 
the 4D picture is not just 
"anything goes" as in a sum-over-histories view, but rather,
> Anything might or could "go" --- so has to be accounted for in statistical 
potentiality.

This has always been my opinion of T4G theory: the superpositions 
are statistically effective, even though not all possibilities occur.
Moreover, the superpositions are in a sense *real* not virtual, even 
though not all of them occur. We need a subset to occur, and that we cannot 
know which will occur, and this yields quantum mechanics.


#### Overthinking?

Continuing the thread. Sometimes I think, "Am I over-thinking all this?"
Surely we are talking about topology and group structure on the spacetime 
manifold? So the measurement proposition calculus should be derivable from 
the group structure, maybe with a smattering of topology? We might then hope 
for a grander generalization from Hadley.

The non-commutativity of the symmetry generators in the STA should be all 
we need?

So am I just missing some connector arguments here?  Is it right under my 
nose?  I swear I think it is sometimes.
 

### Kolmogorov is still there

Note the probabilities in QM are still like classical probabilities. 
The non-Kolmogorov probability pertains to measurement propositions, not 
to probabilistic outcomes of any particular measurement. A subtle 
distinction perhaps, but worth pointing out. QM does not say the world is 
crazy.

There is a readable paper discussing how classical probability is a limit of 
quantum probability theory here:
[Oldofredi et al., (2022)](https://arxiv.org/pdf/2206.10667.pdf).
The take-way for that paper is that it is always possible to generate a 
distributive lattice of measurement propositions in quantum mechanics.
You just have to ask different questions!  The relevant questions should 
concern **_measurement preparations_** not just measurement outcomes, 
according to Oldofredi et al.

If we take into account time evolution and measurement preparation then the 
propositions turn out to obey the distributive rule, just as for classical 
mechanics. This is completely consistent with T4G theory, and is reminiscent, 
if not equivalent to the way Mark Hadley framed measurement propositions in his 
Warwick Phd Thesis [and papers](https://arxiv.org/abs/quant-ph/9706018).

I personally prefer the way Hadley explained the way non-distributive 
lattices of propositions arise in GR, 
> _"**Axiom 3.** The state preparation sets boundary conditions for the solutions to the field equations."_  
<br>
He continues:  
_"**Axiom 4. (Measurement process)** The measurement process sets boundary conditions for the 4-geon which are not necessarily redundant, in the sense that they contribute to the definition of the 4-manifold."_  
<br>
He explains,  
_"This axiom is inevitable if the particle contains CTCs, because the state preparation and the measurement conditions can no longer be distinguished by causal arguments."_  
<br>
And lastly,  
"_**Axiom 5 (Exclusive experiments)** Some pairs of measurements are mutually exclusive in the sense that they cannot be made simultaneously._"

By "field equations" in his Axiom 3 he means Einstein's field equations, 
which just means the 4D block universe solution for the spacetime metric, but
here of course restricted by a measurement boundary, and that's the source of 
the quantum logic, the boundary.

Raphael Sorkin also has a couple of nice papers showing how interference of 
superpositions also yields non-Kolmogorov probability calculus. This is 
a different sort of "quantum logic", although I guess they're all related.
Sorkin is talking about measures on Sets of experiment outcomes.

I think this is pretty close to quantum logic derived from the commutation 
relations --- which govern the measurement proposition algebra above. They 
have to be equivalent I'd imagine, but I'm not sure.

But you cannot beat Mark Hadley. He was pointing out ER=EPR back in 1997 
there in [this paper](https://arxiv.org/pdf/quant-ph/9706018.pdf).

**All of QM is present in GR, provided spacetime topology is non-trivial. 
That's our T4G paradigm right there, circa 1997.**  Give the man a prize?


## Got Heisenberg?

Not sure, but I think if T4G derives the HUP relations then we automatically 
inherit quantum logic, on purely measurement process grounds! 
I think this is a good clean strategy. Has it been accomplished already? 
(q.v. Mark Hadley?)  I know I've got the correct commutation relations from STA, 
on paper. At least up to signs, I use a time-space metric, ($-++\\,+$).
Yet to write it up here on T4GU.

So no need for worrying about topological manifolds?

What 
[Mark Hadley’s paper](https://arxiv.org/abs/quant-ph/9706018) 
does is construct a particular non-distributive orthomodular 
lattice from just general relativity, no "quantum" postulates except one, 
which is the T4G postulate, let me remind you:
> **T4G Postulate:** the elementary particles are regions of non-trivial 
spacetime topology, so they contain closed timelike curves (necessarily) in 
classical GR.

Well... you may call non-trivial topology in GR non-classical I suppose!
The point is, it's _quantum._  Quantum without quantum!


Also, I think it is quite reasonable to take Hadley's construction and 
generalize to all measurements in GR. I mean how many cases do we need? If 
we've got the case for spins, then momentum--position is all we need, since 
all other measurements can be reduced to measurements of momentum and 
position, right? (Something for the *real nerds* to check!)



### The Topological manifolds

Whatever the case, it will be properties of 4D topological manifolds which 
underpins the HUP in T4G theory. I'm just not yet sure of the relation.

The group (symmetry) structure might alone be sufficient, I'd think. We should 
not need any differentiable geometry concepts. Why not? Because it is the 
non-commutative structure that determines the HUP relations. 
But in the T4G picture the commutation relations derive from the symmetry
 generators --- and are classical geometry implicit in GR!

I mean... talk about Grothendieck's *Rising Sea*!  This is a rising sea!

Or am I thinking too naïvely?


### How to get Heisenberg

It is the spacetime algebra that gives the commutation relations.
I've got that down already on my paper notebooks or $\\LaTeX$ files 
somewhere (I did not go full Wigner, just the half-Wigner, to check that 
it works in the Clifford algebra).

The geometry input is, I think (remarkably?), basically just Minkowski.
What else is there that is needed?

The thing is, the 4-geons are for sure highly non-Minkowski, but we are 
abstracting the group structure, as Wigner taught us! 
I think it is an important contribution of T4G theory to show that we are not 
purely doing abstract formalism, because we are explaining *why* Wigner's 
classification works.

Wigner works because QM is about measurements, not really fields or particles.
(Ok, it is about "quanta", but how quanta get described in QM is via measurement 
processes --- what we must do to laboratory/reference coordinates to transform to 
the intrinsic particle frame.)

The essential idea is to shift focus from the particle topological structure 
(which is pretty darned unknown) to focus on measurement processes.
The thing is, it's the measurement processes that are at the heart of using 
the symmetry generators in the formalism of QM, not the 4-geon/field 
topological structure. At least that is how I think, presently.


## Onwards to the amplitudes?

I recently became aware of a possible way to derive "quantum probabilities" 
---or non-Kolmogorov probability, i.e., Feynman amplitudes --- from just the 
logic of quantum mechanics.  Mark Hadley supposedly (if I recall) got quantum 
logic, but from what I remember had left a few loose threads.

In any case, this paper by 
[Holik et al (2014)](https://doi.org/10.1016/j.aop.2013.11.005)
has I think the details.

### The Born invariants

There are two ways the Hilbert space inner products (bra-kets) are used in QM, 
(i) one is to compute expectation values, and (ii) to compute transition 
probabilities.

In the geometric algebra (GA) picture, the expectation values have a 
straight-forward interpretation from pure geometry, because we can recognise 
them as expressing transforms from the laboratory frame to the particle frame.
$$
\langle M \rangle = \bra{\psi} \hat{M} \ket{\psi} \longleftrightarrow R M R^\dagger.
$$
The T4G idea is to identify the operator $M$ (now a multivector) as the 
abstraction of a particular measurement instrument, or measurement setting, 
but of course boiled down to just the absolute raw quantity to be measured.

No real measurement is ever so simple, we throw away all sorts of junk, and 
pick out just the value of the quantity of interest (mass, position, energy, 
spin,... whatever).

The rotor (or spinor more generally, to include statistics) is the 
*instruction to transform.*  Thus in the T4G paradigm, all we are doing with 
bra-ket notation is mathematically abstracting a transformation of the 
multivector $M$ to a "rotated" multivector which represents the outcome of the 
measurement on the particle/system.

By "rotation" here my language is only suggestive. We can generalize 
"rotation" to *"any geometric algebraic transform"* that is appropriate to 
the measurement to hand. In making these identifications we have not 
contradicted any quantum mechanics. All we have done is more clearly state 
how QM is a measurement theory. The T4G view just adds a bit by noting the 
measurement preparation is not trivial, and that is not mysterious, it is 
rather simply due to gravitational back-reaction due to the presence of CTCs.

Measurement preparation forbids simultaneous detection or inference of 
incompatible observables. But T4G goes the extra mile to explain why 
incommensurate observables arise naturally in GR. 

This is done by noting the Lie algebra generators are non-commuting even in 
classical mechanics. When the dimensioned quantity of proportionality is 
inserted and made non-zero then that *i*s Planck's constant. It's natural 
value is of course $\hbar = 1$.  It is the magnitude of the other physical 
quantities which gauge off this unit value (as with $c=1$.)

In this sense Planck's constant is not setting a fundamental scale so much 
as mass-energy phenomenology of 4-geons are setting the scales gauged off 
$\hbar=1$. Or, at least, this is one way of thinking about scale laws in QM 
phenomenology.

Can we go further and generalize this to the transition amplitudes?
I think we can.

### Transition amplitudes

I think in T4G with the help of STA/GA it is possible to recognize 
transition amplitudes as the time-dependent generalizations of the 
Born-Dirac bra-ket expectation values.  In writing,
$$
A_{1\rightarrow 2} = \braket{\psi_2|\psi_1} \longleftrightarrow \psi_2^\dagger\psi_1
$$
we are using the geometric algebra in a slightly different way to the 
expectation value calculations, but not all that much differently. 

[Lasenby and Doran (Sec. 8.5)](https://www.cambridge.org/core/books/geometric-algebra-for-physicists/FB8D3ACB76AB3AB10BA7F27505925091)
use energy projection operators in the STA and translate 
the Dirac equation into an integral equation, and develop some scattering 
theory from there. But I think the modern Amplituhedron inspired scattering 
theory program is just as useful, and can be developed in the spacetime algebra 
(STA) instead of the orthodox option of using a Hilbert inner product vector 
space. 

The way to approach all this with T4G goggles on, is to note that the 
scattering operators act like rotors on the spinors, that is to say, like 
one-sided transforms, as we have seen the rotors (spinors) transform 
themselves.
$$
\psi_2 = S_{21}\psi_1
$$
is the generic form, with $S_{21}$ the *scattering operator* from state 
$\psi_1$ to $\psi_2$.  Except that in T4G we no longer consider the 
$\psi$ to be "states" *per se*, they are also in turn *instructions* 
for laboratory systems to translate into 4-geon frames, for whatever 
operator we are measuring.

In the sense a $\psi$ is representing an instruction for transforming from 
a laboratory measurement operator like $x_\mu$ or $\hat{p}_\mu$, or 
$\hat{\sigma}{}_k$ to the frame of the particle/4-geon, it can still be considered 
a "*representative of the state*".  We do not have to throw out all of our 
previous notions in QM! Far from it. We are really validating QM in the T4G 
project.

If you prefer: the T4G theory is saying the actual ontological *state* of a 
system is just a layer deeper in meaning than the former $\ket{\psi}$.

The operators are themselves GA multivectors. Same footing as the previously 
named "states", which are no longer considered pure ontological states, but 
rather are now viewed as mere transformation descriptors.

This is a non-technical research note, so I just want to give the basic 
idea here.  The point is that all transition amplitudes are equivalent to 
some scattering amplitude. And the scattering amplitudes are directly related 
to the rotor/spinors in the Born rules for expectation values.
The scattering amplitudes (hence transition amplitudes) are just generalizations 
of the idea of the $\psi$ being instructions to go from one frame to another.

In hihg energy scattering where new particles get created, we are going 
beyond simple scattering theory, and into the topology of the Feynman 
vertices.  But I think this is just another higher generalization. 
In fact, form a mathematicians point of view, Feynman diagram methods, or 
the modern positive geometry of scattering stuff, is a very cool way to "do" 
4D topology.

I don't think(?) it gives mathematicians a universal 4D manifold topology 
tool-kit, but it's still pretty cool.

The point is just that when the topology of spacetime changes then the 
STA methods have to give-way to the scattering amplitude methods, we can no 
longer simply develop the rotor/spinors off a past Cauchy hypersurface.
We just say, "things get more complicated" and the scattering theorists have 
us covered!  Yet, I think T4G can help the scattering theorists too. I just do 
not know quite how precisely, it just seems obvious there is something T4G 
should have to say about why the positive geometry (on-shell amplitude) 
program works, modulo the effects of the T4G closed timelike curves.

Because we can give the $\psi$ these interpretations we can immense power 
in comprehending quantum mechanics. We can clearly see, I think, that 
Planck's constant naturally arises from classical GR + closed timelike curves.
At some scale (determined by particle/4-geon phenomenology) we simply cannot 
ignore the commutation relations for the classical geometric algebra!

When we cannot ignore the commutation relations then we are essentially 
"doing" quantum mechanics, or will be forced to develop QM methods!

As they say, the rest is history.


<div style="text-align: center;">*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*</div>

I plan to make a little bit of this chapter rigorous in an article in the 
[Theory section](/t4gu/theory/) some place in roughly appropriate pedagogical 
order of some sort, and maybe also in my YouTube video series (in dev, not 
yet online). 

But I will continue this stream of thought in the next blog post so that 
maybe I give any young researchers some crumbs to feed on... should they 
want to try exploring a very unconventional adventurous thesis that is T4G.


## Desert Island

Radiohead's 
[Desert Island](https://www.youtube.com/watch?v=RfmE73FCOFg) helped 
save my life recently. 
Close to the time of writing this article.  Not that I am capable of suicide, 
I'm personally morally opposed! But my life right now is unbearably painful, 
and not physically so. Sometimes you start to think it'd just be a blessing if 
a (short and sudden) fatal accident happened right now. "Save my life" means 
making life semi-bearable in this sort of instance! Like, not completely mad 
and insane with the interminable prospect of suffering from loss of genuine 
sincere love from a soulmate (whom you still madly love, and always will) and 
the consequent utter hopelessness and a future total black hole infecting my 
heart. Thanks Thom, Johnny, Ed, Phil.

> **Desert Island Disk**   
Radiohead   
<br>
Now as I go upon my way   
So let me go upon my way   
Born of a light   
Born of a light   
<br>
The wind rushing round my open heart   
An open ravine   
In my spirit wide   
Totally alive   
In my spirit light   
<br>
Through an open doorway   
Across a street   
To another life   
And catching my reflection in a window   
Switching on a light   
One I didn't know   
Totally alive   
Totally released   
<br>
Waking, waking up from shutdown   
From a thousand years of sleep   
Yeah you, you know what I mean   
You know what I mean (x2)
<br>
Standing on the edge of you   
You know what I mean (x3)   
Different types of love (x3)  
Are possible (x4)

If you need extra to pull though the hard times 
[Decks Dark](https://www.youtube.com/watch?v=Del3C2W63Pk) to remind you a lot 
of things can be just a laugh viewed from at least one angle. Yeah. We don't 
get to always choose or see that true love through that overly simplifying 
trivialising angle.
>  **Decks Dark**   
Radiohead   
<br>
Then into your life, there comes a darkness  
There's a spacecraft blocking out the sky  
And there's nowhere to hide  
You run to the back and you cover your ears  
But it's the loudest sound you've ever heard  
And all we trapped ragdoll cloth people  
We are helpless to resist  
Into our darkest hour  
<br>
But it was just a laugh, just a laugh  
Just a laugh, just a laugh  
Even at this angle  
And so we crumble  
A ten ton head, made of wet sand  
This dread circumference  
You've gotta be kidding me  
The grass grows over me  
Your face in the glass, in the glass  
It was just a laugh, just a laugh  
It's whatever you say it is  
In split infinities  
<br>
Then into your life, there comes a darkness  
And a spacecraft blocking out the sky  
And there's nowhere to hide  
You run to the back and you cover your ears  
But it's the loudest sound you've ever heard  
Into your darkest hour  
<br>
When you've had enough of me (x2)  
Sweet times  
When you've had enough of me (x2)  
Sweet times (x4)  


And if you need even more variety,
[The Numbers](https://www.youtube.com/watch?v=zmo-11Bc0XM) 
is also soothingly peaceful.

> **The Numbers**  
Radiohead  
<br>
It holds us like a phantom  
The touch is like a breeze  
It shines its understanding  
See the moon smiling  
<br>
Open on all channels  
Ready to receive  
And we're not at the mercy  
Of your shimmers or spells  
Your shimmers or spells  
<br>
We are of the earth  
To her we do return  
The future is inside us  
It's not somewhere else (x3)  
<br>
(One day at a time)  
One day at a time  
<br>
We call upon the people  
People have this power  
The numbers don't decide  
Your system is a lie  
The river running dry  
The wings of a butterfly  
And you may pour us away like soup  
Like we're pretty broken flowers  
We'll take back what is ours  
Take back what is ours  
<br>
One day at a time


A film with a beautiful soundtrack and the touch of generous light and 
hope is 
[Nostalgia de la Luz](https://en.wikipedia.org/wiki/Nostalgia_for_the_Light) 
but it's a hard film to watch. Helps you appreciate what we have, and what 
others have lost in circumstances of such tragedy that we will never know.

<table style="border-collapse: collapse; border=0;">
    <colgroup>
       <col span="1" style="width: 25%;">
       <col span="1" style="width: 25%;">
       <col span="1" style="width: 25%;">
    </colgroup>
<tr style="border: 1px solid color:#0f0f0f;">
<td style="border: 1px solid color:#0f0f0f;"><a href="../45_solvableun">Previous chapter</a></td>
<td style="border: 1px solid color:#0f0f0f; text-align:center;"><a href="../">Back to Blog</a></td>
<td style="border: 1px solid color:#0f0f0f; text-align:right;"><a href="../47_lie_mania">Next post</a></td>
</tr>
<tr style="border: 1px solid color:#0f0f0f;">
<td style="border: 1px solid color:#0f0f0f;"><a href="../45_solvableun">Solvable and Unsolvable</a></td>
<td style="border: 1px solid color:#0f0f0f; text-align:center;"><a href="../">TOC</a></td>
<td style="border: 1px solid color:#0f0f0f; text-align:right;"><a href="../47_lie_mania">Lie Fury</a></td>
</tr>
</table>

