---
title: "Charge without Field"
description: ""
date: 2023-03-01
lastmod: 2023-03-01
cover: ""
coverAlt: ""
toc: true
tags: []
katex: true
---

Following on from the previous loosey-goosey chapter on mass and length 
relations, I want to continue with the theme in the spirit of John Archilbald 
Wheeler, which is to now consider how *charge without charge* can be motivated. 
Or specifically how can we get charge from topology?

To do this I want to reboot Wheeler. 


## Caveats

Reading level: undergrad or advanced high school. Professionals should go 
elsewhere.

All of this is preliminary to the T4GU theory pages, which I have not yet fleshed 
out. This current article is all philosophical, and serves just for my scratchpad 
thinking space to get some ideas written down. A lot of this could be complete 
baloney. But hey, that's philosophy. To me philosophy is search for truth, not 
finding truth. If you find truth then it is either science or religion, not pure 
philosophy.

OK, so technically philosophy is love of wisdom, so that too. But the love 
doesn't get you the kisses.


## Rebooting Wheeler

His models considered wormholes through which electromagnetic field lines threaded. 
Since a charge is a source or sink of the EM field, the wormhole ends act like an 
electric charge.

The same could be generalized for any field source, so any charge, chromodynamic or 
otherwise.

My reboot is going to be different. I want to stick to photons and electrons (or the 
appropriate generalizations to the weak and strong charges --- but to keep things 
simple I'll stick to electrodynamics). Perhaps to egregiously simplify (but I think 
not) I will also assume our charges are not currently in superposition, so we will 
just treat them semi-classically. (Remember, for T4G the non-trivial spacetime 
topology is *all* of quantum  mechanics, so this treatment is really still quantum, 
since we are talking about the particulate forms of matter, the topological geons).

Thus I need to eliminate the field lines. I don't want them as the crutch. I only need 
photons. I know to do any useful scattering computations I will need to revert to the 
field theory, but as I've [mentioned elsewhere](/t4gu/blog/1_why_fields), in T4G 
theory we consider that to be a computational convenience, not real ontology.


### The Photons

The "carriers" of the fields are the bosons. So a photon weaving through a spacetime 
wormhole gives us charge without charge. The electric charge being the wormhole ends.

However, this is highly conceptual. You cannot get charge quantization or the other 
U(1) symmetry required with this model. The Kaluza--Klein idea works better. So we 
need a bit more for a decent T4G theory. Something that mimics the 5th dimension of the 
Kaluza--Klein geometrodynamics model.

Why?

Because we already know Kaluza--Klein is only a toy model, because it does not work 
for the other charges. It gives us Maxwell's equations and gravity, but not the 
other gauge forces.

### The Photon Algebra

Here I want to use geometric spacetime algebra ideas. So refer to the first few 
[theory pages](/t4gu/theory/3_geometric_algebra).

A U(1) field (a physical field with a U(1) symmetry) is "complex." Normally most 
physicists just think that means complex numbers mystically describe 
electromagnetism, in the gauge particle framework. However, STA says otherwise. It 
is non-mystical. Because *what is a complex number in STA?*

It is an element of the even-subalgebra. Usually the even subalgebra of the 
$C\ell^{3,1}$ Pauli algebra. The elements of the even-subalgebra are the rotors. 
Or in plainer English, a complex number is an instruction to rotate and dilate.
Or encodes an instruction to rotate. The actual rotation is a double-sided GA 
multiplication, 
thus to rotate a multivector $M$ by a spinor $\psi$,
$$
M^\prime \longrightarrow \psi M \tilde{\psi}.
$$
Spinors are not pure rotations of course, they can dilate and have a statistical 
factor, which is related to "quantum statistics" (superposition effects) but I am 
ignoring those factors for now.

