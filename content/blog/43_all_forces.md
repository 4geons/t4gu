---
title: "All the Forces"
date: 2023-09-04
toc_depth: 3
draft: false
katex: true
toc: true
disableTitleSeparator : true
---

This might be out of pedagogical order, since I'm gong backwards today to 
before the Ampltuhedron ( or Positive Geometry) program, back to fundamentals.
That's ok, I'm blogging here, and it is in any case just preparatory note taking 
for the theory pages.

In fact today's blog *really is* just an outline sketch for a theory 
lecture, or set of lectures. You won't get any of this in any textbook${}^\ast$ 
circa 2023, so frickin' pay attention homies.

${}^\ast$Unless I wrote it, or someone copied T4GU into their 
textbook --- which they are free to do.


##  Wigner's Classification

The only thing I want to do differently to Weinberg (or the way 
Nima Arkani-Hamed does it) is to ge tthe irreducible representaitons for 
massles sand massive particles using Spacetime Algebra (STA) formalism, rather 
than matrix foralism. 

Why? Just because it is kinda' my thing" to show how quantum mechancis does 
not need matrix lagebra over $\mathbb{C}$. ALl quantummehancis can be done in 
real Lorentzian geometry of 4D spacetime. Or so I keep claiming. To 
follow-though we ultimately need to obtain a particle spetrum from STA. 
I keep pushing that away, but one day, one day... one day I'll either get it 
done or realise it cannot be done, and that will be a fine day.

In this blog let's just describe in plain English what we're going to do.


### Unitarity


**Square 1.** We realise QM is a measurement theory, so we need to transform 
from laboratory coordinates to a co-moving frame of a fundamental particle.

We immediately see we need to go back before Square-1 to Square-0, to note 
we are talking about fundamental particles: 
local regions of probably non-trivial spacetime topology. That *defines* 
"quantum mechanics" for me. It is a particle theory *and* a measurement theory.

What differs from classical Newtonian--Lagrangian--Hamiltonian mechanics 
you ask? It's the Measurement Theory. Standing on the shoulders of the 
proverbial giants, we've realised by talking to experimentalists and older 
grey haired theorists, that Nature prefers locality and particularity 
(synonyms almost). Energy gets shunted around in little discrete units, we 
call masses, or in the case of light, massless photons.

That is the Quantum Postulate.

Classical mechanics doesn't give a toss about measurement. The defining 
feature of CM, to me, is we "allow" ourselves (as a theoretical exercise) 
infinite measurement precision with zero nasty consequences. That's Newton 
and Lagrange. (Newton also had the particle postulate, but not the 
Measurement Theory, so he was only half-quantum mechanized).

**Square 0.** Quantum mechanics comes from this postulate plus the additional 
data that we have fundamental limits on how small a probe we can send into 
any system to observe its properties. This is called... general relativity.

General relativity tells us mass-energy cannot be concentrated into a region 
of too small a volume, up so some universal constants depending on 
measurement units, the probe energy is,
$$
\Delta E \sim \frac{1}{\Delta x}
$$
thus a vanishingly small region of space $\Delta x\rightarrow 0$ requires 
an infinite energy probe.  That's really just Fourier theory, raw 
mathematics, and a tiny bit of physics (energy squared plus momentum squared 
is mass squared, etc).

General relativity tells us before we get anywhere near Planck energies, a 
black hole will form, a region we cannot probe. Spacetime is not "doomed" 
here, it's just we can create a region we cannot probe. It is a 
"tough bikkies" situation, not a "there are no cookies" situation.

So we've already united QM and GR. At least conceptually. Mathematically 
is another story, so far unsolved.

**Square 2.** More old codgers like Blaise Pascal, probably Francis Bacon, 
and definitely Werner Heisenberg, Joh von Neumann and Eugene Wigner, taught 
us that we'd better darn well tack-on the idea we cannot lose information, 
which in a MEasurement Theory means any darn transformation we make in 
describing measurements had better "preserve probability".

This is, as Lenny Susskind has noted, so bleedin' fundamental that you 
are literally insane if you leave it out of quantum mechanics.  It is 
*not a quantum postulate*, it is a fundamental postulate of **_any and all 
possible physics_**. 

It is the Multiverse of Madness (or worse really) without unitarity.

