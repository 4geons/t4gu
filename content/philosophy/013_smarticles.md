---
title: "Smarticles"
description: ""
date: 2023-02-19
lastmod: 2023-02-19
cover: ""
coverAlt: ""
toc: true
tags: []
katex: true
---

This is a series of short notes, had to jot them down for
the record. Turned into a long one.

1. T4G theory postulates that the elementary particles are topologically non-
trivial regions of spacetime.
2. If they contain internal ER bridges (wormhole substructure) then they are 
"stringy".
3. If they contain internal ER structure that can be self-entangled across large 
space and possibly time intervals, then there is (probably) *no need* to have an 
*emergent* spacetime theory. (What does "emergent" even mean?)
4. The masses can probably be computed, or crudely approximated, using the 
Kaluza-Klein ersatz: the stringy length is the inverse mass.

Why "smarticles"? Well,... in T4G theory the 4-geons are the elementary 
particles. They contain wormhole substructure (I think). So they reproduce their 
own labour.

On point 3: if a mathematical model with no spacetime can contain a structure 
that is spacetime, then that is a contradiction, and nothing emerged. 

If the mathematical theory has a spacetime as some limit of 
$N\rightarrow \infty$, for some structure with a generalized "size" parameter 
$N$,  it is probably going to be the case the spacetime theory which is this 
limit has an effective field theory description of that mathematics. So where is 
the emergence? There is no emergence in mathematical theory mappings.

Emergence is a physical process, not a mathematical mapping. Mathematical mappings are 
used to describe physical processes, but the mathematics is not the physics.



## The Smarticle Smasses

Note 4 was the main one I had in mind for this post. Reports of the death of 
Kaluza-Klein theory are greatly exaggerated.

The original Oscar Klein version of the mass calculation (for the electron) was flawed, 
but the idea was revived by string theorists, so I think is on a fairly sound footing.

The very basic rudimentary idea is just stupid dimensional analysis. In Planck units 
mass has units of energy $E$, and length has units of $E^{-1}$.

**Legal Disclaimer:** No supersymmetric sparticle was harmed in the production of 
this article.


## Natural Units

By the way, I've always used physical principles to recall the Natural units. But 
recently looked up Wikipedia and found a handy formula, which will no doubt 
contribute to making me dumber:
$$
{\displaystyle {\mathsf {E}}^{n}={\mathsf {T}}^{p}{\mathsf {L}}^{q}{\mathsf {M}}^{r}={\mathsf {E}}^{-p-q+r}}
$$
You use this alongside the table:
$$
\\begin{array}{lcccl}
\text{Quantity} && \text{p} && \text{q} && \text{r} && \text{n} \\\\ \\hline
\text{Action, } S && -1 && 2 && 1 && 0 \\\\
\text{Speed, } v && -1 && 1 && 0 && 0 \\\\
\text{Mass, } M && 0 && 0 && 1 && 1 \\\\
\text{Length, } L && 0 && 1 && 0 && -1 \\\\
\text{Time, } T && 1 && 0 && 0 && -1 \\\\
\text{Momentum, } p && -1 && 1 && 1 && 1 \\\\
\text{Energy, } E && -2 && 2 && 1 && 1 
\\end{array}
$$

For students: mass has $E=mc^2$ and you put $c=1$.  For length, use wavelength from 
Planck's relation $E=hc/\lambda$, and $\hbar=1$, and of course $\lambda$ has 
length units.

On second thoughts, I probably will never use this table, but it is an interesting 
Wikipedia collectors artefact. Although largely a pointless exercise, for some 
younger student geeks it might be a pleasant diversion for them to reproduce the 
table. Probably useful for programming libraries that desire to use dimensioned 
numbers, or other Type theory work.


## Mass without Mass

This is a longer topic of course, since mass is the gravitational charge, and in 
nature is also sort of discrete. This is the so-called Mass Gap problem, which to 
solve is worth a million US dollars. Why the F would inertia be discrete?

Unfortunately a solution in cuss words is apparently disallowed.

Again, I think mass has topological origins, and if so, we can understand why 
gravitational charge (mass) --- the $m$ in $GMm/r^2$ --- is equivalent to 
inertial mass --- the $m$ in $E=mc^2$.

I will write more about this [next week](../014_chargenocharge) when we look at 
charge without charge.

The basic idea goes way back to Hendrik Lorentz, who thought masses could be derived 
from the electromagnetic interaction. His is similar in spirit again to John Archibald 
Wheeler's geon idea, but different.

It is too complicated a story to go into now, I want to change gears to write about 
some fanciful ideas which are nonetheless educative.  Exactly where mass arises from I 
will start to write a bit about next week, when I write about 
[charge without charge.](../014_chargenocharge).