It seems to me the coupling to photons is more directly related to the rotor part 
of $\psi$. (I could be wrong, but that's what these notes are exploring.)

So when a charged particle couples to photons, there is a massive 4-geon 
(the spinor) interacting with a vector boson. How to think about this geometrically?

If we just dumbly look at some equations for a second, the way the coupling works in 
Dirac Theory is that the spinor acts on the four-vector potential, in the term,
$$
 -\gamma^\mu e A_\mu \psi
$$
it goes on the energy--momentum side, which then balances the mass side 
$m\psi\gamma_0$.

When we go to compute an amplitude we take an inner product, which means performing 
the rotation-dilation instruction. This acts (algebraically) on the field $A_\mu$ and 
consequently updates the spinor momentum and position variables. That's supposing we 
imagine turning $A_\mu$ on then off. Or some other experiment to prod the electron 
around.

((The inner product is of course not a physical process. It is computing an amplitude 
for a transition over a spacetime cobordism from an initial state to a final state. 
The "state" ($\psi$) is always the instruction we need to algebraically rotate our 
reference frame onto that of the 4-geon, in order to derive measurement observables 
(our measurement apparatus has some orientation, et cetera).))

The other equivalent way to look at it is the vector potential $A_\mu$ regulates 
the Dirac field, so that the electron still "thinks" (total anthropomorphism ok) it 
is travelling undisturbed in flat space, but the $A_\mu$ field made space very 
not-flat. Maybe even holey (photons have wormhole structure too?). Same result 
though, the descriptor $\psi$ has to be updated Hamiltonian-like all over spacetime.

((This last view should remind you of how gravity works: a mass warps spacetime, but 
another mass just think's it is still free-falling. It is! Just with now possibly 
brick walls in the way.))

<div style="text-align: center;"> *&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  *</div>

I want to do a quick aside to get rid of the anthropomorphism. It's hard, because 
this is for philosophers. Normal people know that electrons think they have to get jogging in an electric field, no problem. Obey the coach.

It is fairly natural to employ the anthropomorphism for gravity though. Why? It is 
because gravity is not really a force. (Thank Sabina Hossenfelder for giving me that 
one.) So a mass in a gravity field is always in free-fall. You only feel "heavy" or 
get strung out into spaghetti if you either hit a brick wall (electromagnetic field) 
or go too close to a black hole (the singularity, not just the horizon).


((‘Hitting a brick wall’ here is the same as ‘putting on a jet pack’ &c.))

In the case of the black hole, any atom of you still is in free-fall, but it is 
electromagnetically attached to other atoms, and that's the problem. If the gravity 
field has an extremely large gradient, then there is a re-gauging of clocks. So atoms 
closer to the black hole have slower clocks. But relativistically they must then be 
speeding faster through space (an acceleration in other words, but with respect to 
the atom further away, maybe a millimetre away now, since we are close to the 
singularity). Hence spaghettification.

That should explain it all.

Although, incidentally, all the other "forces" are not forces either. There are no 
Newtonian angels moving things around according ot the inverse square laws and 
whatnot. It is all just geometry. How so for the gauge bosons? Well, the gauge field 
theory tells you that you can define Lagrangians (so least action principles) that 
replace ordinary spacetime derivatives (which are coordinate dependent, so not 
"real") with covariant derivatives (coordinate independent). This is the way gauge 
forces have the same *spirit* as gravity. All the objects subject to the field 
interactions are really all in free-fall motion, but globally gauged, so that locally 
they feel no force, but they constantly then may ‘run into brick walls’ 
(so-to-speak).

Actually, I'm not sure about the language here. Are the motions globally gauged or 
locally gauged? It doesn't really matter how you talk in such loose terms, the 
point is that if your Lagrangian contains the correct covariant derivatives then 
locally it looks like free-fall motion. Whereas globally it looks like smacking into 
proverbial brick-walls (anything but free fall).

Why are they called "gauge forces"? Susskind says he knows the historical origin of 
the term, you could look it up, but the essential idea is the same that comes from 
plumbing fluid pipes. You care about pressure differences, not the ambient pressure. 
So the fluid dynamicist is always talking about gauge pressure, with some standard 
pressure as the gauge fix. Same with currencies in a fiat currency floating exchange 
rate system. (MMT types know about this, all other economists tend to get it all 
wrong by focusing on absolute prices rather than gauges, or relative prices.)

Don't get me wrong though. It is still a mystery *why* our spacetime has such effects. 
It's not natural I say! The natural thing for a *space* to "do" platonically is to do 
absolutely nothing except wait around for a mathematician to theorize it.

(Circular logic, I know, since the mathematician requires spacetime to themselves 
exist and find some paper and crayon (the rocks and scissors can then be theorized).)

Another way of saying this (and this also somewhat excuses a few anthropomorphisms) is 
that physicists never have any idea about causation. We will never know the cause of 
things, since that is not a scientific question. We just try to discover laws, that 
things (mysteriously) "obey". Well, you see... that "obey" is a total 
anthropomorphism. All talk about causation is!

This is why particle physicists can get away with saying, "The quarks know about the 
Weak force." And other nonsense. The quarks may as well "know" (panpsychism). I mean, 
they don't!  What... did you just think they did? LOL. 

On the other hand, there is a smidgeon of proto-panpsychism lurking here. Just not 
the conscious variety. Panpsychism is the wrong word though. I think the appropriate 
word is something like "*Logos*". (Not the brand marketing word, the Greek concept --- 
λόγος. ) But I'm not sure. But you know what I mean: 
"*Let there be corpuscles of light!*" (Said Newton, and there was.) It is through the 
(metaphysical, not literal) Word of The Absolute that things come into being obeying 
the laws. This is utterly incomprehensible to science, and always will be. Deal with 
it.  Or better, anthropomorphise it a tad, if it helps you sleep.


<div style="text-align: center;"> *&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  *</div>


### The complex scalars

Getting back to the Higgs field. It is a scalar field (for particle mesmorists) but 
is it complex-number valued. To the geon theorist this means it is a geometrical 
object. The "complex plane" it "lives in" is not physical space, but is directly 
related to spacetime, and geometric algebra shows you how this is the case.

In spacetime algebra (STA) there are no *internal spaces* other than those we 
abstract from the spacetime symmetries (and maybe hidden Calibi--Yau/Kaluza--Klein 
dimensions). T4G, by the way, does not eschew Calibi--Yau dimensions, it's just we 
seek instead to do as much as we can without them!)

The view of STA is that "the complex numbers are not imaginary" they are instructions 
for *real* rotations or boosts, or dilations. The problem I get with the Higgs field 
or any "scalar field theory" (meaning complex valued, not real valued ) is that I do 
not know what the root of $-1$ represents geometrically with those orthodox theories, 
since they treat all the geometric roots of $-1$ the same, with an $i$. So they lose 
all geometric expressive power. 

