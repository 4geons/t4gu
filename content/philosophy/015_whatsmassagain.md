---
title: "What's the Devil Again?"
description: ""
date: 2023-03-10
lastmod: 2023-03-10
cover: ""
coverAlt: ""
toc: true
tags: []
katex: true
---

Last two chapters I've been ruminating over mass, or more generally charge. I 
rewatched some old Susskind and had a much clearer mental picture, and will try 
to again relate it to T4G theory. Susskind of course provides a field theory 
picture, which has to at least be consistent with T4G in some sort of mapping 
from 4-geons (topology view) to their statistics (field theory view).

## Usual Caveats

Reading level: undergrad or advanced high school. Professionals should go 
elsewhere. I don't want professionals getting all pedantic on me.


## When You Translate a "Field"

When you say it like Susskind it sounds like an artifice or fabrication or too 
abstract, but the gist is that if you have a field $\phi$ and you move it 
uniformly, and that costs you no energy, then you have a massless field.

But you know, that makes total sense. It should not cost energy to move a 
massless footy field. Same turns out to be true in quantum mechanics.

On the other hand, if it costs you energy, then that's the signature of mass, the 
field is said to be a "massive" field, even though it could be very small!  
English, pfff!

Now, mathematically what goes on is that the massless field Lagrangian contains 
only derivatives, $\partial\phi$, $\partial\phi^\ast$. So when you "rotate" or 
translate (either physically or in the abstract "internal" space of the field 
parameters) you get no contribution to the action.${}^\dagger$

If the Lagrangian contains some gauged term say $A_\mu$ which when you consider a 
gauge transform adds a new term $A^2$ to the Lagrangian, then you find it will 
cost energy to move the system uniformly in one direction. That's the mass 
signature.

Then, since you cannot physically "move a field uniformly" what it means is that 
locally there can be excitations that cost some energy, in the rest frame.

Einstein taught us that energy in the rest frame **_is mass_**.  That's 
the story. 

${}^\dagger$When you think about it, this is some pretty cool justification for 
Lagrangians. I mean we know they work, but in classical mechanics it's a bit 
seat-of-the-pants hope it works (mechanical systems employing lumped parameters 
will not always admit a Lagrangian). Here in relativistic quantum mechanics we get 
Lagrangians and action principles showing us that they have some account for mass 
versus massless, which we do not get in Classical classical mechanics.

It's all because of the gauge symmetries. And in T4G that means the universal but 
local symmetries associated with the topological geon transforms.


### Higgs Redux

Actually, I did not truly cover the Higgs mechanism in the previous posts, so I will try to amend this now, so it is more of a newducks than a redux.

Let me begin with my personal bias in favour of spacetime algebra, and write the Dirac fermion theory in manifestly geometric form, we have,
$$
\nabla \psi I\sigma_3 - e A\psi = m \psi \gamma_0
$$
If the reader is unfamiliar with STA, the mapping onto the Pauli or Dirac matrix 
algebra is $i \leftrightarrow I\sigma_3$ is the role played by the unit imaginary in 
orthodox QM. The geometric interpretation is that $I\sigma_3$ is a duality 
transformation by $I$ of the bivector $\sigma_k=\gamma_0\gamma_k$ onto a bivector, 
and this bivector is the "spin plane" for the fermion. Which is subject, of course, 
to uncertainty.

The $\gamma_\mu$ are the spacetime frame basis vectors.  They map to the Dirac 
matrices $\hat{\gamma}$ via,
$$
\hat{\gamma_\mu} \ket{\psi} \longleftrightarrow \gamma_\mu \psi \gamma_0
$$

The Clifford number $I$ is the spacetime pseudoscalar 
$I=\gamma_0\gamma_1\gamma_2\gamma_3$, which gives the duality transforms between 
vectors and bivectors. And the $\sigma_{k=1,2,3}$ are the 3-space unit frame vectors 
for the Pauli algebra of 3-space.

This awesomeness of STA aside, as in orthodox fermion field theory we can split the 
Dirac equation into left and right-handed spinors (the projection operators for this 
in the STA multivector algebra are $\tfrac{1}{2}(1\pm\sigma_3)$), 
$$
\begin{array}{rl}
\nabla \psi_L I\sigma_3 - e A\psi_L\\!\\!\\! &= m\psi_R\gamma_0, \\\\
\nabla \psi_R I\sigma_3 - e A\psi_R\\!\\!\\! &= m\psi_L\gamma_0.
\end{array}
$$
Noting for massless fermions there is a decoupling, so left-handed massless fermions 
cannot mix with right-handed. (The basic idea behind thinking neutrinos do have a 
small mass is the experimental evidence for their mixing.)

The following is a bit fictitious, since we will follow Susskind's lecture and use 
the U(1) gauge symmetry, which makes it easier to write down and explain, explanation 
is the purpose, not exact theory. In the exact theory for masses the symmetry would 
be SU(2), so in STA it would involve some non-trivial rotor multivectors. The 
pedagogical advantage of U(1) is that the gauge transform is just a simple phase, 
which is a simple statistical factor multiplying the algebra, with an angular shift 
in the fermion bivector plane.

To treat the Higgs mechanism in the confines of U(1) we have to make a fictional 
supposition, which is that the fermion has no mass, and the right-handed fermion has 
no electric charge. Without a $\psi_R$ charge we will see the massless theory 
violates gauge symmetry, so is unphysical, then we will see how the Higgs fixes 
this (recovers a physical theory). That means, absent a Higgs, we'd have to toss out 
the Standard Model, it'd be an unphysical theory.