Unitarity is the fancy name for conserving probability because it's 
mathematically definable. But the idea of it is simple. We cannot 
create "probability" out of vacuum --- which means we cannot get things 
that have higher than $p=1$. Or, in other words, we cannot generate events 
that super-duper have to happen with more likelihood than absolutely 
frickin certain.  That's the physicist way of describing an event with 
$p>1$.  The mathematicians would be more phlegmatic, like The Count on 
Sesame Street, and just say, `"You over-counted something dear chap. 
Count again! Muh-hah-ha-ha!"

It also means we cannot leak probability out of our universe, which means 
we cannot get events happening with probability $p<0$.

Or... have I got those cases the wrong way around? I can sometimes think 
losing probability is a $p>1$ and generating probability is a $p<0$. How? 
Because if an event with $p<0$ occurs, it "gained" probability from negative 
to some positive value. And visa versa for the $p>1$ event case (it leaked a 
bit, but dropping to $p=1$ is still a dead certainty --- like it'll rain 
in minute if I go outside without my umbrella). But really this is the 
situation of "normalization" --- we end up with a sensible probability, so 
the "gaining" or leaking" was fictional, an artefact of our lack of 
knowledge, we might say.

In any case, for sensible physics, in alignment with counting things that 
can occur correctly, 
$$
0 \le p \leq 1
$$
for all measurements.

How do you define a physical theory of measurements that preserves 
probability?

Well, a similar thing to normalization occurs in quantum mechanics. Because 
we cannot determine the state of a system with certainty, due to fundamentally 
the black hole constraint of GR, 


### GR was QM All Along

I've mentioned this already, but nerds might complain GR had no Planck 
constant. But I'd argue otherwise. GR indeed is a theory of a smooth 
continuum spacetime, when mathematically taught. But it should be taught as 
a physical theory, not a mathematical theory, in which case one has to 
"put in by hand" the particle postulate. 

The particle postulate is essentially the Newton--Einstein--Planck quantum 
postulate, which is empirical (at least today, maybe someone will derive 
the particle postulate in the future from some general principle, or 
anthropic principle?).  This gives us Planck's constant.

How?

I won't directly show how Planck's constant arises today, but it's not very 
mysterious. It is in fact part of the rest of this section on Wigner's 
classification. It is about measurement processes and symmetries of 
nature.

## Locality and Causality

I never really got started on Wigner. But it's the main part of what I was 
going to write today.

I wanted to give a little bit of an historical account, for students who 
already know a bit of quantum field theory (QFT).

The Hamilton--Lagrange action principle formalism in classical mechanics 
was morphed in order to "do quantum mechanics".  Some people claim this 
as necessary in order to untie QM and SR (Special Relativity). 
I do not think this is true. The idea was that naïve QM "predicted" 
faster than light signalling. That was thanks to Schrödinger's Equation, 
which while not "leaking probability" was able to leak probability outside 
of Minkowski's light-cones. Which is a big "no-no", since it violates the 
only decent raw concept of "causality" that science has ever managed to 
discover.

((Science *is* the philosophy of causality.  Without the 
Principle of Causality there is no science.))

The "fix" for Schrödinger was to introduce relativistic "field" variables. 
These were supposed to constrain physics to become "local". We than get the 
development of QFT (quantum field theory).  It's all local "waviness" of 
"field variables". These are fictional book-keeping variables, but an awful 
lot of physicists take them to be fundamental reality.

We do get local interactions in QFT, which seems to restore causality, 
since local interactions cannot get outside the light-cone.

However, it's a bit of a mirage, or sleight-of-hand, because physicists 
cannot avoid correlation functions (or propagators) form going outside the 
light cone, not even in relativistic field theory.

The usual textbook pa-lava to explain this away is to claim the correlation 
functions are not "physical". They are just "information-theoretical".

I've never honestly understood that argument. It's hand-waving of the highest 
order. 

What is "information theoretic" in a physical spacetime? It's got to be 
physics. We're not doing ghosts and goblins and voodoo here.  What explains 
the correlations? It can only be signalling of something outside of 
light-cones, which is violation of SR causality. So SR is wrong.

QFT is a massive fudge to pretend causality was saved.

That's my story anyway, most other physicists don't see anything wrong 
with QFT. So it's a minority story for sure, take it or leave it.

Luckily we know SR is wrong. Even luckier, what generalizes SR by all 
known accounts is general relativity, GR. And GR *does* permit signalling 
outside of light-cones. Namely via wormholes, or Einstein--Rosen bridge.

Sadly, no one has ever seen a spacetime wormhole, so we figure they do not 
exist. Thus the problem of causality violation in QM is not yet understood 
to be fully solved.

Happily, the known violations of causality (those correlation functions, or 
off-light cone propagators) occur in Nature only at the very small scale of 
elementary particle interactions.

In fact, as far as anyone can tell, they only occur for elementary 
particles, and noting else.

This raises the possibility, which is an hypothesis of T4G theory, that the 
ER wormholes do exist, and they are part of the structure of elementary 
particles (or you could also say spacetime vacuum structure too, at least 
until you know otherwise).

So GR to the rescue again! That old codger Einstein was more than a 
genius. People did not know at his funeral how big a genius he was. Most 
still don't unless they've read up to this sentence.

### Wigner's Story

Wigner's classification is a particle biased sort of thing. It is heavily 
mathematical, invoking the fundamental symmetries of spacetime (the 
Poincaré symmetries).

The initial idea was to find the basic building blocks of matter. 
The next idea was that whatever fundamental particle are, if we apply 
the Poincaré symmetry transformations (like translation, space-rotation, 
and spacetime-rotation (Lorentz rotation)) then the physics should not 
change. What that means is "The Physics" (or "Nature") does not give a 
fig what point of view we look at her from, she is going to evolve Her 
merry way along in time all the same.

((This is also why science works, slightly different to the Principle 
of Causality.  I am not sure of the term for it, but you could think of 
it in Descartian terms as the Principle of No Deviousness or No Cruelty, 
or Non-Absurdity --- 
Nature doesn't change the rules on us arbitrarily.  It is not the 
Parsimony Principle. The Principle of Parsimony (Occam's Razor) only works 
because of something in force like the Principle of No Cruelty.))

All right. So Wigner had this motivation. Although he does not provide 
a physicists exposition, he could have if he started with the idea of quantum 
mechanics as a Measurement Theory. This however is so darn close to how he 
sets out the particle classification that I'll just claim this is what he 
*could have been* thinking.  Why?

It is because the application of the Poincaré symmetry transformations 
has to be "upon" something, they have to act on some physical object.
Sounds like a measurement to me! But act on what?

Poor old Wigner had nothing. So he went to the quantum physics bank and 
borrowed Heisenberg and Schrödinger's wave-functions or matrix mechanics 
Hilbert space vectors. In particular the bank of Heisenberg was open for 
lending. They let Wigner borrow some vectors. The Insurance House of 
Dirac let Wigner take out some bra and ket policies.

All equipped to head out into the dangerous world of theory building, Wigner 
set to applying the Poincaré symmetry transforms to Heisenberg and Dirac's 
gadgets, giving the gadgets some unknown labels $\ket{p,s}$. The only label 
he had of any importance other than position in space was the object's 
momentum, $p$.

With a momentum the object (let's **_not_** call them particles, for 
good reason, since they are *not* particles) can undergo a Lorentz boost, 
according to special relativity. This changes the momentum label this 
object "carries".  But that's it. Nothing new to see here. These are 
spacetime rotations, all they do is literally "boost" a particle, but in 
conformance with Einstein, not Newton.

The gadget that applies the Lorentz rotation is the Lorentz rotor in 
geometric algebra, or the Lorentz transform matrix $\Lambda$ in matrix 
mechanics.

The question was, what about the other labels, $\ket{s}$ on these 
objects? What happens to them?

Although no academic journal will tell you what the mind of the scientist 
is thinking, it is nice to imagine the thought processes.  I can imagine 
Wigner was definitely thinking about space rotations. Which means the 
objects had to have labels that had something to do with angular momentum, 
or "spin", or simply orientation. That's why we are using the letter "$s$", 
we are not dumb you see, we looked at the back of the book for the answers.

It turns out orientation is the proper way to think about the extra Wigner 
labels.  Why?  Because this is all about **_symmetry_**.  It is *not* 
about dynamics!

But Wigner and Dirac and all the others were thinking about dynamics. They 
were over-thinking things. (In my story, but I could be crazy. I probably 
am.)

OK, I'll admit it is partly about dynamics. The thing is, the symmetry 
transformations only have any relevance to us if we make measurements. 
I just explained using some poetically flavoured words above that 
Mother Nature does not care for us otherwise, although she is not malicious.

The rest of Wigner's story is for another day in the 
[Theory section](/t4gu/theory/2_wigner/). I have not written it up yet 
though, so there's nothing much on Wigner there yet, just ore philosophy 
ramblings.

What I'll do is just skip to the end. Wigner found that the object he borrowed 
from Heisenberg and Dirac had some interesting labels, these characterised 
completely the effect of the Poincaré symmetry transformations on all such 
types of object, slightly different for those with mass and those without mass. 

Due to Einstein again, the 4-momentum squared is the mass squared, so 
massless have $p^2 = 0$. They carry space momentum of course, it's the 
Lorentzian combination of the energy and space-momentum components that 
squares to zero here:
$$
-p_0^2 + \vec{p}^2 = -m^2 
$$
This is a conserved quantity, which is associated with the smaller 
Poincaré symmetry group of just space translations.

The Lorentz rotations cannot change this relation, so we do not learn anything 
new from them. But  we can use a Lorentz transform to send the objects to a 
new reference frame, and then we can apply the space rotations. This is the 
interesting step.

To solve the riddle of Nature here (to classify the elementary tokens from 
the banks of Heisenberg and Dirac, physical currency, you might say)
Wigner used the "no leaking probability" idea, which gets translated into 
Heisenberg and Dirac gadgets into something called Unitarity.

Unitary transformations are *the* transforms that preserve probability. 
Or, if it sounds better, which it does to my ear, they conserve information.

This is just the right sort of restriction that allowed Wigner to work out 
the extra $\ket{s}$ labels for Heisenberg and Dirac's object. (Double entry 
book-keeping, no accounting fraud!)

The results are called spin labels.

Massless case: the labels are for generators of the group of 2D rotations, 
or SO(2).  Or for explicit unitarity $U(1)$.

Massive case: the labels are for generators of the group of 3D rotations, 
or SO(3).  Or for explicit unitarity $SU(2)$.

Back in the Hilbert Space, the feudal era government of quantum mechanics, 
this group classification gets integer (vector) or half-integer (spinor) 
labels, under this scheme.

We call the half-integer gadgets "fermions" and the integer labelled gadgets 
"bosons". But these labels are misleading. They actually just characterise 
the symmetry transforms, which came from classical Poincaré symmetry, which 
come from classical relativistic spacetime.

There is no meaning here to "boson" and fermion" that can be associated 
with an elementary particle. But Wigner seemed not to comprehend.
But he paid back his loan to the Bank of Heisenberg and washed his hands 
of the debt. He'd unwittingly placed entire generations of physicists 
into intellectual poverty. Although that stretches the metaphor too far. 
Wigner cannot be blamed for the lack of imagination of later physicists.

What I think happens a lot, too much, is mathematics takes on an overwhelming 
force in the mind, and blocks good old fashioned thinking about ontology. 


## On to the particles

What were the objects and gadgets Wigner was truly dealing with?

This is where I go a bit rogue and give you my story that no one else I 
know is giving. So I will use the language of speculation and hedging, and 
I hope this does not put you off reading.

What I think is happening is that when we think of QM as a Measurement 
Theory we should think of the measurement apparatus.  I believe Heisenberg 
almost got this, but never really pushed hard enough in this direction. 

The measurement apparatus has nothing elementary to it but the same 
spacetime variables: positions, directions, masses, energy.

Except for most experiments the mass-energy of the measuring instruments is 
not of interest --- it is whatever it needs to be to make the measurement. 
Could be anything, except a black hole. We don't care.

But the apparatus still has an orientation, and position. 

When we then take out the instrument to observe some elementary particles, 
we have to damn well know the relative orientation and motions --- between 
instrument and particle.

But we do not know these for the particle.

**_Aha!_** but practically *all measurements we ever make* are fundamentally 
measurements of the mass, orientations or positions (up to time translations, 
so also velocity) of the elementary particles. There is nothing else to 
measure, literally. 

But take note!  All those possible observables are exactly those 
characterized by Wigner.
It could not have been any other way. He was doing quantum mechanics, which 
is a *measurement theory*.  It is not a theory of ontology.

In other words, the wave-functions, bra and ket, gadgets Wigner borrowed 
from Heisenberg, Schrödinger and Dirac were, and still are, instructions for 
what we need to do to our laboratory coordinates and orientations and whatnot, 
to map onto the elementary particles we are measuring.

The bra and ket vectors or spinors, are not the particles in other words. They 
are instructions for measurement.

It is no wonder in the proper spacetime algebra, this is exactly what we see. 
There is an isomorphic mapping from the Dirac and Pauli spinors onto 
multivectors of the spacetime algebra. These multivectors are geometric 
transformation instructions. They are not elementary particles.


## Where are the particles?

The particles "disappear" from a measurement theory, since the particles 
can only deposit energy and click instrument counters, and so forth. 
Thereby revealing position, velocity, momentum, mass, orientation.

In more advanced quantum theory there are new labels we call "flavour" and 
"color", but these too are geometric or topological observables, at least in 
our T4G picture. (As I keep warning, T4G is probably wrong, but it is still 
a great way to think about quantum physics, better than String theory I think, 
more parsimonious.)

Wigner was not completely crazy though. We can recover the elementary 
particles from his work.

How?

Experimental observation, how else?

If we probe the structure of spacetime, make measurements, we observe 
discrete masses, as well as massless particles that can only deposit pure 
energy.

Turns out these measurements conform to the Poincaré symmetries. 
That means, without doing any more work or thinking, Wigner's classification 
perfectly describes these objects.

But these experimental objects are not the wave-function, they are not the 
bra and ket vectors and spinors!

The relationship is that we find we have to use particular forms of bra and 
ket vectors and spinors to translate the physical variables (observables) 
defined by our laboratory or instrument reference frame, onto the state of 
the elementary particle.  That is the relation. We could not expect more 
from a measurement theory, which is not an ontological theory.

Or... if you prefer, QM really *is* an ontological theory, but the ontology 
is just Einstein's spacetime, plus some weird topological or stringy 
structure that has Poincaré invariance. But what does that mean?


### Poincaré Invariance

I think for younger students this is philosophically important to understand.
 
"Having Poincaré invariance" means these "physical objects" the particles now, 
not the "mathematical objects" called bra and ket spinors, the 
*physcial objects* do not give a fig about how we orient our 
measurement instrument.

They are Poincaré invariant. They do not depend upon our observational point 
of view.


A more philosophical, but I think a sort of "deep" way to say this, is,
> The elementary particles "have" Poincaré invariance precisely because 
they have no subjective properties or non-physical structure.

If an electron had a Mind, it could "disobey" Poincaré invariance... is 
another nice way to put it.

### Aside on Free Will

This kind of begs the question: if we human beings, and mice, and dolphins, 
and bonobos, are made out of electrons and quarks, glued by photons, Higgs', 
and gluons, then how the heck can we have a "disobedient" mind and 
"free will"?

That's a whole other topic I deal with in philosophy blogs and articles, 
not here. Short answer (for me, since it's an opinion, not science) is, 
**(a)** we do exercise a mind and a sort of very interestingly constrained 
free will (compatible in our physical composition with Poincaré invariance 
of course), and so **(b)** we cannot be entirely just a collection of atoms.

This reverse begs the question: then why can't electrons and quarks also 
have this sort of variety of free will? The answer is just that they are 
*completely* described by the symmetries of spacetime. There is no degree 
of freedom for them, they cannot disobey.

However, vast collections of electrons and quarks have collective dynamics, 
and there is one, and I think only one, way vast collections can gain 
"freedom" from the tyranny of the laws of physics.  Which is via the boundary 
of spacetime, where there is no time evolution, and so physics is not 
described by wave-equations and whatnot, it is described (from our internal bulk 
perspective) by pure information, namely the boundary conditions. 

And we have no idea whatsoever where that information comes from, and we can 
never know *by any measurement methods*. Especially if the boundaries are at 
eternal past and future infinity and we cannot scatter stuff off them.

We *can know* however. How? Only by the information that is there on the 
boundaries. I said Mother Nature was not Cruel, but she is still 
mysterious.


## The QFT Story

I titled this article "All the Forces" so now I want to get to this.
Let's start with another huge popular misconception.  Most people think 
quantum field theory (QFT) is *the* theory of fundamental physics (either 
in particle form or stringy form).  This is demonstrably false.

The main problem with QFT is that it is unconstrained, there are far too 
many possible theories, or Lagrangians, that make consistent possible 
physics. So how can we pick the right one for our universe?

A dopey philosopher might stupidly say this begs a question: maybe QFT 
is not fundamental, if it is over-describing reality, maybe you need more 
constraints. Heck... maybe you do not want to use a QFT?

I guess I am one of the stupid ones.  But I'll tell you one thing in 
physics that still baffles me just a little bit, which is the Higgs 
mechanism. The Higgs, seems to me, to be one last hold-out for an honest 
field theorist. But one can still Feynman diagram the Higgs theory, so it is 
also not necessarily a QFT.

This is the thing: you can Feynman diagram any quantum theory that has 
a sum over histories. It does not have to be a field theory though. The QFT 
theories pose a Lagrangian, and the Feynman Diagramista uses the Lagrangian 
to write down the diagram expansions, and then soaks up years of life trying 
to compute the amplitudes. But the diagrams are local processes, they have 
nothing to do with correlation functions. We get correlators out of the 
diagrams, we do not put them in. 

However, the QFT defender can come back and just say, "We just need to find 
the One Lagrangian for our universe!" The problem I have with that is there is 
still gauge redundancy in any QFT. The QFT defender will point to the elegance of 
gauge theory. But then I side with Nima Arkani-Hamed in claiming the gauge 
principle is ugly. o if the argument is over aesthetics, I'll reject QFT. 
Of course, if a theory "just works" it has a claim to being fundamental, 
and in the end, we are probably discovering different ways to describe 
mathematically the same physics. How do you really prove a field theory is 
not equivalent to a particle theory anyhow? I would just say what the heck is 
your gauge transform doing there? It has no physical meaning. So you are 
over-describing the world.

On the other hand, I am still a field theorist, because it claim 
general relativity is valid, probably down to the Planck scale and 
lower! How? By admitting non-trivial topology. As in String Theory, we want 
to smudge or fuzz away singularities --- not rhetorically or with trickery, 
but literally! So I am still hoping the Higgs is part of T4G structure.

There is a nasty grainy lecture by a dude 
[Clifford Cheung](https://www.youtube.com/watch?v=Ks6nuuFxRqM) which in 
a relatively simple fashion explains a little bit about the nastiness of 
the gauge redundancies in QFT. Nima Arkani-Hamed also often talks about 
this. It is one of the appeals of the Amplituhedron/Positive geometry 
program that they can do all of particle physics without QFT.

Some of the Clusterhedron physics people still talk as if they're doing 
ground work for QFT, but I think that's a hold-over, a prejudice. If they 
are doing anything traditional, it is string theory, which is a particle-like 
theory, very similar in spirit to T4G. If you can get a wormhole tunnel in 
String Theory then you can also get non-local correlators, which are, to my 
mind, the only valid reason for entertaining QFTS.

A decade ago I would not have said this, because the Amplituhedron/Positive 
Geometry program was not mature enough to over-throw QFT.

Today, Amplituhedron/Positive Geometry and on-shell scattering theory does, 
to my satisfaction, make QFT passé and redundant. (Not entirely, because 
Clusterhedra are not so advanced yet that computer software for them is 
up to par with the CERN and Fermilab and SLAC Feynman Diagramistas)

Not just because of gauge redundancies, but also because of the parsimony. 
That is to say, I do not consider it a nice accident that Clusterhedra/Positive 
Geometry simplifies Feynman diagram computations. I think it is a deep hint that 
the QFT Lagrangians the traditional Feynman diagram calculations employ are simply 
not fundamental they are theoretical crud. 

### The Ward Identities

I got this next bit from Nima. Having long ago most interest in QFT, it was 
quite a nice thing to hear Nima give a lecture on scattering amplitudes where 
he goes through Wigner's classification, which we covered above, and then 
proceeds to point out a gauge redundancy in the QFT version of computing 
scattering amplitudes from Lagrangians.

He says the Lagrangian forces us to insert unphysical polarization vectors. 
These are needed to put the outgoing asymptotic (scattered) moment on-shell, 
as one must for real particles). The polarization vectors are needed to give 
the bare Feynman multi-tensor the correct Lorentz indices. For massless 
particles this is vital. (One can get away without polarization vectors for 
massive particles because the on-shell mass conditions constrains the output 
from the Feynman diagrams yielding proper Lorentz indices --- that's 
tensorspeak for Poincaré invariance.)

The gauge freedom in polarization vectors is written as an equivalence 
class of polariaztion vectors $\varepsilon^\mu$,
$$
\\{ \varepsilon^\mu | \varepsilon^\mu \sim \varepsilon^\mu + \alpha p^\mu\\}
$$
for on-shell momenta $p^\mu$.

For the massless scattering, in the QFT picture, the requirement is that 
the gauge freedom in the polarization vectors has to vanish when the 
scattering multi-tensor is contracted with the polarization vectors.
Due to the gauge freedom this is a highly non-trivial condition to impose. 
You cannot just write down any old Lagrangian that will end up having 
scattering amplitudes that are gauge invariant.

Heuristically, if $A^{\mu \mu_1 \ldots \mu_n}$ is the Feynman diagram 
multi-tensor, then the contraction,
$$
\varepsilon_\mu A^{\mu \mu_1 \ldots \mu_n}
$$
for every single on-shell particle $k$, must not depend on the 
$\alpha p^\mu_k$ gauge freedom.  That is a powerful constraint, and seems 
impossible to enforce, but there are "miraculous" identities, the 
Ward Identities,
$$
p_\mu A^{ \mu \mu_1 \ldots \mu_n} = 0.
$$
Once these relations are solved, the theory is Lorentz invariant, and you 
have a proper QFT.

The few Lagrangians that do satisfy these on-shell Ward Identities are very 
special theories, they are "All the Forces":

* Yang-Mills (Electroweak and QCD)
* Gravity

and there are no others!  The **_amazing thing_** is we can reach this 
same conclusion in a far, far simpler way using just the idea of on-shell 
particles and basic scattering theory, locality, unitarity and causality. 
No QFT. We can get "all the forces" from basic particle scattering concepts 
with no mention of fields. That's beautiful.

It happens to also be a unified *field* theory! How come? Because it is still 
a spacetime theory, and spacetime is a field. But now revealed as the only 
field we need. Einstein really had too many good ideas for his own good.

**Aha!** says the Amplituhedronista, Nature "wants to be" on-shell. 
Let's try building an entire scattering theory using just on-shell particles! 
Can we do it?

If the answer is "yes" then I think we just do not need QFT.

This is the Positive Geometry of Scattering Amplitudes (PGSA) program that 
Nima Arkani-Hamed is a leading proponent of, although I am not sure he is 
completely weaned off QFT just yet.


## Positive Geometry of Scattering Amplitudes

This approach of Nima and colleagues is very appealing for T4G theorists, 
because it puts elementary particles, the "quanta", back front and centre 
into fundamental theoretical physics.

Is there any role left for QFT?

I think a qualified "yes". Firstly, field theory ideas seem useful in other 
branches of physics. Why is that? It's because in condensed matter physics 
and elsewhere, we really do not have elementary particles, and systems can 
behave on large scales more like they are bunches of modes of some fictional 
field. Even the humble old hydrogen atom can be construed as such a system.
You will not get far describing an entire hydrogen atom using scattering 
amplitudes for the nucleons and orbital electrons!

You go back to Schrödinger.

What about the annoying little residual QFT left over in PGSA theory? 
Well here one of the issues is that PGSA does not yet have a clear 
independence from orthodox QM. In particular, the "get going" the 
pedagogical approach I have seen is typically to start with on-shell 
momenta, and massless particles, 



<table style="border-collapse: collapse; border=0;">
    <colgroup>
       <col span="1" style="width: 25%;">
       <col span="1" style="width: 35%;">
       <col span="1" style="width: 25%;">
    </colgroup>
<tr style="border: 1px solid color:#0f0f0f;">
<td style="border: 1px solid color:#0f0f0f;"><a href="../42_bulk_forms">Previous chapter</a></td>
<td style="border: 1px solid color:#0f0f0f; text-align:center;"><a href="../">Back to Blog</a></td>
<td style="border: 1px solid color:#0f0f0f; text-align:right;"><a href="../44_spinhelicity">Next post</a></td>
</tr>
<tr style="border: 1px solid color:#0f0f0f;">
<td style="border: 1px solid color:#0f0f0f;"><a href="../42_bulk_forms">Bulk Forms</a></td>
<td style="border: 1px solid color:#0f0f0f; text-align:center;"><a href="../">TOC</a></td>
<td style="border: 1px solid color:#0f0f0f; text-align:right;"><a href="../44_spinhelicity">Spin Helicity</a></td>
</tr>
</table>