Susskind tries to explain this to his TTM students, but he sticks to the "abstract 
space" story.  However, the $\bra{\phi}$ acts on the other operators, like position 
and momentum, so is acting *in* spacetime, in the spacetime algebra, it's just most 
students don't think of it this way.  In the Hilbert space picture the $\bra{\phi}$ 
is abstract. It is in fact a matrix operator, which happens to be $1$-dimensional.

In the STA or multivector algebra, the $\bra{\phi}$ is purely spacetime geometry, 
it's a multivector of some sort. If you wrote down the Higgs-like field theory 
correctly I dare say you'd find what the field value is doing. But in the STA a 
"complex structure" like $\bra{\phi}$ is some sort of rotation instruction if 
the $i$ is really a bivector.  If the $i$ is the pseudoscalar then I'm not sure what 
$\bra{\phi}$ is, but I'm sure Clifford algebra experts would, like Bill Pezzaglia. It 
is probably a duality transform from bivectors to trivectors. So what does that mean? 
I am not sure. 

But you can get a rough idea without me telling you.

Remember, *the field acts on the operators*, is the best way around to think about 
it, not the converse (although who cares?).  The *field acts on the operators*, way 
of saying it to my mind emphasises the "act of a measurement". That's why I prefer 
it. But, you know, the measurement instrument can act on the geons. That's the other 
way. It's just awkward in that case, because wtf is the "measurement instrument"? You 
have no idea how to model your instrument.

Instead you abstract measurement apparati, and deal with just the real observables 
that **_any generic instrument_** could be concocted up to "measure."  That's how to 
"do quantum mechanics."


### Polarization

It is a (not so well?) known ugliness in gauge field theory that the spin 
polarizations need some godawful "polarization vector" stuck into the field 
equations.  I think this is pretty obviously because the gauge theory formalism is 
using the kindergarten vector algebra.

The phases $e^{i\alpha}$ for the U(1) do not "know" (haha!) what friggin plane of 
space they're supposed to be performing a rotation within. Written in the spacetime 
algebra (Clifford--Hestenes) we have no such problemo. 

Incidentally, the Amplituhedron program of Nima Arkani-Hamed and colleagues also 
has no polarization vector ugliness. That's because they are using scattering $S$-
matrix formalism (the Mandelstam variables and whatnot), so the spin directions 
and all that are manifest. It is not a field theory *per se*. It is not "gauged".


### Symmetry in Time versus Space

This is going to get even more poetic. So probably wrong. But... whatever. I can 
start with very non-poetic stuff from Emily Noether.

Invariance under time translation is energy conservation. Invariance under space 
translation/rotation is momentum/angular-momentum conservation.

OK. So the time stuff relates to energy. The space relates to momentum and rest 
mass. 

But it's all a unity, spacetime, and the energy-momentum spacetime vector is the 
overall concern. It's the space-time split that gives us the distinctions. The 
Lorentzian manifold structure of reality makes it worth a distinction 
(light cone causal structure).

If you are massless you travel purely through space, zero through time (on your 
local clock, which now is frozen, so not a clock).


```
TODO:
had some half-baked thoughts on this, but they slipped my mind.
Will come back to this later, I hope.
```


### Some Speculations

We seek, I think, to work out what the algebra means in terms of the topology and 
geometry. One source of clues are the Feynman diagrams. But they use a particle 
picture, not a field picture, and it is tricky to translate between pictures.

The way the world works is that there are some other charges somewhere else 
producing the potential $A_\mu$. But we ignore them, because only the photons here 
are intermediating.

OK, but remember the gauge symmetry, a U(1), or in the field equations a unit complex 
number factor:
$$
e^{i\alpha}
$$
where $\alpha$ is the "symmetry group parameter." What is it doing? The QED folks have 
no idea (carrying off a photon?) But the geometric algebra nerd is thinking, "It is 
parametrising a rotation".

If there is an interaction with the EM field, then Feynman says a photon is emitted 
or absorbed (or billions in succession). But each disturbance in the field equations 
means a regauging of the complex-valued fields by a simple factor $e^{i\alpha}$. 

Now, the gauge particle theorist will say the same thing, but to the gauge dude the 
"rotation" is mystical, it occurs within some mysterious "inner U(1) space" of the 
imagination. Or a fibre bundle space attached to spacetime, is another way they put 
it. They would say it is not a physical spacetime rotation.

The geometer knows better. The particle the gauge field (photon) acts upon is 
represented by a spinor (rotation plus dilation instruction). The spinor tells us 
how to orient our measurement apparatus to conform with the rest frame of the
particle (electron, or other charge 4-geon).

The gauge interaction is thus telling us the electron's instruction set has been 
perturbed. The Dirac Equation can tell us by how much, up to statistical factors.
Using the data $A_\mu$ of course.

So the electron has either been boosted by a Lorentz, or rotated by a rotor, or 
flipped (time-reflected) into an antiparticle, or whatever. Other than topology 
changing interactions which change particle flavour or color, these are all that 
can happen to an electron. 

So that is all there is to it, algebraically. We can act dumb and blind and then 
just get on with field theory or QED because we're never going to be able to keep 
track of all the electron-photon interactions.

However, the platonist wants more --- demands more!


### The Topology?

What the heck *enables* an electron to couple to a photon?  We know what happens due 
to the coupling: a boost or rotation or reflection. But we don't know how.

We have a name for it: **electric charge**.  But no ontology.

