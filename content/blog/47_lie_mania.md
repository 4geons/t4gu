---
title: "Lie Mania"
date: 2023-09-26
toc_depth: 3
draft: false
katex: true
toc: true
disableTitleSeparator : true
---

Continuing last post's research notes.

## QM is a Measurement Theory

(Basically my T4G mantra.)

What does this mean? It means, regardless of what the founders of quantum 
mechanics *thought* they were doing, they were constructing a theory of 
measurement and measurement processes.

This is *in the axioms* but not often pointed out!

I think it can get obscured in the mathematical treatment, which perhaps 
suffers from a Bourbaki type influence of "it's just formalism, nothing 
more" mentality. At least in some books. In others I honestly think they just 
blindly follow tradition. (Need to makes sales under capitalism, for what aught 
to be free-libre educational textbooks. Under an MMT government centered 
approach we could instead just pay good writers to write, leave bad or fiction 
writers to compete in the market, but with a job guarantee living wage floor --- 
there is no end of useful things even poor or unpopular writers can do in their 
community.)

The textbooks tend to need to hold to tradition, for fair reasons. But there 
are ways to develop the formalism with physics in mind, to the forefront.


### The Formalism (in plain words)

Formally we write this in the form of eigenfunction and eigenvalue relations.
The operator on the eigenfunction "is" the measurement, so to speak --- in 
the formalism.
The eigenvalue is the result.
Physically we say the measurement result cannot produce any other value if 
$\psi$ is in an eigenstate.

But we also say the operator cannot produce any other *quantity* for that 
operator. How?

It is a very natural way of viewing the raw formalism, you might say 
"the only way" because it is pretty hard to imagine a simpler sort of formalism. 
And it is not "quantum" at this stage, it could be one way of doing classical 
physics, had you not discovered Newton, Lagrange, Hamilton et al.
 
The linearization of the symmetry group for the type of measurement, which 
is the Lie algebra generator, is what we use for the action, that is to say 
for the *real action* for the measurement process side, in the formalism. It 
cannot be any other way!
(At least not naturally or without some artificial contrivances.)

This explains why we "replace" $\vec{p}$ by $\nabla$ in any identities 
for physical invariants. The operator equation expresses the relation between 
the conserved quantity (eigenvalue) and the measurement act (operator acting 
on the eigenfunction).
The geometric spacetime algebra (STA) explains why the Lie generator 
$\nabla$ has to have a pseudoscalar factor, $i\sigma_3$, or whatever 
is the case in your preferred STA scheme.

Let me repeat for emphasis, we can use the same formalism in classical 
mechanics, and we probably would if it were more convenient than Lagrangian 
or Hamiltonian mechanics.

The linear algebra applies because we are looking at instantaneous processes, 
more or less, in the QM idealization at least, so we must or can use the 
Lie algebra, and do not use the Lie group itself. So we insert the 
infinitesimal generators in on the "operations" side of the eigenfunction 
equation (which is really a definitional identity) and the conserved 
quantity on the right hand side.

A heuristic or intuitive understanding might be to say quantities need not 
be conserved in general time evolution, but if we make an instantaneous 
measurement the result should be only the conserved quantity that would 
be conserved had the operational process side been applied purely.

Here "applied purely" means the measurement would semi-miraculously only 
result in the transformation of the system implied by the measurement result. 
It's impossible in practice, but our idealization doesn't matter too much, 
**(a)** because we're considering "quantum" regime systems, and **(b)** we end 
up adopting the statistical approaches anyway (by pure force of necessity).

All the standard QM operators should conform to this heuristic, if this 
T4G story is right, and I think they do.
For momentum measurement we model it (the whole shebang) as an 
eigen equation with space translation generator on the Op side, the 
physical momenta on the eigenvalue side.

For energy measurement it is time translation invariance, so the 
eigenvalue is energy, and the operator is the generator for time 
translations, $\partial/\partial t$.

For angular momentum, it is the angmom, and the Op side has the spin 
generators, the bivectors!!!

How beautiful.


### Choosing the Better Clifford Algebra