But I will begin with a fateful approach to I think the right sort of idea, which 
is that masses emerge from interactions. Mass is energy, in other words, and energy 
is what we associate with most particle interactions. The modern thinking really is 
to figure out the source of energy, not so much mass. If we understand the 
interactions then we will probably understand all the masses. Maybe even predict most 
of them.

((This is the state of the situation today, only annoyingly incomplete. Most 
[masses are known (see Wilczek),](https://www.degruyter.com/document/doi/10.2478/s11534-012-0121-0/pdf) 
but only up to a few free parameters that have to be measured experimentally.))




## Some Smasses

I'd be remiss if I did not point out classical electromagnetism can "compute" the 
electron mass to within reasonable tolerances. It's a very crude sort of model, so 
you might not expect it to get within an order of magnitude, but with one kludge it 
does. It is also empirical, so is not fundamental theory, I will explain why below 
after leading you down the false rabbit hole. (Ok! I declared this, so don't be upset 
when I pop the bubble.)

I came across this not in a textbook (it's too weird) but from an Internet 
acquaintance with some bizarre ideas of his own, who in turn got it from someone 
who tried to patent on the idea (freakin' hilarious! It was such a laugh it took me a 
while to clam down and bother looking at the calculation.) I will not even dignify 
the guy with a citation. (You can easily look it up.)

First we need come capacitor theory, which is very simple. We model the "'electron" 
approximately as a thin sphere shell of charge. 

What it "charge" you might ask, absent mass? That's an aside, but if you can define 
charge as coupling to the electromagnetic field without using a concept of mass, then 
you've got capacitor theory without risking a circular definition of the electron 
mass (remember this). If you're rusty you can scroll down the 
[free course book here](https://openpress.usask.ca/physics155/chapter/4-1-capacitors-and-capacitance/) or consult the 
[physlibretext here](https://tinyurl.com/2fwxuq7k), we find,
$$
C = \frac{4\pi\epsilon_0\\, r R}{R - r}
$$
where $R$ is the outer shell radius, and $r$ the inner. The crude model for an 
electron has all the charge fuzzed inside the classical electron radius, 
$$
r_e \approx 2.817940322\cdot 10^{-15}\\,\text{m}
$$
We take $R=\infty$ as a limit (so, basically, assuming no shielding effects and 
whatnot. I did say it's a crude model.)  So to a rough approximation. 
You should find in those (or any electrodynamics text) the formula for capacitance,
$$
C = \frac{Q}{V}
$$
with $V$ the voltage (or integral of the $E$-field along a path). From which you can 
derive the "work done" in assembling such a sphere of charge from charge at infinity,
$$
 W = \frac{1}{2} C V^2 = \frac{Q^2}{2C} = \frac{e^2}{4\pi\epsilon_0 r_e}
$$
where I substitute in the electrons classical radius and charge. We get, using mass-energy equivalence,
$$
\begin{array}{rl}
 W_e \\!\\!&= 8.187105789040679\cdot 10^{-14}  \\\\
 \quad 
 \Rightarrow \quad m_e\\!\\! &= \dfrac{W_e}{c^2} \approx 9.10941154\cdot 10^{-31}\\,\text{kg}
\end{array}
$$
I played one hack there by deliberately making a basic arithmetic error by forgetting 
the factor of $2$ in the denominator, it should have been,
$$
 W_e = \frac{e^2}{8\pi\epsilon_0 r_e}
$$
But what's a factor of a half between friends? We can "always" put this numerical 
factor down to too idealized a geometric model. After all, who believes electrons 
really are simple spherical blobs of charge?  At the very least of our suspicions 
they are stringy, not spherical (if superstring theory has anything to tell us).

There is no *other* trick or sophistry here. You'd expect a similar result from 
dimensional analysis alone. If we could (gedankenexperiment) "vaporize" an electron 
and scatter it's elemental quantum of charge into a classical infinity of little 
pieces and send them to infinity we'd have no mass left, and no electromagnetic 
energy either, the two vanish together in this case. 

OK, but that's treating it as some sort of metaphysical coupling between charge and 
mass. Is that even heuristically valid? I think it is. Can we have massless electric 
charge? Not from what I know. The long range of the Coulomb force is empirical 
evidence that charged particles of lower mass than electrons cannot exist, since 
among other things electrons would then be unstable to decay to lighter particles, 
which we do not see.

To appreciate this is a bit of fun & games, you can get an "exact" result with 
modelling the electron as a [string of coax cable](https://tinyurl.com/2pypjmbr), 
length = $r_e$ and ratio of outer 
to inner surfaces of $\approx e^{1/2}$. 

$$
C_\text{coax} = \frac{4\pi\epsilon_0 L}{\ln(r_2/r_1)}
$$

But then how will you rationalize that this type of electron has zero net charge? A 
cloud of shielding virtual charges? So the coax cable model is actually not too bad. 
We know electrons are shielded, at least in QFT. So the coax string model has "the 
electron" as only the inner bit of string.

So you say, "Yeah, whatever."

But it's funky nonetheless. The electromagnetic force, heck, even just electric, 
"knows" about the electron mass, in some sense. (This paragraph is false, but I had to write it for the fun of it here.)

Which leaves the residual splinter in the mind of whether any of the electrostatics assumptions snuck in an assumption about mass? I've already hinted there is such a sneak. It is pretty obvious.


## Popping the Bubble

OK, I was honestly (because I said so) leading you on a wild goose chase there. I tried to write it to be maximally convincing though, supposing you ignored my warning.

So what's the problem here?

The problem is the 
[classical electron radius](https://en.wikipedia.org/wiki/Classical_electron_radius) is *defined* using the empirically known electron mass. Which, of course, being an intelligent reader of my T4GU site you looked up and discovered yourself, and so probably stopped reading before this point. We have, in SI units,
$$
r_e \equiv \frac{1}{4\pi\epsilon_0} \frac{e^2}{m_e c^2}
$$
which also uses Einstein's mass-energy equivalence. So let's see what we actually accomplished above with the "tweaked" capacitor model intermediary,
$$
\begin{array}{rl}
m_e \\!\\!\\! &= \dfrac{e^2}{4\pi\epsilon_0r_e c^2} \\\\
 &= \dfrac{e^2}{4\pi\epsilon_0\left(\dfrac{e^2}{4\pi\epsilon_0 m_e c^2}\right) c^2} \\\\
 &= \dfrac{1}{1/m_e} = m_e
\end{array}
$$
So, $m_e = m_e$, a profoundly important result... for pure logic.

### Recovery?

What we'd need (for profound physics, rather than logic) is a more fundamental theory 
that could compute the electron electromagnetic radius scale. I do not think human 
minds have discovered anything simpler for this than QED and renormalization group 
perturbative calculations. But we know that to be a "cheat" because the empirical 
$m_e$ has to be inserted. So it is no advance from the cranks.

Did Dirac or Eddington have some wild numerology for some of this stuff? I can't 
recall, I never bothered (dared) to stare into that abyss.

However, I have not explored the deep electrodynamics literature fully enough to know 
about any more profound heuristics. They might be around somewhere. To be credible, 
they'd be something quantum mechanical one way or another, because classically the 
concept of a discrete irreducible unit of charge is nonsensical, there is no 
principle in classical mechanics predicting a charge or mass quantum. 

We would have to extend CM into irreducible non-trivial topology to get any grain of 
discreteness in nature. And I have not seen such theory. (Except for T4G, but T4G is 
not a fully fledged theory yet, and is more than likely falsified already, I just 
don't know that yet.)

Although, if we minimally extend CM to GR, then we do get granularity for free, 
because we get black holes. But quantum minimal black holes are weird and not well 
understood. I do not think anyone has credible extremal black hole models for 
electrons yet. 

Having noted all this, 
[Brandon Carter](https://en.wikipedia.org/wiki/Black_hole_electron) did look into a 
[minimal black hole model for an electron](https://en.wikipedia.org/wiki/Black_hole_electron), 
and found it gave a good semi-classical model, getting the gyromagnetic ratio correct 
up to the usual "geometric" correction factor which comes from RQM. 
More recently [Alexander Burinskii](https://arxiv.org/pdf/hep-th/0507109.pdf) 
has pushed Carter's idea into respectable territory, using the Kerr--Newman rotating 
black hole metric as a model for an electron.

If you want a slide-deck on this stuff 
[see the pdf here.](http://ffp14.cpt.univ-mrs.fr/DOCUMENTS/SLIDES/BURINSKII_Alexander.pdf), the English is a bit broken, but you will get the flavour for the idea.
That is the proper GR model for an electron of course, there's no other model even close. For QM it only lacks leptonic flavour numbers. 

But if you ask me, the approximate symmetries in the Standard Model like hypercharge, 
flavour and color, are all derived from spacetime symmetries, so are still within GR, 
it's just no one has shown this yet. It's an open problem, which I also think has not 
been yet shown to be unfeasible to solve in some affirmative. 

The usual objection to the Burinskii--Carter model of electron as black hole, is that 
the structure is bizarre, since it is a naked singularity, and it admits closed 
timelike curves.

Well, well!  My dudes!${}^\dagger$ In T4G theory we *want* CTC's, they're a feature 
not a bug, because the CTCs are what "endow" (poetic licence here) classical GR with 
quantum mechanical features. Perhaps all the QM?

Susskind again: ER=EPR, GR=QM.

${}^\dagger$ "My dudes!" can be translated into gender neutral vernacular as "Well 
sh\*t!" That is not the correct English etymology, which probably is due to Oscar 
Wilde and "dandy + "attitude". The way I'm using it is a miss-translation of "dood" 
which is roughly Arabic phonetic (I believe) for camel poop. Besides elephants, a 
pretty righteous form of sh*t. But don't quote me on this.


### Burinskii--Carter model

I love this model, it's so funky. You've got at least three length scales associated 
with the electron. There's the classical Schwarzschild radius,
$$
r_s = \frac{2Gm_e}{c^2} \approx 1.3353\cdot 10^{-57}\\,\text{m} 
$$
which everyone knows is far smaller than the Planck length. Then there is the more 
physically appropriate Reissner--Nordström length, for a charged but non-rotating 
black hole,
$$
r_q = \sqrt{\dfrac{e^2 G}{4\pi\epsilon_0 c^4}} \approx 1.3807\cdot 10^{-36}\\,\text{m}
$$
This is what suggests the electron is a naked singularity, because this physical 
metric length is vastly greater than the associated Schwarzschild radius.

Numerically (by which I mean mystic numerology) this $r_q$ is nice because it's about 
the Planck length, a tick below.  Whether this means anything more profound is not 
for me to say, but if you think electrons are prime building blocks, then I think 
you'd want to see them have a characteristic length just below or about the Planck 
length.
That's because on stability grounds alone, if they (or any fundamental particle) had 
a larger length scale they'd cease to be immune to decaying into smaller units. I do 
not know all the detailed theory for such ideas, I just use them as heuristics.
That's why I use the poetic word "immune" here. I really mean "stable" but have no 
rigorous definition for this type of stability.

Although, if you ask me, these models are confusing us, because the electron probably 
contains at least one wormhole bridge. (That's just a conjecture, but based on the 
fact an electron can be self-entangled, because it exhibits two-slit interference and 
the like.) Do please take this all with a grain of salt. I am under no pretensions the 
T4G theory is "correct." It's just a very fun idea. I mean *very much* fun.

Third, in the Kerr--Newman metric (so now a proper charged and rotating black hole) we 
have a ring topology, with a characteristic ring radius,
$$
r_a = \frac{J}{m_e c} \approx 1.9295\cdot 10^{-13}\\,\text{m}
$$
This is close to the Compton wavelength of an electron, which is a measure of roughly 
how uncertain the electron position is, owing to Heisenberg uncertainty. In T4G 
context this is a measure of wormhole tunnelling propensity, but expressed as a 
characteristic length, rather than a probability or rate.

There is another advantage in this description, which is that a simple 
Reissner--Nordström type naked singularity cannot have spin, since with a point 
singularity there is nothing to rotate. The proper Kerr--Newman metric gives us a 
better picture of what the electron structure might more closely resemble. At the 
minimum then a ring topology, but it might also be mutually orbiting 4-geons, or the 
like, a spinning wormhole. Such things remain to be seen.

This Burinskii--Carter model also provides a nice reinterpretation of the Dirac 
Equation, which is that the Dirac spinor becomes an "order parameter"controlling our 
description of the electron system. (A "system" because it is no longer a simple point 
mass.) What the heck does "order parameter" mean?

One thing it leads to is an analysis using a pair of null vectors, and the Weyl basis 
for fermions, which is a super job for geometric spacetime algebra. Burinskii does 
not employ the proper *graded* multivector spacetime algebra, so he uses complex 
numbers and all that carry on instead, which makes the work a bit hard to physically 
interpret, since it does the typical vector algebra dumbness of hiding the different 
possible geometric meanings of the complex imaginary. (Are we talking bivectors, 
relative vectors, or pseudoscalars?)

As for Burinskii's "order parameter" --- it is the new role found for $|\psi\rangle$ 
as a control parameter for polarization and dynamics (rotation and statistical 
dispersion). All of which I think I can use spacetime algebra for, to map onto T4G 
ideas.

I am still not sure what to make of all this. To mind mind it is at least suggestive 
of T4G theory-like ontology. It is too fluky to be just numerological. What the 
Kerr-Newman=-Carter-Burinskii model does *not* show is how electric charge originates 
from gravity. Maybe electric charges is not topological? 

But to a T4G theorist electromagnetism is *nothing other than* coupling to photons, 
and photons are also 4-geons, and they couple topologically to other genes. So 
electomagnetism ought to be spacetime algebra too. 

I have to sheepishly admit I am not in too much of a hurry to save my life time 
allotment and find a falsification for this aspect of T4G theory, since it sounds too 
much fun to give up. Even if someone debunked the ideas, I'd want to play around with 
them anyway as esoteric art. Anti-scientific? Yeah, sure bro'. Show me any scientist 
who is not daily anti-scientific in this respect.

So another exploration goes on my TODO list.


### Older Classical Ideas

J.J. Thompson, [Wilhelm Wien and Max Abraham](https://de.wikisource.org/wiki/Dynamik_des_Electrons) had similar musing 
about the electron mass. You can find recent write-ups along similar lines 
[here](http://philsci-archive.pitt.edu/1990/1/electron-10-2004.pdf), 
maybe elsewhere, but I do not have the time or motive to conduct a literature review.

They use the Einstein mass-energy equivalence to get the classical electron radius, so $m_e \rightarrow r_e$ again, not the other way around. This gives you a naïve shell or coax string model for an electron, but nothing more.

Those gentlemen were also funny, because they thought electromagnetism made Einstein 
relativity redundant. Did they appreciate electromagnetism has special relativity 
already encoded? You cannot have electromagnetism without special relativity my 
dudes.

Others have tried to justify the numerical factor anomalies 
ascribing them to dynamical rather than geometric factors. Which I think is a bit of 
a laugh. The fact you get anywhere close to $m_e$ from such a naïve model is cool. 
(With the above caveat, to remove the circularity you need a theory for the 
classical electromagnetic radius without using the electron mass, which combined with 
the definition of $r_e$ would make $m_e$ drop out automatically).

### Going Back to Strings

I want to make a bubble again. 

The superstring idea of $m \sim L^{-1}$ is perhaps the better (fools?) gold paved 
road to explore. That would of course be in Planck units, and it does not predict the 
electron mass, because we do not know the stringy length of the electron in Planck 
units. It is probably going to be uncertain anyway, since if the electron is an 
extended region of non-trivial topology, then it's length is probably not going to be 
fixed. (These are all whimsical conjectures of course, for now.)

What is perhaps fruitful for the amateurs, is to find the closest characteristic 
length scale for the electron, and see if it comes close to $m_e^{-1}$ (in appropriate 
units). Then what?

Well, that's just a fun exercise, but you see it might lead you to some model for 
the electron. Happily for you your idea might correspond somewhat to physical reality. 
That'd be the motive for all this.

Recall the most consistent geometric picture of an "electron black-hole" is with the 
horizon area about the Compton wavelength, this then agrees with the Kerr--Newman 
black hole ring singularity dimension. The strong suggestion is the electron then is 
indeed something like a ring or "1D" object, morally. 
We could go with the ring proposal (closed string theory), or use the closely related 
geometry of a spinning wormhole.  Recall,
$$
r_a = \frac{J}{m c} = \frac{\hbar}{2mc}
$$
So for a wormhole or black-hole like electron model it's the Compton length that 
*probably* dominates the black-hole length scale. That's for the Kerr-Newman 
characteristic length. That suggests the $\hbar$ in the Compton wavelength is indeed 
associated with angular momentum. So in quantum mechanics $E=\hbar \omega$, or $\vec{p}=\hbar\vec{k}$,  is not 
really a quantum of energy, as in "Voom!" but rather is associated with rotational 
motion, $E=I\omega^2/2$, where the moment of inertia $I=mr^2$ (point masses on a 
string moving in a circle approximation).

A simple calculation shows that if an electron is some structure whizzing around a 
circle of about the Compton wavelength, then it does so at about light speed or a 
factor of $4\pi$ less than $c$. 

Or, you know, this could be a model of the electron as an oscillation along a 
wormhole.

I vacillate between both "black-hole-electron" views. And again,... you know,... 
like I am going to make a prediction about this soon because we are so close to 
seeing electron Planck scale structure... not!

If this were all the case, then going back to the stringy ideas, you'd expect the 
electron mass to be the inverse of the Compton length (no longer a radius exactly, 
but depending on your picture it could be, string rotating around, or vibrating, 
whichever).
But $m\sim L^{-1}$ is in Planck units, so if we divide the SI mass and Compton length 
by the Planck mas and Planck length, we get,
$$
\frac{m_e}{M_p}\frac{L_p}{r_c} = 6.283186391491044
$$
well, that's a bit of numerology isn't it. Close enough to $2\pi$ for you?

It has to be a joke of course, but just *you* go find the sneak! Challenge.

In any case, that is a wave-vectorish type of relationship,
$$
m^P_e = \frac{2\pi}{r^P_c},\qquad \text{(Planck units)}
$$
Right? Almost as if in Planck units the electron mass is the wavevector, say $k^P_e$, 
for some "wave". (Vibration along a string, or along a wormhole, or something 
completely different?)

I should pop this bubble.

The trick was using the reduced Compton wavelength instead of the Compton 
wavelength, $\lambda_c = h/(m_e c)$. If we used the Compton wavelength all the 
Planck unit constants cancel and we get $m_e = m_e$ again, a profound result,... 
for logic.

So all we've shown is that the Compton wavelength is calculated with Planck unit 
constants.

### Recovery?

I'm not sure we can recovery anything. But the Compton wavelength *is* physical, it 
is at least associated with the "cloud" of scattering influence of an electron. So 
this is not entirely vacuous. It means the Planck scale structure of the electron is 
massive, it boosts up from the Planck scale to roughly the nucleus scale.

I mean, think about it. We've just shown that in Planck units the electron mass is 
it's wavelength. But wtf? The electron is supposed to be a tiny piece of ass.

Thinking in Planck units has provided us this little breadcrumb. 

This has been known for as long as quantum theory of electrons of course, and 
all I am doing is putting a geometric spin on it (pun intended). 

The usual textbook or internet blurb is that the Compton wavelength *is* the electron 
mass in "fundamental (Planck) units". It means you can write dimensionless versions 
of the Dirac equation to eliminate a lot of symbolic crud. But that's not profound. 
But what this blurb is not saying is what this might mean for the creative young 
physics mind.

I come back to the physics of the Compton wavelength for concerned experimentalists. 
Because it is also roughly the uncertainty relation for the electron.

Here I think we start to run into philosophical trouble maintaining that it is all 
just numerology. Why the hell would a quantum metaphysical particle obey a Heisenberg 
Uncertainty relation due to some computer's Hypergraph code, or Holography theory 
metaphysics rulebook? No!  It's all geometry. The relation is *saying to us* (I 
think) the Heisenberg Uncertainty principle is bloody spacetime geometry messing you 
up. I don't come away with much recovery from the numerology headache 
tricks${}^\ddagger$, but this is something.

${}^\ddagger$Please do not do this back to me! I like the Silver Rule, but just 
remember, I warned everyone this was just sneaky nonsense from the get-go.

By the way, if you do wish to repeat the party trick, you can do it with any of the 
relations involving mass and a length. The "classical" electron's Schwarzschild 
radius is another. For that one I guess you'd use the black-hole entropy formula and 
try to cancel the $\hbar$? But I'm not sure how, maybe that trick fails. You can't use 
the charged Reissner--Nordström because that also lacks an $\hbar$. 
I guess you could repeat the trick for the muon and tau, for the unawares.

((I did try doing such things *once* for freshman pedagogy, they hated me for it. 
Lesson learned, they are stressed enough bunnies already. "We do not want to think 
twice, sir."))


### T4G Inspirations

The little breadcrumb inspiration for T4G theory is that we have some idea about the 
electron wormhole topology, in very broad outline, fuzzed by a very smokey frosted 
glass lens of course.

When something interacts with an electron, it's a point-like mass scattering event, 
known by the typical electron cross-sections.

When we try localising the bastard it's smeared out all over the show like the Compton 
radius.

That's a wormhole signature if ever I sniffed it. (Obviously I can't see it, I smell 
it from textbooks and journal paper. No one else writes the same words you see.)
The standard interpretation, *you see*, is, "Oh, that's just ‘quantum mechanics’ 
smearing things out metaphysically." 

No it's not.

Why smearing only out to the Compton wavelength? That's not QM metaphysical 
Coping-hagen smearing, that's geometric. At least that's my story, take it or 
leave it.

You otherwise have to ask yourself why would *mass* (a gravitational-inertial concept) 
have anything to do with how quantum mechanically smeared out an electron is? It 
makes no sense in a graviton conception of gravity, but it makes perfect sense in 
GR.

Notice though, the Schwarzschild relation goes the wrong way for elementary particles: 
$$
r_s \sim 2m
$$
whereas the Kerr-Newman metric goes the right way (the string theory way),
$$
r_a \sim \frac{J}{m}.
$$

Whatever anyone says to diss the Burinskii-Carer "electron-black-hole" idea, when 
they say it, give them a slap if they're within word slapping distance will you. Send 
me the bill. There is something in all this, even if it is not very profound.


My little koan for it, for now, is,

> mass is topology, charge is topology.

What type of topology? I have no idea. Hand me that Planck microscope will ya'.

However, I can give you my naïve guess: mass is associated with the rotational energy 
in the Kerr-Newman or Wheeler-Burinskii geon, while charge is associated with the 
wormhole topology, which comes from Wheeler's "charge without charge".  Because  a 
wormhole allows photons to thread through it, the wormhole acts like a source for the 
electromagnetic field. Models the mix the photon concept and the Faraday tensor 
concept are just dumb, they're confusing you, you have to sue one or the other.

Since the Kerr-Newman metric has closed timelike curves, it's possible we do not need 
wormhole topologies for the electron.


### Angular Momentum Quantization

We've already noted the Kerr--Newman metric gives a natural account for the electron 
angular momentum,
$$
r_a = \frac{\hbar}{2mc}
$$
which gives a "natural" gyromagnetic ration $g_e = 2$. 

The spacetime algebra description explains why the rotational dynamics is described by 
a rotor, so a fermion wave-function (for the statistical characterization, or as 
Burinskii puts it, the 'order parameter").


### Charge Quantization

This leaves electric charge as the as-yet "un-geometrized" property. 
But I have always felt electric charge is just topological geometrodynamic coupling 
to photons, and if a photon cannot get within the electron's non-trivial topology 
region, or within the Kerr-Newman ring singularity, then it is not going to have an 
electromagnetic repulsion effect, and so there is 
no electrostatic self-energy for the electron here. It's all gravitational 
self-energy, at that scale. Or so I believe.

It is a puzzle, to me, that the Kerr-Newman ring singularity scale is relatively 
"large" compared to the Planck scale or classical electron radius.

The other puzzle is the origin of an electron in the first place. How is "mass" so 
congealed? How does the naked singularity form? (Questions one can ask of the 
Burinskii--Carter model.) It's not like macroscopic black holes had to first 
evaporate? (Or is it? "doodeedoodoo, doodeedoodoo...")

I don't have a problem with the raw postulate of primordial electrons, but it would 
be nice to *also* have a model of how an electron can form, rather than just it's 
structure. It's a little bit of a Catch-22, because we could form an 
electron--positron pair from photons, but then that just means the question reverts 
to how a photon can be formed.

The overall schematic lesson is that a lot of quantum mechanics seems implicit in 
general relativity, provided one is willing to peer close enough at non-trivial 
topology on about the Planck scale. Which is almost the *sine qua non* of T4G theory.

### The Dirac Equation

In another paper Burinskii suggests the Dirac equation is an emergent property of 
the Kerr--Newman electron, which arises from excitations along an axial direction 
associated with the KN ring singularity motion. I find this another not altogether 
crazy idea, worth exploring.

The motive Burinskii had was the Wheeler--Misner lightike "geons" (distinct from the 
T4G geon) which is conceived of as photons circulating under extreme gravitational 
"forces" (spacetime curvature) at the Planck scale. They effectively form a massive 
closed string, and so provide a deep spacetime rational for a form of string theory, 
although one without need for supersymmetry or extra Calabi-Yau dimensions (which is 
a good thing).

I think these ideas are still half-baked, because they postulate a pre-existing 
electromagnetic field, whereas  to me the photon (or coupling to photons) is the 
"source" of electromagnetic effects, and there is no metaphysical $F$ field tensor, 
it is an effective description of collective photon interactions.

If a Wheeler geon ring can shed photons, then it'll act as an effective source of 
electromagnetic fields. It can then be treated as such to some approximation. But 
we'd know it's just photons.

I've often wonder though, whether Wheeler--Misner geons are really cousins to 
wormhole-like T4G geons?  I think this almost has to be the case. The appeal of the 
Wheeler--Misner geons is that they give us *mass without mass*. The massless photons 
forming the ring singularity being themselves massless, but their confinement to a 
ring is a gravity source, so looks asymptotically far away (a few Compton lengths 
away) a lot like a massive particle. So this really is,
$$
m_e \sim \frac{1}{L_e}.
$$

What Burinksii shows is that a massless scalar field, treated with the electron 
black-hole KN theory, does roughly re-produce a Dirac equation. So he says the Dirac 
equation emerges from gravity, form something *like* Wheeler--Misner geons, but with 
a KN metric.

There are no raw wormholes in this model, but there are closed timelike curve paths, 
so that's all we need for a T4G theory. It is very promising.

<div style="text-align: center;"> *&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  * &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  *</div>

This entire article has mostly been about the misguided attempts to compute masses. 
But I've added now a fair bit of realism.  But it has gotten too long, so I will 
defer some of the more realist stuff for the next couple of articles, where I will 
need to grapple with the Higgs mechanism.

From the Higgs we learn that most fundamental masses arise form either Higgs symmetry 
reduction, or from interaction with the Higgs via Yukawa couplings. All other mass, 
besides putative Dark Matter, comes from interaction, such as the gluon binding 
energy.


## The Flaw in the Electrodynamics Models

This is just my personal prejudice ok, don't take it to heart if you're an 
electromagnetic supremacist.

I think taking electric charges as metaphysical fundamentals is too weird. I think 
spacetime geometry is "more natural". That's a human bias of course, since we have 
evolved to see the world through the space and time lens, possibly an illusory lens, 
who knows? But I think evolution, while capable of tricking animal and plant senses, 
is not malicious. 

((Yes, this is a Descartes type of moral argument. Got a problem with it? It is a 
negativa, so is not a terrible argument. It is not saying there has to be some active 
force preventing nature from seeming malicious. It is just saying there is no active 
force *making* nature malicious.))

Anyway, this leads me to think there is a spiritual motivation for seeking an 
explanation for electric charge (and color, SU(3) charges) in geometry, and not the other 
way around. The spiritual argument is a sincerity motive, not a rationality.

The stuff going the other way around (electrodynamic models) has all sadly (for the 
poets of electromagnetism supremacy) been superseded by QED and string theory, but I 
think young kids should have some exposure to this stuff, to know quantum mechanics 
is not all that remote from classical mechanics. 

Write to me what your thoughts are on this smarticle smasses musing. I'd be 
genuinely interested from anyone who knows about shielding effects and whatnot (which 
is 30 years dim in my past college education) as well as anyone who has a deeper non-
circular theory of either the classical electron radius or the electron rest mass.


### The aether

I love coming across current philosophy about "the aether". It's hilarious. But you dare not stare too long onto that pit of despair.

One thing the electrodynamics purists seem to always discount is that old Albert 
Einstein proved the Aether *does* exist, and simultaneously explained the absence of 
the effect of the *luminiferous aether* in the Michelson--Morley experiments.

When spacetime geometry itself is the aether, it's automatic that you will not find 
any relative motion. The photons are part of spacetime, not apart. So the fictional 
electromagnetic field variables are also going to have to appear to be spacetime 
variables, and so need not show any relative motion effects.

No one writes down electromagnetic field equations thinking they are just describing 
spacetime geometry and topology, so they continue to mistake the relation between 
special relativity and electrodynamics. The truth is (I believe) the two are the same. 
It is the form of ER=EPR, or GR=QM but without global spacetime warping. The warping 
in electrodynamics is highly local, highly discrete, and topological (I suspect). 
This is what (I believe) gives rise to charges.

I cannot rigorously lay out all of this, but it is the broad sweep of our work here 
at T4GU. The potential beautiful parsimony and elegance of it is so alluring, I fear 
at times it's my fools gold. I'd give the skin on the first millimetre tip of my left 
pinky finger for someone to come along and show me basically how T4G is all wrong.


### How this Splits the Crackpots

Let's suppose we had found a non-circular prediction of the electron mass, using 
just electromagnetism. Crackpot theorists tend to fall into two camps when they 
confront results like the above:

1. Gravity is an illusion, it's all electrodynamics!
2. Mysticism regarding how electromagnetism *is* gravity, or the other way around (as 
if the symmetry is not inherent).

I definitely fall into the second category.

However, as I hope the T4GU website makes clear, my version is not very 
mystical (\#sad).

If one was able to find a topological basis for electric charge (that'd be some 
kind of T4G theory) and a topological basis for mass (so not too distinct from 
GR, but going conservatively beyond GR) then I think you'd have a pretty decent 
low mystical quotient basis for elementary particle phenomenology.

It's worth pointing out too, that superstring/M-theory is about the same sort of 
thing, only a bit wilder and less conservative and without explaining quantum 
logic.


<table style="border-collapse: collapse; border=0;">
    <colgroup>
       <col span="1" style="width: 30%;">
       <col span="1" style="width: 25%;">
       <col span="1" style="width: 35%;">
    </colgroup>
<tr style="border: 1px solid color:#0f0f0f;">
<td style="border: 1px solid color:#0f0f0f;"><a href="../012_emergent_spacetime">Previous chapter</a></td>
<td style="border: 1px solid color:#0f0f0f; text-align:center;"><a href="../">Back to Philosophy</a></td>
<td style="border: 1px solid color:#0f0f0f; text-align:right;"><a href="../014_chargenocharge">Next chapter</a></td>
</tr>
<tr style="border: 1px solid color:#0f0f0f;">
<td style="border: 1px solid color:#0f0f0f;"><a href="../012_emergent_spacetime">Emergent Spacetime</a></td>
<td style="border: 1px solid color:#0f0f0f; text-align:center;"><a href="../">TOC</a></td>
<td style="border: 1px solid color:#0f0f0f; text-align:right;"><a href="../014_chargenocharge">Charge, No Charge</a></td>
</tr>
</table>