Yet the algebra is so simple (relatively) that we ought (morally) to be able to 
come up with a topological picture of the interaction, not just a dumb Feynman vertex 
with a label. It can't just all be fibre bundle shyte. There are no fibres. They are 
a mathematical crutch. Or, I mean (since I am an $m$-platonist), the gauge fibres are 
real platonically, but they're not physical. 

Note that the gauge transform expresses what happens under the operation of the 
underlying spacetime symmetry transformation, the U(1), which is mediated physically 
by a photon. That's a particle picture. The field theory is totally different.

The field theory (which in this simple case is the Dirac Theory) contends with 
global spacetime, since the Dirac field $\psi$ has to be defined over all space. 
Thanks to quantum non-locality, or should I say, "*thanks!*... quantum non-locality."

As a result, we need to sum up a whole infinite (or near enough to for an engineer) 
bunch of local gauge transforms, and this is done by sticking an ugly $A_\mu$ into the 
field equation. Then some fiddling around later in a classical averaging 
*et Voila!* Maxwell's Equations.

It is only half the story for theoretical physics though, because we have no geometry 
whatsoever yet for the local gauge transforms.

What I am suggesting is that they are (roughly speaking) a boost and a rotation.
Depending upon alignment of course, of $\psi(x)$ at a particular $\vec{x}$ and the 
field $A_\mu$ (the photon statistics). 


### Mass without Mass

This is a related topic of course, since mass is the gravitational charge, and in 
nature is also sort of discrete. This is the so-called Mass Gap problem, which to 
solve is worth a million US dollars. Why the F would inertia be discrete?

Unfortunately a solution in cuss words is apparently disallowed.

Again, I think mass has topological origins, and if so, we can understand why 
gravitational charge (mass) --- the $m$ in $GMm/r^2$ --- is equivalent to 
inertial mass --- the $m$ in $E=mc^2$.

The basic idea goes way back to Hendrik Lorentz, who thought masses could be derived 
from the electromagnetic interaction. His is similar in spirit again to John 
Archibald Wheeler's geon idea, but different.

My own (private, except for this) highly philosophical and poetic take is that the 
charges are specific couplings, specific interactions, whereas mass is the universal 
coupling, to spacetime, and so that is the spirit of why *all mass is interaction.* 
However, today I can only give you a very dim view of all this through a frosty lens.
I'd consider myself a mystic visionary with this paragraph alone (noting mystics are 
often utterly wrong), except I know I've just inherited this idea from previous 
giants, and so I'm just a scribe.

Why is mass discrete?  Well, I doubt it is, since energy is not discrete. But what 
about the "quanta"? I think gravity waves have a continuous spectrum, but localized 
solitonic gravity waves have to disperse pretty rapidly (I would imagine) so they can 
only get discrete by clumping into topological defects, which I am calling 4-geons, 
which could be any of the elementary particles --- up to topology.

After such structures form, if they are extended types of singularity then they'll 
likely be described by rotors, so will be bosons or fermions, and their excitations 
will determine the energy content, which will then be discrete, because all extended 
simple objects have a simple excitation energy spectrum, and it'll be discrete if the 
topology is discrete,as in string theory. String theory was the correct paradigm, it
just came with too much simplicity in topology and had to make up for it with 
fantastical geometry (Calibi--Yau). At least that's my view. I really have no idea.


### A lot is already known

Modern physics (relativity and QM) has taught us there is no mass.  All mass is 
energy. That's just Einstein + the *empirical* fact that energy is conserved for 
systems with time translation symmetry (which means energy conservation is a global 
spacetime symmetry).  Given two masses that interact the total energy will be 
constant, but contains terms separate in the masses $m_1$ and $m_2$, which could thus 
vary wildly, without violating conservation laws. An interaction is "turned on" and 
one mass goes down say, the other up, or they both go down and the interaction 
binding energy goes up.

And this is what indeed can happen, does happen --- not "wild" variations, but we 
know mass is not conserved. Hence 4-geon mass is not really tenably a fundamental 
attribute of matter.

However, that's slightly weaselly. Because there *are* interactions, so there *is* 
mass, so mass is fundamental. But we tend to these days think the interactions 
give rise to mass, not the other way around. This is tricky for general relativists, 
since is not mass the source of the gravitational field? Yes and no. Energy is the 
source, but energy is found in spacetime distortions, so geometry, so mass can be 
absorbed into our theory by supposing there is no mass, but there is topology which 
acts like mass. Hope that makes sense. I often find it pretzeling my brain, if I am 
honest.

Where does mass-energy come from if it is not a "Newtonian primitive" then? 
(And it is not.)

_All mass derives from **interaction**_ is how you would state this for beginners.

If we can explain all the interactions, we will thus (likely) account for all masses, 
except for maybe one mass parameter: things seem to need gauging in fundamental 
physics, either by a concept of scale, or otherwise, but if via one empirical mass I 
believe (cannot prove) that would turn out to be equivalent to a scale parameter 
(like a length associated with fundamental geons or strings). 