It is conventionally thought physics should be insensitive to the metric 
signature, and in classical electrodynamics it is, however 
[Pezzaglia (Dr BIll)](https://arxiv.org/pdf/gr-qc/9704048)
showed quantum mechanics seems to "prefer" the east coast 
metric $(-\\!+\\!++)$. 

It turns out the spacetime algebra cares a bit too, although transforms for 
the purposes of classical mechanics exist for going from one signature to 
the other, the so-called *tilt* transformation.
The west coast metric chosen by the big books of Hestenes and Lasenby & Doran 
unfortunately chose the wrong one! The east coast has a matrix equivalent 
in real $4\times 4$ matrices, while the west coasts has an equivalent in 
quaternionic $2\times 2$ matrices.

Although in the end Dr Bill finds one can reconcile 
both metrics provided a full 16-dimensional Dirac multivector wavefunction 
is employed.

If we restrict to 8-dimensional then the east coast metric is preferred. 
The nice thing here about desiring to reconcile metric signature choices 
is that maybe the 16-dimensional multivector wavefunctions are superior 
anyway, owing to incorporating more symmetries of the Standard Model?

In any case, I have also come across rumours that for chiral fermions we 
should be looking at east coast, so maybe Nature does after all stake 
a preference? On this flimsy basis (I have not explored chirality) I am 
seeking to redo most of T4G using the east coast. There was also 
[Peter Woit weighing in](https://www.math.columbia.edu/~woit/wordpress/?p=7773) 
for a natural east coast preference. One reason is pragmatic: working on 
west coast is "conceptually confusing". Obviously earlier in life I did not 
come across this, having not done too much theory that it mattered, but it 
is a good enough argument for me to switch conventions. So (PETA alerts), 
hello Easties, got any lobster sauté?

Another reason is analytic continuation to imaginary time with east coast 
gives a standard Euclidean positive definite metric, whereas west coast 
is negative definite, a weird choice. Although I have to say, in STA one 
would not need to use imaginary time for analytic continuation.

My favourite parochial reason for $(+\\!+\\!+-)$ is that in spinor theory 
the natural unit imaginary for generating the phase rotations of 
$\text{U}(1)$ for electromagentism is the timelike base vector $\gamma_4$.

In the west coast (Hestenes et al) that role is taken by $I\sigma_3$.
They cannot use their timelike $\gamma_0$ because $\gamma_0^2=+1$, whereas 
our $\gamma_4$ squares to $-1$.

Why is this aesthetically pleasing? I don't know, it just is to me. 
But maybe one justification is that if there is a preferred basis frame 
vector to orient a frame by then perhaps the current direction should 
be it. Then in Dirac theory we are not tied to selecting the $\sigma_3$ 
as a preferred "spin" plane. The measurement spin plane goes back to 
being a mere measurement freedom.

But also the generators for the $\mathfrak{su}(2)\times\mathfrak{u}(1)$ 
are:
$$
(+\\!+\\!+-):\quad\gamma_4,\quad \gamma_{12},\quad \gamma_{23},\quad \gamma_{31}
$$
whereas I believe Lasenby and Hestenes have to use,
$$
(+-\\!-\\,-):\quad I,\quad \gamma_{12},\quad \gamma_{23},\quad \gamma_{31}
$$
which I guess is fine too, but I like the cleaner Dirac equation from the 
east coast myself.



#### Little Tragedy

In my theory sections I was following Lasenby & Doran. It pains me a little 
to think about redoing all the notes for the east coast signature, but I 
think I will have to, if only because one day in the distant future I want to 
tackle chirality. The trouble is I rely upon those folks for other 
hints, and it pains me a lot more to think I'll always be having to translate. 

For quantum mechanics it is a serious frickin' headache, because Hestenes, 
Lasenby, Doran develop so much in the "wrong" metric it stuffs up the entire 
picture of the elementary particle spectrum in the STA. 
[Pezzaglia](https://arxiv.org/pdf/gr-qc/9306006) did not 
give (someone like me) enough scraps to go on, but in future I'll be trying 
to follow this approach.

#### ... but not a huge tragedy

It should not be too hard to rework just the things I'm interested in with the 
Pezzaglia way. Also, it should help sharpen a few STA skills.  Also, 
reading Pezzaglia, I got a few wee more little insights.

One is:
> Operators that mix grades are telling us some interesting particle physics.

Another is:
> A general multivector in the STA can be viewed as a combination of 
"polymomenta":
$$
\begin{align*}
M & = \text{scalar} + \text{vector} + \text{bivector} + \text{trivector} \\\\
M \& = \text{energy} + \text{momentum} + \text{spin} + I\cdot\text{helicity} 
\end{align*}
$$
but that's all Bill got up to!  What about the 4-vector pseudoscalar term? 
What should go there as the "polymomenta" for the spacetime hypervolume?

This is going to bug me for a long time!

It has to be the other bilnear covariant in the Dirac theory right? The,
$$
i \gamma_\mu \hat{\gamma}_\nu,\quad\text{or sometimes},\quad i\hat{\gamma}_5
$$
in the Matrix algebra stuff, in the STA Dirac spinor representation it's the,
$$
\rho \sin\beta
$$
number. In the orthodox matrix stuff it's a rank 2 antisymmetric tensor. 
That has to be gravity right? Makes sense, since it's the bilinear covariant 
for the spacetime pseudoscalar part.  Do physicists have a name or concept 
for this?

For me, right now, it is all very confusing. I've looked at the Lasenby & Doran 
spinor representation, and it does seem a bit clunky compared to Pezzaglia's, 
but I only recently discovered "Dr Bill", so I'm not sure how I'll proceed, 
but I do think I will try to follow Pezzaglia, and if I ever have a care to 
write up any actual applied physics, then I'll try to do so by translating 
from Lasenby & Doran to Pezzaglia.

The trouble is, there are many ways to go about modelling the elementary 
particles.  So far I'm really bedazzled and dazed and confused, I have not 
found a clean way to develop it all from scratch. Some people even say the 
Dirac theory is a "bit wrong" and so if we use the STA to write-up our 
fermions, how do we know we're doing anything properly if all we go by is 
Dirac?  I guess the right idea is to make some choices and just *go for it* 
and leave it to better people to tidy up later.


## Write-ups --- from GR to QM

While I think Hadley suffices, I want to get to QM from GR in a slower 
more pedantic way, as a matter of general public education, so high-brow 
mathematical physicists aren't the only ones in the know. This is my 
*dirtbag physicists* persona wanting to get out.  There is a long way to go.

One of the earlier steps will be to go over the 
eigenfunction--eigenvalue formalism in QM and show where it comes from.

It's not just an accidental discovery which "just happened" to fit with 
nature. I think we can rewind history imaginatively, and imagine a 
reconstruction of QM from a *measurement theory* paradigm, and so arrive at 
a clearer more pedagogically clean understanding of the eigen-function 
eigen-value paradigm/formalism.

Now... I do not know if my presentation of this will be rigorous enough or 
academically acceptable, but I plan to give it a go. And, after all, 90% or 
so of my formal university training in physics was full of such half-baked 
rationalizations for the fundamentals. I can't think of any physics 
professors who ever explained quantum mechanics is a sensible way, they 
were all teaching at least (who knows what went on in their minds) as 
operationalists.

In keeping with these being rough research notes, here is the basic plan or 
idea.

We re-conceive the operator--eigenfunction formalism as a mathematization of 
measurement processes.  Now the linear algebra cares not for our measurements, 
for sure. But we select this linear algebra as a tool for formalizing 
fundamental measurement processes, highly idealized and abstracted. No one 
aught to be under any illusions the operator-eigenvalue formalism is what 
Nature is implementing. No. It's our choice of description of natural 
*elementary* processes.
Most of these processes could be philosophically viewed as *well below* our 
level of instrumental exploration. They are sub-instrumental. But we will 
assume (as an article of scientific faith, meta-science) these are real 
processes. And our mathematical representation for them is a highly 
abstract idealization.  We'd like it to be an exact model, but forbid 
ourselves claiming *the math is the physics*. 
(At least I do forbid.)

It is in this sense I regard the eigen equation formalism of QM, and by 
inheritance the QFT framework, as secondary, and the scattering 
amplitude framework as the more correct primitive way to develop quantum 
physics, at least for applied purposes.

There is a nice 
[3blue1brown episode](https://www.youtube.com/watch?v=PFDu9oVAE-g)
on the linear algebra which may help 
prime readers who are reading my T4GU stuff with little formal mathematics 
training. I'll assume you've had a look.

### The Linear Algebra

So I am not sure if this is "right" or rigorous, but the way I can think 
about Hilbert space QM is that it's just a dumb model. Yeah, the 
vectors (rays) are the "state". But the purpose of this is to model the 
measurement process, and so the time evolution of the state (or in 
Heisenberg rep., the operators) has to be modelled too, goes without saying.

Note the fact we can time evolve either the state *or* the operators is not 
an insignificant thing, to my mind. I think that is because orthodox QM is 
not truly an ontological theory. Since we're modelling the measurement 
process, we should darn well be able to time evolve either the state or the 
operators, since the measurements do not care what we evolve. A measurement 
picture only cares about measurement outcomes.  OK, so this is not a 
mathematical statement, but I think it is good physics philosophy, 
it "explains" why we are free to evolve either the state or the operators. 
The bare mathematical formalism says both pictures are equivalent, but cannot 
tell us physically why. The math side of things just "computes the model" and 
nothing more. We people have to impart the meaning of it all, even if it is 
a *post hoc* rationalization.

((Not all *post hoc* rationalizations are false.))

Let's deal a little with the usual QM palaver. They say the classical 
mechanics variables "get promoted" to operators. But the operators are 
the generators of the associated transformations, and come from the 
geometric algebra. So I don't like that language. There is no "promotion" 
here, rather better to think of the writing down of QM equations as 
modelling measurement processes. 

Again, we could still be doing classical mechanics, so a "promotion" does 
not make sense.

OK. Post-rationalization now. Let us say the reason we replace dynamical 
variables with (symmetry) generators of the transforms is so that the "bit" of 
the model representing the system (state or wavefunction or multivector (MV) in 
general) is mathematically literally subject to the transformation that 
would occur for a measurement of the actual dynamical variable (now called 
an "observable" or eigenvalue).

It's a bit like a sales "two-for-one deal". On the one side we recognize 
we'd better "update" the system, so that's the applied MV transform, but 
out of it we'd better have a measurement value, the eigenvalue (or in 
the superposition case a distribution).

But the Measurement--Result model here is not really a probabilistic 
calculus itself. We have to reduce to a scalar part by a contraction to get 
the probabilities. We've had to overlay a probability calculus upon the 
geometric MV algebra expressions. But that is fine if it can be done. 
(Remember this is all still post-rationalising.)

But it is also logical. Any superposition is certainly expressing 
*some sort of weighted sum* of the possible measurement outcomes, in 
such a measurement model theory. That's what it is set up to do, to 
model measurements. We've simply made a model mistake if we cannot get 
probabilities out of the expressions. So this is what we do. Find the 
scalars that most naturally correspond to the weights, and check the model 
bears resemblance to experiment, and lo and behold we find it does!

You do have to appreciate survivorship bias here. We could easily (I suppose! 
not really sure) write down a measurement theory model similar to Schrödinger 
and Heisenberg which does not match up with experiments on elementary 
particles. We'd discard those and see no more of them.


### Example --- Klein Gordon Equation

We STA folks prefer to begin with the Klein Gordon field, since it comes 
out most naturally in the STA. But we need the east coast metric to do 
it well!

Begin with the dynamical theory, no measurement yet, so just determinist 
classical sympletic phase space:
$$
p^2 + m^2 = E^2
$$
No notion of spin or torsion or helicity here, so it is "spin $0$" in 
QM parlance, or a "scalar field". Now we need or desire really, to recast this 
into a measurement theory. To do it nice and relativistically (which is to say 
properly) we want to combine the symmetry generators that transform the position 
and time translation generators, into one spacetime differential operator, 
$\Box$. In the index and frame-free language of the spacetime algebra (STA) we 
write this simply as,
$$
\Box = \gamma^\mu\partial_\mu = \gamma^0\partial_0 + \gamma^k\partial_k 
$$
Noting for the east coast signature $\gamma_0^2 = -1$, and 
$\gamma_k^2 = +1$.

These two correspond to energy and momentum measurements respectively. And 
apart from measuring mass, which has no symmetry generator, it's just a 
label for the Casimir operator.

It's probably worthwhile here explaining this a little more for younger 
students (at risk of getting fact checked by geekier folks). The Casimir 
operator in special relativity is the momentum squared. But you see, the 
mass in $m=E/c^2$ is the relativistic mass, not the invariant rest mass. 
The Casimir invariant is supposed to be the invariant *rest mass*. This is 
the 4-momentum squared, or $p^\mu p_\mu$ in tensor notation. So we have,
$$
p^2 = -E^2 + \vec{p}^2 = m^2, \qquad (\text{in east coast signature}).
$$

We can then form a *natural* measurement model by physically thinking 
about applying the elementary particle multivector to the generators, 
which in this case are the differential multivectors.
Recall:
$$
\begin{align*}\text{momentum conserved} 
   &\rightarrow \gamma^k\partial_k \quad\text{is the symmetry generator} \\\\
\text{energy conserved} 
   &\rightarrow \gamma^0\partial_0 \quad\text{is the symmetry generator}
\end{align*}
$$
We need the spacetime basis vectors $\gamma^\mu = \gamma_\mu$ 
here because we are doing frame-free geometric algebra, not simple vector 
algebra. 

By the way, if you really insist on Hermitian operators then the 
momentum symmetry generator can be written,
$$
\gamma^0 \gamma^k\partial_k = \gamma_{0k} \partial_k
$$
which uses the STA mapping of $\gamma^0\gamma^k$ onto the Pauli algebra 
basis.  I know the unit imaginary in the Pauli--Dirac matrix mechanics 
maps to dextral (right) multiplcation by $I\sigma_3 = I \gamma_0\gamma_3$, 
but I'm at liberty to ignore these subtletites, because in QM all we care 
about in the end are the commutation relations.

The whole point of this being that the "elementary particle" makes no 
explicit appearance in the measurement theory, but instead what needs to 
appear is the transformation the elementary particle implicitly 
"tells us to do" to the generic symmetry generator in order to yield a 
measurement outcome, or eigenvalue.

For this we invert the usual interpretation of QM, and think of the 
particle field multivector, $\phi$, as acting on the symmetry generator. 
For momenta this is a rotation of the generator onto the intrinsic 
co-moving frame of the particle. But it needs to be done differently for 
each point in the whole of spacetime. Hence $\phi$ has to be a 
Multivector field. A field that has a STA multivector value at every 
point in spacetime. Physically asymptoting to the zero multivector at 
infinity. 

Hence,
$$
  \gamma^0\partial_0 \phi
$$
will be defined as the dextral (right-sided) action of the elementary 
scalar particle on the symmetry generator. But this is equivalent to 
thinking of the symmetry transform acting on the particle field! 
So it's almost just different semantics which way you think about it.

In geometric algebra the objects and the multivectors are in the same 
algebra. We distinguish transforms from objects only by a choice of 
semantics, but most often the natural semantics is clear, and in QM it 
turns out the wave-function is naturally the rotor part, so it, the 
wave-function, is the transformation instruction, not the Hermitian 
observable matrix operator!  This geometric algebra perspective almost 
inverts the orthodox semantics I think!

((Is this closely, if not exactly then as a cousin, related to 
the orthodox QM picture equivalence between Schrödinger and Heisenberg 
pictures?))

After all this waffle, which I think was useful, we write down a 
measurement form of the invariant relation for special relativity.
It makes no sense to write,
$$
(-E^2 + \vec{p}^2 )\phi = m^2 \phi
$$
although it'll be trivially true.  That's because we can factor 
out $\phi$. This does not describe a measurement process. Instead we 
need "some object" to act on the symmetry generators for each of the 
dynamical variables.

The only natural generators we can act on with $\phi$ are those 
associated with conservative of $E$, $\vec{p}$.  The Casimir invariant 
$m^2$ has the trivial generator, namely the number $1$.  So we have,
$$
-(\gamma^0\partial_0)^2 + (\gamma^k\partial_k)^2 = (1)m^2
$$
as a generic operator relationship.

However, now we imagine having a real live elementary scalar particle 
in the Lab, the elusive Higgs of course! We know in the geometric algebra 
we use a sandwich product to perform full rotations, but for a measurement 
constraint equation to solve for $\phi$ we do not have to do the whole sandwich 
product. (Post hoc rationalizing here, I'm probably not making total sense!) In 
any case, we have a measurement theory now, of the form:
$$
\begin{split}
(\Box^2 - m^2)\phi = 0.
\end{split}
$$

**Interpretation** The elementary particle is not present here, but the 
instruction the elementary particle would have us use is --- if it could 
talk to us, to tell us in advance what the measurement outcomes will be, 
then this communication, this information, is wrapped up in $\phi$. 
It is this *geometric* instruction $\phi$ which is acting dextrally on 
the symmetry generators for the conserved quantities, and packaged in this 
relation to ensure any measurement of energy plus momentum squared 
minus the mass squared will yield zero.

OK, that's three measurements I guess. 

Thus for any one measurement of one of the particle's variables we'd just 
write a simpler equation. What could it possibly be? I claim there is 
only one natural most parsimonious form, which is the eigen-equation form.
$$
\gamma^k\partial_k \phi = p_k \phi.
$$
for example. Or generically,
$$
\hat{A} \phi = a\phi
$$
for a dynamical variable $a$ that by spacetime symmetries has a Noether 
generator $\hat{A}$. But $\hat{A}$ is now strictly a spacetime algebra 
multivector of some kind.

I am not familiar with all the detailed Noether theory for more complicated 
quantities that are not typically conserved, but are only conserved under 
*additional constraints*. Like putting particles in boxes or traps and 
suchlike.  But I will assume for now the same basic functional equations can 
be written down in the spacetime algebra using just multivectors. Of course, 
perhaps the expressions get really gnarly.  I don't care. We are doing 
fundamental physics, not nasty stuff like hydrogen atoms and coupled simple 
harmonic oscillators and whatnot.

Besides all that nasty stuff, in T4G we are only seeking to justify 
quantum physics all over again, but cleanly, and with gravity from the start.

Once we retrieve quantum mechanics then all the multi-particle Hamiltonian 
stuff can be developed just as traditionally before from any textbook, or if 
you are clever from a spacetime algebra language too, as Lasenby & Doran do a 
bit of --- they cover magnetic dipole measurements, the hydrogen atom, and 
electron scattering, which I think is totally enough, way too much, for a 
fundamental physics theorist to handle. I certainly don't intend to review 
all that nasty stuff.

It is kind of funny to me that T4G is just "redoing QM right". It's 
radical conservatism. It's also anti-crackpot I think! Yet readers coming 
across T4G will probably be highly inclined at first to think I am a 
crackpot. (Have not had any feedback yet.)

Note: we have not done any quantum mechanics yet. It is still classical 
mechanics except for one thing: the T4G particle or geon postulate. We 
assume there are elementary particles with the Casimir invariants. 
Of course they are, for now, to be empirically determined.

I have not looked at the STA/T4G theory for the Standard Model yet, and 
even if I had, I'd have no clue how to derive masses from that stuff.


## Scalar Theory and Dirac Theory

Don't worry, I'm not going to "do Dirac Theory". I don't need to. It is 
a "done" subject.  All I'm doing here is to show you how to get Dirac's 
equation from the spacetime algebra, from classical physics.
We will only add one new thing, superposition. Or maybe entanglement 
structure too, but I might save that for the T4G theory pages where I allow 
myself slightly more technical depth.

Of course, you don't have to believe in superposition of solutions to the 
equations prima facie. You'd better empirically see if superpositions are 
necessary. OK. Turns out they are. (Two Slit experiment, electron diffraction 
experiments, etc.)  The classical mechanists might not be too nonplussed at 
this point, although they'd say it was weird superpositions have to be 
assumed, but are never directly observed (we only ever "see" single particles 
or geons). So at worst it is a headache for classical mechanics. Like... how?

<div style="text-align: center;">*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*</div>


But let's deal with that later. Or since I brought it up, let's give the 
quick & breezy account.  What we'll use from T4G to show superpsotions are 
unavoidable in general relativity will be a combination (in what mixture
of potion proprotions I cannot yet say) of,

1. fundmanetal particle ER bridge structure (non-locality dude, it *is* in 
two places, sorta', but literally),
2. fundmanetal particle ER bridge structure but seen by other 
fundamental particles (wormhole traversals).

Type **1** processes (structural superposition) can do a lot to account 
for absence of so-called exotic Feynman--Hibbs trajectories in 
Three Slit Experiments, we do not need all the Feynman--Hibs to get the 
basic interference patterns, we only need gravity--coupled 4-geons. 
GR is QM my dudes. (Or GR+CTCs.)

Type **1** processes (dynamical superposition) is more speculative by 
my accounts, it'd require 4-geons capable of traversing the ER-bridges 
of other ambient 4-geons. Whihc I regard as "not impossilbe".  The point 
is you can see this can give rise to superposiitons, but different in 
quality to Type **1.**.

### Scalar Theory

Taking a step back now, before we even admit superpositions and 
entanglement, we can have a Dirac equation with just the classical geon 
postulate. That's because in the geometric algebra we can factorize the 
Klein--Gordon equation, from simple difference of two squares:
$$
(\Box - m ) (\Box + m)\phi = 0.
$$
But we worked this out for a scalar field, which with some benefit of 
hindsight recognize as what orthodox QM calls a *scalar particle* or spin-$0$.

The linearized "wave equation" can be written,
$$
(\Box - m )\mathcal{F} = 0
$$
Note that this new scalar *quantum* field is not the Klein--Gordon field 
$\phi$. The field $\phi$ we take to solve the quadratic Klein--Gordon 
equation, whereas now we are asking for a "different object" that solves 
the linearized equation. 

I say it is a "quantum" field only because we have linearized Klein-Gordon 
which means in a sense the field is elementary.  There is no room for any 
complex internal dynamics for objects described by such simple linear 
field equations. The linear algebra measurement theory we have outlined 
thus applies. 

While a linear measurement theory can apply to more complex systems that are 
suitably redundant in degrees of freedom --- so that they can be simplified 
by a linear measurement theory --- all we are saying *here* is that it certainly 
applies to elementary 4-geons. 

A solution can then be written,
$$
\mathcal{F} = (\Box + m)\phi 
$$
We get a solution that transforms non-trivially under Lorentz rotations,
since $\Box\phi$ is a vector and $m\phi$ a scalar.

[Pezzaglia notes](http://www.clifford.org/wpezzag/talk/2001pomona/01pomona2.pdf) 
the same equation is satisfied by an irrotational 4-vector field, $A^\mu$, 
such that,
$$
\Box \wedge A = 0. 
$$
so the Klein--Gordon relation becomes,
$$
(\Box - m)(\Box + m) A = 0
$$
with solution,
$$
\mathcal{F} = m A + \Box \cdot A.
$$
where now $mA$ is the vector, and $\Box\cdot A$ a scalar (from the inner 
product).  I have not followed developments in the STA theory much further 
than this.

I feel it is a *proper* mathematical physicists role to do something with 
all this stuff!

However, what we would want now is a different type of solution comprised 
of scalar part plus a bivector part, becasue this would be a Dirac spinior.
We can of course do this.  But first we'll look at the simpler case of 
neutrinos.

### Neutrino Theory

The electron is supposed to be "spin-$\tfrac{1}{2}$". So the above field 
equation will not do. The electron should interact with photons, via a 
charge, $e$, as well as interact with magnetic fields even when stationary, 
via the empirically known electron magnetic dipole moment. So it has to have 
a circulation of the electric charge, so cannot truly be a point object.

However, the scalar theory is a pretty good start. And we already know 
fermions occur in classical Clifford GA.

Now, I know Lasenby & Doran derive a Dirac equation from 
[their Sec.8-3](https://www.cambridge.org/core/books/geometric-algebra-for-physicists/FB8D3ACB76AB3AB10BA7F27505925091)
other considerations, and not too inelegantly. But we can get fermions 
already from the linearized Klein--Gordon equation, so I thought that worth 
looking at too. 

We can get neutrinos most easily. Although this will not be 
Standard Model theory, it will be humbly just a wave equation for 
massless spins. Because I can't find this in Pezzaglai's work, I'm going 
to try the Frankenstein approach of picking from Hestenes, 
Lasenby & Doran (HLD) and trying to work in the east coast metric when 
I can. Wish me luck! I am bound to make horrible mistakes by building this 
beast.

The first step is to write the Cauchy--Riemann equations for the GA,
$$
\Box \Psi= 0.
$$ 
Recall this comes form the previously proven fact the bivectors in GA form 
a natural complex structure, we simply set $B=I$ for a particular plane 
defined by $I \leftarrow B = m \wedge n$, 
$$
\begin{gather*}
r = x\vec{m} + y \vec{n}, \\\\ 
z = x + I y = \vec{m} r, \\\\ 
M = u + I v , \\\\
\nabla M = (\partial_x u - \partial_y v) \vec{m} + (\partial_x v + \partial_y y)\vec{n}
\end{gather*}
$$
With $u$ and $v$ some functions of position in the $B$ plane.
So in the multivector derivative, *what it means*, following from the usual 
definitions _to be **analytic**_ is the condition that each of the brackets 
is identically zero, which are the Cauchy--Riemann equations, but in terms of 
the multivector derivative it also means precisely, 
$$
\nabla M = 0.
$$


The GA calculus is not easy to learn, there are all sorts of little touches
in multivector calculus that take years (apparently) to deeply ingrain in 
the brain. So I will not go through all the work from 
[Lasenby and Doran Sec.6-3](https://www.cambridge.org/core/books/geometric-algebra-for-physicists/FB8D3ACB76AB3AB10BA7F27505925091) 
I'll do the terrible thing and "assume as read" even though few will read!

We can note for the general multivector $M$, the derivative is defined,
$$
\nabla M = e^k \partial_k M.
$$
And for the spacetime algebra we have basis 
$e_k \rightarrow \gamma_k$ plus the timelike $\gamma_0^2 = -1$.

I mean... what can I say, we really should *not* have skipped the GA analysis. 
One huge power of Clifford geometric algebra is the extensions of analytic 
function theory (formerly complex analysis) to arbitrary higher dimensions! 
That is not to be sneezed at!  From the POV of a complex number theorists 
it should look a bit like some sort of god-like power. If I had the free 
time I'd certainly study this hard and get very deep expertise in GA analysis.
But life is short... 


In any case, solutions in STA to the generalized Cauchy--Reimann equation, 
$$
\Box \Psi = 0
$$
specifically for the multivector case *_are_* fermions. Since this is a 
massless equations these solutions are essentially measurement theory models 
for neutrinos (in our paradigm). This is provided we "turn off" the Higgs, 
which is an ok approximation for many low energy physics purposes. 

Solutions split into two pieces,
$$
\begin{align*}
\Psi &= \psi\tfrac{1}{2}(1 + \gamma_3) + \psi\tfrac{1}{2}(1-\gamma_3) \\\\
&= \psi_+ + \psi_-
\end{align*}
$$
These can be identified with right-handed and left-handed helicity 
eigenstates. Experimentally nature seems to only admit the left-handed 
solutions going forward in time.


### Dirac Theory

For the electron, we need the mass, also charge. So the neutrino equation 
factorization of Klein--Gordon will not do, nor will the simple linearized 
Klein--Gordon (which is scalar, so does not transform correctly under the 
Lorentz group). This is another way of saying we seek both,

* Two orthogonal spin states in any rotation basis (meaning in the 
GA/T4G framework, that the "electron instruction" (wavefunction or "state") 
is partially an instruction to rotate, so has a rotor part). 
* Also, thanks to Carl Anderson, we want particle and anti-particle solutions.

How to do this, pretending we were not Paul Dirac?

Lately what I would do is not bother! I've become a bit obsessed with the 
scattering amplitude and positive geometry description of "the world". 
But of course, *horses for courses* and all that, sometimes it will be far 
more efficient to solve a wave equation in the presence of a macroscopic field.
There will always be useful applications for Dirac Theory in other words. 
Namely whenever scattering amplitudes will not suffice, which means basically 
in macroscopic situations, like electrons in bulk or macroscopic 
electromagnetic fields and that sort of thing.

And yet, and yet... I find it hard to motivate wading through Dirac Theory 
now. So I will only do so for the benefit of T4G theory, which is to point 
out the classical foundations. Which is to say, I believe (I cannot truly know) 
the electron is a fundamental particle --- a discrete region of non-trivial 
spacetime topology, in an otherwise asymptotically flat spacetime.  It is not a 
mysterious "field". However we have to use a field theoretic description to 
account for the statistics of electrons correctly. 

Which means, as long as I can found and motivate the quantum theory of the 
electron, I am done, done you hear me! Orthodox QM can take over from there 
and get as geeky as it likes.

> TODO: Follow HLD or Pezzaglia? 
Did Dr Bill give us enough crumbs? 



## Further Work

Once I write this up, plus what I can for the Standard Model, plus 
finish the T4G video series, then absent any movement in MMT activism I 
think I can pray to die.  God willing I will be taken from this wretched 
Earth and not leave my girls too sad, they’ll have this humble little 
legacy.

((Yeah, the pain I alluded to in the 
[last post](../46_measures_and_manifolds) has not faded one bit, 
it'll never go away. That's realism speaking, not fatalism.))


<table style="border-collapse: collapse; border=0;">
    <colgroup>
       <col span="1" style="width: 25%;">
       <col span="1" style="width: 25%;">
       <col span="1" style="width: 25%;">
    </colgroup>
<tr style="border: 1px solid color:#0f0f0f;">
<td style="border: 1px solid color:#0f0f0f;"><a href="../47_lie_mania">Previous chapter</a></td>
<td style="border: 1px solid color:#0f0f0f; text-align:center;"><a href="../">Back to Blog</a></td>
<td style="border: 1px solid color:#0f0f0f; text-align:right;"><a href="../48_lie_fury">Next post</a></td>
</tr>
<tr style="border: 1px solid color:#0f0f0f;">
<td style="border: 1px solid color:#0f0f0f;"><a href="../47_lie_mania">Lie Mania</a></td>
<td style="border: 1px solid color:#0f0f0f; text-align:center;"><a href="../">TOC</a></td>
<td style="border: 1px solid color:#0f0f0f; text-align:right;"><a href="../48_lie_fury">Lie Fury</a></td>
</tr>
</table>