Our focus for the moment is on the $L$ and $R$ mix. A gauge transformation must leave 
the theory invariant, but for pedagogical purposes we assume only the right-handed 
fermion is charged w.r.t. the scalar field interaction with $\phi$, which means (up to 
signs of the charges),
$$
\begin{array}{rl}
\psi_L \\!\\!\\! &\mapsto e^{i\theta} \psi_L,\\\\
\psi_R \\!\\!\\! &\mapsto  \psi_R, \\\\
\phi \\!\\!\\! &\mapsto e^{i\theta} \phi
\end{array}
$$
However, if there is an interaction with the scalar field $\phi$, we can look at a 
massless fermion case, but replace the $m\psi\gamma_0$ term with the field 
interaction,
$$
\begin{array}{rl}
\nabla \psi_L I\sigma_3 - e A\psi_L\\!\\!\\! &= g \psi_R\phi \gamma_0, \\\\
\nabla \psi_R I\sigma_3 \\!\\!\\! &= g \phi^\ast\psi_L\gamma_0.
\end{array}
$$
This recovers gauge invariance (hence unitarity) so is a good quantum theory, since 
$\phi^\ast\mapsto e^{-i\theta}\phi^\ast$, so both Dirac equations remain invariant 
now under a U(1) gauge transform.

Here $g$ is the Yukawa coupling "constant" (it can vary with energy scale), while 
$\phi$ is a Higgs-like field, mass yet to be determined we suppose.

The clear interpretation available is that $g\phi^\ast$, a coupling to the scalar 
field, acts *as if* it endows the massless fermion with mass, permitting left-
handed and right-handed fermions to mix, which would be disallowed if they were 
massless particles propagating on the null light cone.

The masses thus come from the non-zero vacuum expectation value of the Higgs 
field $\langle\phi\rangle$. A high symmetry high energy physics would have 
$\langle\phi\rangle = 0$, so it is the universe being in a radiative state of low 
average energy which "breaks" that symmetry and produces the Higgs condensate, 
out of which can appear Higgs bosons with non-zero mass, which interact with the 
other particles to give them mass-like terms in the interaction Lagrangian.

Since mass is energy in the rest frame, this is all 100% compatible with general 
relativity, but deeper, since in GR one normally at the classical level has to 
"put in mass" by hand, so-to-speak, or imagine generating extreme curvatures 
somehow (although that's always using energy, i.e., mass, so does not help you 
classically explain masses).

I don't want to say, "in a nutshell," (because I do not study this stuff 
professionally) but pretty much in a nutshell this is how the Higgs is the origin 
of all fundamental masses, that is to say, all the masses in the Standard Model 
that do not arise from gluon confinement interactions or Dark Matter.


### The geometric interpretation

In the spacetime geometric algebra picture we realise all we are doing is describing multivector operators from transforming the spinors, which are 
"instructions to dilate and rotate"laboratory coordinates for measurement systems 
onto the 4-geon frame.

The Feynman vertex ersatz is thus till relevant, an the interactions must be 
geometric and topological. In the sense they must admit a topological 
interpretation, because we've used the real geometric algebra to describe all 
this Yukawa coupling. 


### Non-fundamental Masses

The Higgs mechanism accounts for mass for geons that would otherwise be massless. 
So these are what we might say are the *fundamental masses*. 

Particles that have higher energy rest states naturally have mass in their rest 
frame without the need for the Higgs. I'd call these non-fundamental particles. 
They may get excited of course in a high energy environment, say in the early 
universe, in which case in *that context* they could also be considered 
fundamental.

All of this is standard particle physics, so nothing inherently to do with T4G 
and topology.


## The T4G Picture for Mass

Putting together some of the past thinking, I can give a very naïve account of 
how mass is treated in Topological 4-Geon theory.

1. All mass is still interaction, so once we get quarks and gluons then we have 
most of the hadron masses.
2. The Higgs mechanism still functions, so we get most of the other dressed or 
fundamental masses of the otherwise massless $W$ and $Z$ bosons, the Higgs 
itself, and the fermions.
3. Mass gaps: QFT knows the above two mechanisms do not account for all known 
mass, but energy **_is_** mass in the rest frame, and so for spin$\\,>0$ 
particles there should be an energy associated with rotational motion of the 
string or 4-geon. This energy, if we could compute it, should account for all 
remaining masses (I would think).

The third mechanism here brings to mind the Burinskii-Carter Kerr--Newman model 
for a 4-geon. We have no idea if this model is truly viable, but in the 
interregnum of theoretical governing sovereignty it seems a reasonable theory 
regent.


<table style="border-collapse: collapse; border=0;">
    <colgroup>
       <col span="1" style="width: 30%;">
       <col span="1" style="width: 25%;">
       <col span="1" style="width: 35%;">
    </colgroup>
<tr style="border: 1px solid color:#0f0f0f;">
<td style="border: 1px solid color:#0f0f0f;"><a href="../014_chargenocharge">Previous chapter</a></td>
<td style="border: 1px solid color:#0f0f0f; text-align:center;"><a href="../">Back to Philosophy</a></td>
<td style="border: 1px solid color:#0f0f0f; text-align:right;"><a href="../016_gravitons_ii">Next chapter</a></td>
</tr>
<tr style="border: 1px solid color:#0f0f0f;">
<td style="border: 1px solid color:#0f0f0f;"><a href="../014_chargenocharge">Charge, No Charge</a></td>
<td style="border: 1px solid color:#0f0f0f; text-align:center;"><a href="../">TOC</a></td>
<td style="border: 1px solid color:#0f0f0f; text-align:right;"><a href="../016_gravitons_ii">Gravitons II</a></td>
</tr>
</table>