So mass is a type of relational notion. A good first reading on these ideas of mass 
without mass is 
[Frank Wilczeks\'s](https://www.degruyter.com/document/doi/10.2478/s11534-012-0121-0/pdf) 
article [here.](https://www.degruyter.com/document/doi/10.2478/s11534-012-0121-0/pdf)

### The Splinter

Nonetheless, we do not really have a grip on what energy is. To know what mass is, we 
need to know what *energy* is, and this is where things get obscure. However, the 
first step is pretty much agreed by most physicists, *mass without mass* is the 
correct idea, and all mass (probably) derives from energy, or something about as 
primitive (a fundamental length scale).

Being a little obscure, less so for the physics nerds, we know energy is associated 
with time translation invariance. But is that all there is to it?

To get to grips with *mass without mass* I was recently inspired by Lenny Susskind, 
and in all places from his [“Theoretical Minimum” course](https://www.youtube.com/watch?v=7cKvhkFhXDk&list=PL6i60qoDQhQGaGbbg-4aSwXJvxOqO6o5e&index=94), 
and the one on particle 
physics. When he got around to talking about symmetry breaking and Goldstone 
bosons, I had the inkling of a faint idea that the way he stated "That's what mass 
is!" was pretty close in spirit to *mass without mass*.

Susskind was saying, I think, that it's the relation of a geon to symmetry groups that 
is associated with mass.

Basically, any "object" that spreads out into long wavelength modes when it's 
momentum goes to zero is "massless". While if momentum is taken to zero (rest frame) 
and the wave modes have not spread out, then it is "massive".

The relation to symmetry groups is that when there is a continuous symmetry 
transform that has zero energy to perform, then it can be turned into a very slowly 
varying local transform (so like a wave effect, or exactly a wave) with very large 
wavelength, and that's the massless particle field.

I am still not sure though if this isn't circular logic. 

Is it just redefining inertial mass in an equivalent way (to say Einstein)?
I am not sure. I mean to say, you cannot bring a massless particle to rest!

But which way around does the explanation go? Is the thing massless because it cannot 
be brought to rest? Or is an energy-free symmetry the reason it cannot be brought to 
rest? Or is this blind men and elephants again?

The interesting thing for me though, is that I have no fields! So I am forced to 
look for the geon equivalent of this classification of massive and massless. 
I could not finish the task at the time of writing. (This was only an hour or so 
fresh in my head.)

Just to have a first rough stab (in case I sleep and forget it all): if we have 
an energy-free way to transform a 4-geon, then any disturbance will likely effect 
such a transform. How can it not? (Metaphor is: a marble Alice in a bowl with a 
circular trough. And a marble Bob in a bowl with no ring trough but sloping sides. 
Jiggle Alice any amount and if she whips around the bowl, she's massless. If Bob 
budges a tad and goes up the sides of the bowl, then he is massive, he just oscillates 
up and down.)

Recall: all SHM oscillators have mass. Photons do not, they only oscillate (to us) in 
time, not in space. Photons are useless as clocks, they can't tell you the time, it's 
always 00:00:00.

In Lenny's lectures it boiled down to the property of a zero energy transform.

Another way Lenny described it was that longitudinal waves on a long Slinky spring 
are basically Goldstone bosons. They have zero energy translation horizontal 
symmetry.  So are transverse waves on a string held by frictionless rings between two 
poles (no gravity around). They have zero energy translation vertical symmetry (we 
view the two poles as vertically parprupsoeallel).

```
TODO: more on this later I hope.
```

### Broken Symmetry

As Wilczek explains, requiring a high degree of symmetry forbids particles from 
being massive. The three big obstacles (the only?) are:

* Scale symmetry (conformal invariance)
* Gauge symmetry (local fields)
* Chiral symmetry (left-right symmetry)

So in a very tangible sense, all mass arises in some way from symmetry "violations". 
It is empty spacetime that has all the symmetry --- cannot distinguish left from 
right, cannot distinguish different scales, and no fields with chirality to worry 
about. 

It is a beautiful result that putting "messy" little buggers like "quanta" into your 
theory breaks a whole lot of these symmetries. For starters, if 4-geons or strings do 
not spontaneously grow, then there will be a fundamental length scale, hence a 
violation of conformal symmetry. This is what gives rise to massive strings.
$$
 m \sim \frac{1}{\ell}.
$$

Interestingly though, I believe gauge symmetry holds. This is why photons are 
massless. If you try adding a mass term like $m^2 A_\mu A^\mu$ into the EM Lagrangian 
you find you cannot recover gauge symmetry. That would mean you cannot have a gauge 
theory, but for many good reasons physicists believe gauge symmetries hold.

((One very good reason, perhaps sufficient, is that without gauge symmetry 
probabilities in quantum mechanics can go negative. Negative probabilities violate 
the most basic assumptions about cause and effect, so are a no-go. Unless you have 
time travel. We can have time-travel, it is permitted by GR, but only by violating 
some of the other symmetries, and we do not observe such violations at the 
macroscopic scale, so at least we know gauge symmetries hold for most macroscopic 
phenomenon, and for all scattering experiments.))

The patterns seen in the particle spectra strongly suggest the Standard Model gauge 
symmetries are part of our world. 

Well, this means the gauge bosons (spin=1 particles) have to be massless. 

This would be fine and dandy if all the forces were either long-range 
(electromagnetism) or confined (gluon color).  In the EM case the photon is massless, 
so no problem. In the gluon case the confinement gives rise to quark and gluon masses 
due to strong interactions. It's the energy in the "field" that imparts most of the 
mass in the case of QCD. And incredible computational work has born this out (lattice 
QCD stuff).

In fact, the best simplest toy model assumes zero mass for the $u$ and $d$ quarks. 
the other quark masses are sent to infinity. And the theory computes all the dressed 
masses (masses from interaction) which give very close approximations to the 
empirically measured masses of quarks from the resonances in the deep inelastic 
hadron collision experiments.

It's a fantastic result. Because the nuclear masses are about all the mass that there 
is in normal phenomena. We ignore dark matter and leptons here. Ignoring leptons is 
fine, because they are so light, so the residual splinter in a lovely package 
explaining almost all the mass in the universe is dark matter. It's annoying 
nonetheless, since who wants to watch just the first half of a rugby game?

QED is a worse headache than QCD in these respects. The quark confinement and gluon 
flux tubes are a very decent mechanism for accounting for the nucleaon masses. But 
since QED lacks confinement it is a far harder problem to account for the lepton 
masses. I think to this day QED theorists still rely on the renormalization trick, 
which seems like a massive fudge. Or, at best, it is a consistency result, showing 
the electron mass, although computationally infinite, can always be gauged back to 
$m_e$.

My own view is we are lacking a theory of electron structure, which if guessed well 
would reveal a confinement of an energy flux, same as quarks.  I wrote about the 
Burinskii idea of the electron as an extremal Kerr-Newman ring singularity 
[last post](../013_smarticles). 
That's the right sort of idea it seems to me. It does not give a computation of the 
electron mass, but if we had a theory of the size of the electron Kerr-Newman ring, 
then it would yield a mass, not in the same way, but I think in the same spirit as 
the quark masses. Unfortunately, the general relativists have to start with a 
postulated mass $m_e$ and charge $e$ to get the Kerr-Newman metric. 

Then we have the masses associated with the Weak interaction. We've accounted for 
the gluons, and the photon.

The only known problem for the boson masses are the heavy gauge bosons for the 
Weak force: the $W_{\pm}$ and $Z$.

We cannot break gauge symmetry to give these bosons masses. 

What happens, as born out at the LHC experiments showing the existence of the Higgs 
boson resonance, is that the gauge bosons "acquire" masses due to interactions with 
the Higgs field. Without the Higgs these bosons would be massless and the Weak force 
would have a very different effect in nature (we, or our stars, would not exist).
(Existence of the stars is an effect of the Weak interaction, not the cause, you 
appreciate. There is no anthropic argument here.)

Susskind treats the Higgs mechanism pretty well in his TTM course. But I liked the 
way Wilczek explains how the masses for the $W$ and $Z$ are very close to analogous to 
the way photons acquire mass in superconductors.

In superconductors there is a magnetic expulsion, so a lot like an inverse of a 
confinement. Electrons at the superconductor's surface set up current that expel the 
magnetic field from inside the superconductor. This "breaks" the gauge symmetry for 
electromagnetism and imparts mass to the virtual photons involved.
Although, all virtual photons have mass, we just never detect it because they're 
virtual.

((To the uninitiated, virtual particles are real. The problem is we never see them, 
by definition we cannot, because they are precisely the resonances that get absorbed 
back in the internal black box of the $S$-matrix. If a "virtual" photon is emitted 
from a scattering event it will by definition not be virtual.))

OK, so the way Wilczek describes this is that the gauge symmetry is **_not_** broken. 
Rather, the best way to think about it, is that,

> there is a *gauged* broken symmetry.

WTF does that mean? 

Well, the gauge symmetry is baked-in to theory construction, so cannot be violated 
without breaking the theory. But in the theory we *start from* some symmetries, and 
when they are local they're associated with elementary particles.

So to get heavy bosons from such theories we have to assume (and we do) that the 
bigger symmetry groups are not true symmetries of our world. The bigger symmetry 
gets "broken" not the gauge symmetry.

However, this is a dynamic mechanism. With the dynamic mechanism (the Higgs mechanism) 
the bigger symmetry group would have been exact.

In one way or another then, the boson masses arise from symmetry principles. 

Massless for photons because U(1) is exact.

Massive for gluons because of confinement, so a direct interaction energy, not a 
gauged broken symmetry.

Massive for the $W$ and $Z$ because of a higher (fictional) symmetry being broken, 
leading to a Higgs mechanism.

This may to some readers leave a few splinters, as it did with me. I haven't 
explained how the Higgs mechanism works. Every time I attempt to study it I get 
confounded with other work before I truly grok it. That's because I am looking for 
the essence of it, and no lecturers give the essence. They either hand-wave about the 
condensate, or go into too much detail without revealing the simplicity. But I 
promised myself I'd go back and watch Susskind to see if it is all clear to 
comprehend.

The best I can do (still hand-waving) for now is the use Wilczek's superconductor 
analogy. U(1) is still exact here. The photon *is* massless. However, in a 
superconductor the dynamics mean the photons in the superconductor cannot dynamically 
(so contingently) exhibit full U(1) symmetry. The symmetry is thus broken. There is a 
condensate that "slows" the photons down. The result is a smaller gauged symmetry, 
and this has a massive photon.

OK, so "same thing" for the $W$ and $Z$ bosons. There is a dynamic effect arising 
from existence of the Higgs condensate. It's not superconductivity, but it is 
analogous, and more fundamental.

I would also add this is a universal phenomenon.

Whenever there is a condensate, any object that interacts with the quanta of the 
condensate will acquire a mass, dynamically, even though it's intrinsically 
massless.

Like if you drive by a MacDonalds, only every second.

Again, not perfectly understood by myself, the way I currently think of the Higgs 
condensate as forming is with a picture in my mind of the higher temperature vacuum 
getting cooled. This permits the Higgs boson to condense out of the vacuum, acquiring 
a non-zero vacuum expectation value.  Above the critical temperature (so the vacuum 
is not ‘true’, it is spacetime with a seething mess of quanta and radiation) the 
Higgs has zero vacuum expectation, and so is not a condensate.

The residual splinter for me here is that such a massless condensate is a tachyon 
field, meaning it has *complex mass*. So wtf is that?

To de-escalate the linguistic situation, some just say a scalar field (spin-$0$) has 
a complex mass. So they don't mention complex mass, and just talk about a scalar 
field. Which is fine, I guess. But I still find that slightly unhelpful. It just begs 
the question, "What is a scalar field?"

That's about where I am at in T4G theory angles on all this. What is the scalar field 
in geometric-topological terms?

I can understand what fermions, bosons, and gravitons are, but I cannot picture  a 
scalar. It all seems a bit absurd, since surely a scalar is the simplest?  Yes, 
algebraically, but maybe not geometrically? I don't know.

To my dopey mind, a scalar has to act like a scalar, so is dilating stuff. The 
dilatons in string theory are a natural case (you cannot get rid of them in string 
theory). So that's a bummer, I have the feel of a need to re-look at string theory 
for inspiration. I always hate that, because the string theory texts are just all 
about going full-membrane.


### The Tachyon Condensate

The Higgs field *is* a tachyon condensate. I regard this as just another way of 
saying the Higgs is a scalar. Thanks to non-local correlators from QFT it is also a 
field. 

Amusingly, I found good ol' Wikipedia to be somewhat helpful, let's read:

> The "imaginary mass" really means that the system becomes unstable. The zero value 
field is at a local maximum rather than a local minimum of its potential energy, much 
like a ball at the top of a hill. A very small impulse (which will always happen due 
to quantum fluctuations) will lead the field to roll down with exponentially 
increasing amplitudes toward the local minimum. In this way, tachyon condensation 
drives a physical system that has reached a local limit and might naively be expected 
to produce physical tachyons, to an alternate stable state where no physical tachyons 
exist. Once the tachyonic field reaches the minimum of the potential, its quanta are 
not tachyons any more but rather are ordinary particles with a positive mass-squared, 
such as the Higgs boson.

So there is a cartoon we can draw to try to understand a bit of this.
Apologies for the artistic sloppiness.

{{<scalar_potentialV>}}

As the universe cools the Higgs finds itself in a false vacuum (top of the potential 
hill at $\phi=0$) so any slight disturbance will condense out a Higgs boson at the 
minimum at $\langle \phi \rangle \ne 0$.

The result is an effective mass imparted to any geons which interact with the Higgs.
The mass is from the interaction.

What I would like to draw attention to is that the above picture is a picture of 
what happens in a field theory, not a 4-geon theory. However, what we claim in T4GU is 
that the statistical mechanics of 4-geons is quantum, and so we can always use a 
field theory as an effective approximation to the underlying local geon dynamics. No 
one has yet proven this approximation is valid, mainly because T4G is not a fully 
fledged theory yet, we are just taking it on faith for now.

What we then want is some T4G interpretation of this sort of phase change from a 
stable zero-energy vacuum to the instability, and the condensate.

The rough idea (I think) is that in a high energy early universe, there is so much 
radiation that it "cooks" the vacuum, so-to-speak, which must mean the Higgs is 
"lifted" to the stable configuration, meaning there is an energy minimum at zero 
Higgs expectation value. So the Higgs is prevented from imparting mass to the bosons 
that it interacts with.

As the universe cools, the radiation dissipates, and then the Higgs configuration 
becomes unstable, as in the analogous superconducting temperature transition for 
the Cooper pairs (which are bosons, like the Higgs). Which means the Higgs acquires a 
non-zero vacuum expectation value, and condenses. Which in-turn means it now only 
takes small fluctuations in energy to excite a Higgs boson. This "switches on" the 
Higgs mechanism and the Weak bosons then acquire the masses we are familiar with.


#### Goldstone bosons

In the above sketch of the potential $\langle\phi\rangle$ I suppressed the angular 
argument, say $\alpha$, for the complex field, $\phi = \rho\e^{i\alpha}$. This is a 
symmetry of the field and so we could draw it by rotating the "W" potential function 
around the origin a full circle. That gives a "Mexican hat" shaped potential $V$.

Unlike the $\rho$ coordinate shown in the sketch, excitations of this field in the 
$\alpha$ coordinate require no energy to produce, so are Goldstone bosons, they're 
massless. However, they do not exist if the theory has a U(1) gauge symmetry in 
$\alpha$. The U(1) merely rotates $\alpha$ around the circle, if it is a symmetry 
then the theory (Lagrangian) is invariant under such transformations. We could get a 
"force" out of this (electromagnetism) but no Goldstone boson. 

What is an attempt to produce a Goldstone boson? It is exciting $\alpha$. But that 
doesn't change the Lagrangian, so there is no physical effect, so there is no 
Goldstone boson. At least for the above type of rotationally symmetric potential.

### Things for Homework

Recalling I write mostly for undergrads, it might be opportune now to think about 
some things that might appear obvious but which are by no means easy for beginners 
to fully mentally absorb.

One is that the mind naturally wonders how masses can be "quantized" in the above 
pictures?  If mass proceeds from interaction, and specifically excitation of modes of 
oscillation away from the non-zero $\langle \phi\rangle$ minima, then what on Earth 
is oscillating in the 4-geon picture? 4-geons are only fields statistically. So this 
is a good question to ask.  Most physicists would not bother to ask because they'll be field theorists not geon theorists.

An answer, partially, is to think like a particle theorist, and who would that be? It'd be the string theorists.

For string theory the higher-energy modes can be considered massive, and they arise due to excitations of string vibrations. Same in T4G theory. Anything with a spacetime extent can so oscillate, and if there is a fundamental length scale involved, that provides the quantization. How? Well, that's just theory of music harmony.

A stringy thing will oscillate at it's natural frequency. Energy dumped in other frequencies will get dissipated. How? By interaction with other strings. The field theorist would call this a "relaxation"of the field. Or radiation.



## Threats to the Establishment?

By the time I am done with this though, we will have the full story. I just have to 
live another 500 years... or so. Because I am kind of try-it-and-see sort of theorist. 
It takes a while to go through all possibilities, and topology is really hard for me 
to grok. Maybe I need to invent a new language for topology, one that does not need 
all the cohomology theory. Shouldn't this be possible? The physicist hardly ever 
needs *all* the mathematics.


<div style="text-align: center;"> *&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  *</div>

## Before the Wrap

Its been a bit of a week-long odyssey writing this one. I always find mass, or more 
generally charges, so difficult to understand because of the miasma of orthodox QFT, 
which only appears to get to the nub of the issue, but is always a pot o' gold a the 
end of the rainbow --- meaning you look like you can get to what charge is 
geometrically or topologically, but then QFT always disappoints, because 
fundamentally it is not a geometric theory, it's a statistical theory with geometric 
characteristics.

The statistics from QFT are not fine enough for anyone to deduce the Planck scale 
topology. So unless you adopt some ontology like string theory you are at a dead end. 
You can never account for charges. They are metaphysical in orthodox QFT. 
Metaphysical but have a mathematical plug-in. You don't know where they come from, 
but you know what they do.

I have gone over Susskind and Wilczek's explainers for (a) Higgs, and (b) gluon, mass 
origins. They have provided a marvelous accounting for most of the non-Dark Matter 
sector of mass in our universe. It was all philosophical, and I really cannot go 
much deeper because I don't want to tangle with lattice QCD intricacies or Higgs 
gauged lesser symmetry theory, it's all available if you have the patience to learn. 
But it will never show you the exact origin of the charges. 

**_All charge is from interaction_** is the "correct" story I believe.

But what are the interactions?  This is what no one knows. A Feynman vertex or 
string diagram is only an ersatz.

Why do I say this? It is because the finest grain pictures we have of physical 
reality involve either string diagrams or Feynman vertices. The mass arises from 
those. The vertex (or covariant topology change region for strings) is 
*mathematically accounted for* by charges, up to a coupling constant. But this is the 
big mystery. Why those particular charges and why those particular coupling 
constants? Know this, and you know mass and charge a lot better. Sure, it will only 
raise a further question, but to me, standing between 20th and 21st centuries, that 
one more layer deeper would be wholly satisfying.



<div style="text-align: center;"> *&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  *</div>


### Superforce

I have one last confession for this chapter. You know Paul Davies, populariser of 
the Superforce idea (unification of QED + QCD + Gravity)? I'm sure you do. And 
his poodle Michio Kaku.

They all think there is some big gauge group that unifies all the forces. 
That'd mean a lot of symmetry breaking mechanisms at low energy to condense out 
the EM, Weak, Strong and Gravity forces. Maybe that's the case? I don't know.

Yet there is a problem known with running of the coupling constants. It doesn't 
seem to go through. Lot's of ugly fine-tuning required it now appears. Who is up 
to theorize all that?

I've got another approach. At superhigh energy we just create a whole mess of 
blackholes. So Gravity *is* the superforce. Collapse all the finer topology. 
Smush the electron even. There is nothing else at ultrahigh energy.

Gravity was always a quantum theory, *the* quantum theory.

That's my story, I'm sticking to it.


<table style="border-collapse: collapse; border=0;">
    <colgroup>
       <col span="1" style="width: 35%;">
       <col span="1" style="width: 25%;">
       <col span="1" style="width: 30%;">
    </colgroup>
<tr style="border: 1px solid color:#0f0f0f;">
<td style="border: 1px solid color:#0f0f0f;"><a href="../013_smarticles">Previous chapter</a></td>
<td style="border: 1px solid color:#0f0f0f; text-align:center;"><a href="../">Back to Philosophy</a></td>
<td style="border: 1px solid color:#0f0f0f; text-align:right;"><a href="../015_whatsmassagain">Next chapter</a></td>
</tr>
<tr style="border: 1px solid color:#0f0f0f;">
<td style="border: 1px solid color:#0f0f0f;"><a href="../013_smarticles">The Smarticle Smasses</a></td>
<td style="border: 1px solid color:#0f0f0f; text-align:center;"><a href="../">TOC</a></td>
<td style="border: 1px solid color:#0f0f0f; text-align:right;"><a href="../015_whatsmassagain">What the Devil</a></td>
</tr>
</table>
