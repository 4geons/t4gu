---
title: "Lie Truth"
date: 2023-10-20
toc_depth: 3
draft: false
katex: true
toc: true
disableTitleSeparator : true
---


> TODO:
finish this continued series on Clifford algebra for 
the Standard Model. Need to lead-in to some technical work that'll 
go later in the 
[theory pages](/t4gu/theory/).

## Brief Rotor Recap Big Picture

What looks promising is that the entire chiral standard model 
can be expressed by multivector transformations of 
STA (spacetime algebra) objects.

1. [Lasenby, 2022](https://onlinelibrary.wiley.com/doi/full/10.1002/mma.8934) 
got around to finding the octonions within the STA. (I was just about to 
do this myself, but would have struggled or failed because I did not 
have Lasenby's characteristic multivector approach to hand.) This is a 
good confluence, we are getting Chisholm & Farwell, Trayling & Baylis, 
Lounesto, Pezzaglia, Schmeikal, Dixon, Stoica, Furey${}^\ast$, Daviau & Bertrand, now together 
with Hestenes, Lasenby & Doran. Only good can come from this!
2. The $C\ell(1,3)$ algebra appears to lack chirality, and the 
"correct" metric for our cosmos seems to be the east 
coast, $C\ell(3,1)$ which seems to have natural chirality(?). (Heard the 
claim, have not myself confirmed).
3. The $\text{SU}(2)\times\text{U}(1)$ structure seems to be present in 
the STA, I will summarize below.
4. The $\text{SU}(3)$ transforms appear to require double-sided, i.e., 
sandwich products, in the STA, which is slightly unusual, because the 
sandwich products are normally the full Poincaré rotations, however... 
5. ... to find chromodynamics it seems the natural norm to take on these 
STA octonion Dirac spinor/rotors is the slightly clunky octonion norm. 
Why? As summarised below this turn out (remarkably! discovered by 
Anthony Lasenby) to be simply the statement that the Dirac timelike 
current is preserved.

The last point of note there is the current c.2023 "big breakthrough" in 
GA/STA particle physics phenomenology, from what I can tell. It *threatens* 
to unify all prior geometric algebra approaches to the elementary particles.
People are probably going to look back and say what Lasenby said was 
"obvious, we knew it all along" --- but then why were they not using 
the STA? Why were they always talking about extra exotic CY dimensions, 
or superflous Clifford dimensions, or internal fibre bundles and whatnot?
*Obviously* they did not know all along!

The point is *also* that for a realist theory of physics, we want to 
conserve particles, unless they scatter highly inelastically or 
relativistically to create anti-particles or color or flavour 
changing topologies. That means we'd want to preserve the Dirac current 
in any case, so we could have (I suppose) imagine having worked backwards 
from this based physical requirement of a T4G or any other *particle* 
theory of matter to find we need the octonion norm to be preserved.

${}^\ast$I am truly sorry if I miss anyone who has put in significant 
effort into STA/GA particle phenomenology over the years, I am only a 
skilled amateur, and it's not my business or time demand to cite everyone. 
If T4G turns out to be useful then others will fill in the details in 
reviews I imagine. But of course, I'd probably not be citing someone 
like myself! (At least not until I find a collaborator to post articles 
to the arXiv. *Hey, you reading this Johnny Baez??*)

I want to write more about Lasenby's breakthrough, but first, for pedagogy 
for lay readers, will give some background in the gauged geometry stuff, 
which is the GR side of GR$\stackrel{?}{\Rightarrow}$QM.

But just note, if you are a GA/STA novice, that list of contributors I 
began with Chisholm & Farwell and ended with Daviau & Bertrand, they all 
employ different Clifford bases.  I think Chisholm favours $C\ell_{1,6}$ 
or  $C\ell_{1,3}\otimes C\ell_{1,3}$, Trayling and Baylis $C\ell_7$, 
while Dixon and Furey go for the division algebras and tensoring of them.
There is quite a range, and it is very confusing to read them all.

Blog article here, so will try to go easy on the mathematics.


## Gauge Theory versus Scattering Amplitudes

The foundational work for the geometric algebra 
[Spin Groups as Lie Groups](http://bdml.stanford.edu/twiki/pub/Rise/GeomAlgebra/lie_groups.pdf)
approaches to particle physics have a long history, but the 
Lasenby & Doran (or Lasenby--Doran--Gull hence LDG) thread starts with their 
realization of 
[classical gravity as a spacetime gauge theory](https://arxiv.org/abs/gr-qc/0405033).

This is not a theory of gravitons take note! The gauge principle is used in 
order to by-pass the tensor calculus required in conventional tangent 
space formulations of GR. The LDG gauged geometry approach does not, to 
my mind, claim Einstein was wrong about curvature of a spacetime 
manifold being a most parsimonious explanation for the "force" of 
gravity (apparent force).

But that's just my mind. I gather that for Lasenby and others they might 
be claiming classical GR is "wrong", or at least has a competing theory 
about as parsimonious but with subtly different cosmological 
predictions, so they can be distinguished and tested.

I do not yet know if the LDG gauged gravity approach really is more 
fundamental than GR, nor do I know if the LDG approach is claiming the 
spacetime manifold is a background and is not truly deformed or curved.

But what is curved spacetime anyway?

The principle of covariance really says, in effect, if we can always 
locally see a flat Minkowski metric, but cannot parallel transport 
distantly without employing a non-trivial connection, then we define the 
ambient spacetime to be "curved". But that's just words. If the same effect 
can be formulated as a globally flat spacetime that is geometrically 
gauged, then is this not just another way of describing the same phenomenology?

Well, like I just wrote, maybe not, there might be subtle distinctions 
that could one day be testable.

That aside for now, I tend to prefer working under the presumption that 
Einstein's theory is something like actual reality, and that there are 
just different mathematical languages for describing dynamical 
effects of spacetime curvature. A geometric gauge of a flat ambient 
spacetime being one of them.

Also, from the 
[“Gravity, Gauge Theories and Geometric Algebra”](https://arxiv.org/pdf/gr-qc/0405033.pdf) paper 
there are too many compelling reasons to dismiss the gauged geometry 
model, they get black hole entropy from Dirac, and other nice results. 
More to the point today, it dovetails nicely with the emerging confluence 
around geometric algebra models for the elementary particles of the 
Standard Model.

To sum up the status of Gauge Theory Gravity (GTG) versus GR, my 
non-expert understanding is that locally they are equivalent formulations 
of gravity, but globally differ, but within classic GR context one can 
say GTG is equivalent to Einstein--Cartan--Kibble-Sciama (ECKS) theory, or 
what is known as Spin--Torsion gravity. As such, I take GTG to be a more 
general model than GR, but still fully compatible with T4G theory. 
In fact I tend to drop the distinction, and just say I use "GR" more 
loosely than is technically correct to refer to any of this class of models.

Torsion relates to spin, and so better permits structures in quantum 
mechanics to enter a GR framework. This is possible because ECKS is 
locally gauged whereas classical GR is not. But ECKS gravity is still 
purely classical mechanics -- because, to us T4G folks, there are no 
closed timelike curves.  The short story is we would be forced to 
choose ECKS over classic GR in order to admit spinors in curved spacetime.

What are spinors? Well, no one quite knew until Hestenes and others 
showed spinors are simply *scaled rotors*.${}^\dagger$ And what are those? 
They turn out to be simply instructions. Instructions to dilate and rotate other 
multivectors. In other words, while they might relate to "particle phenomena" 
they are not particles.

The electron and neutrino and quarks are not spinors. But to describe 
measurement theories involving fermionic matter we need spinors. 

${}^\dagger$This newsflash has been extremely slow to spread in the wider 
physics community. No Conspiracy Theory here, just a banal matter of 
fact of life.  In sociology of science terms it is quite an interesting 
case study for a prospective history of science PhD.  It is natural that 
ECKS theory resurfaced in the GA/STA community not just because GTG turns 
out to be Spin--Torsion gravity, but also because  the STA makes all 
the mathematics relatively simple, almost "childs play" for a 
reasonably talented but not exceptional physics student. 
(I jest here, but...) super talented mathematicians might simply scoff 
at the simplicity of GA/STA and laugh as "Not being *real mens* hairy 
chest physics" or something like that, I do not really know. But they 
are missing out.




### Particles and Spacetime 

The thing about this, and I think this is critical to T4G, is that 
we regard the spacetime as the background, but it is active and dynamic, 
which is a little different to String Theory. In String Theory the strings 
merely "live on" the background spacetime, and their gravitational 
influence provides the geometric gauge or curvature.

From henceforward I will take liberties in assuming for most practical 
purposes spacetime curvature is equivalent to a geometric gauge principle, 
and not make a fuss about possible physically meaningful distinctions. 
Whether that is an egregious presumption or not I cannot tell. If it 
matters some nerd will probably eventually tell me.

In T4G theory the elementary particles are the topology of the spacetime, 
which is more active and more dynamic than in the String Theory picture 
of elementary particles as extended objects.

The first casualty of T4G is of course we get closed timelike curves, CTCs. 
However, the T4G approach is to turn this bug into a feature. From CTCs 
confined to about the Planck scale, we get the possibility of superposition 
effects, or more specifically, in statistical accounts of acausal 
spacetime dynamics we have to employ non-Kolmogorov probabilities, which 
in orthodox parlance means using amplitudes and sum-over-possible-histories.

Really that is one of the main differences between QM derived from T4G and 
QM assumed by axiom. In the axiomatic framework non-Kolmogorov probability 
amplitudes and superpositions are postulated. In T4G we derive them from 
the acausal structure of T4G spacetime:

> Orthodox QM uses **SOH** (all histories occur postulate).   
<br>
T4G uses **SOPH** (only possible histories are postulated, not all need 
actually occur).

They are of course computationally and empirically (I think, to first 
order anyway) equivalent, because the Feynman--Hibbs SOH includes all 
possible histories, and the T4G SOPH cannot exclude possible histories 
unless we have data to say otherwise, which we generally do not have.

This is the essence of the Two-Slit experiment. If we have the data that 
both slits have not been traversed, then we exclude them from the SOPH. 
But so would Feynman & Hibbs! Why? Because they're not dummies.

Or more exactly, because orthodox QM tells them to rejig the SOH program 
if past boundary data is known, they have to start the SOH from scratch 
if stuff gets measurement recorded. This does not contradict the acausal 
spacetime dynamics of T4G. There are time machines in T4G, but not Time 
Machines.

By this I mean, the CTC structure permits elementary geons to time travel 
along the ER=EPR wormholes, or the elementary particle wormhole structures 
themselves, but nothing can travel back in time and *change* the past. The 
present already knows about all the signals being sent back in time from the 
causal future. They're already here. 

Now this might sound like a dudes favourite way to have time travel in a 
scifi movie, but I've not ever found a decent more parsimonious alternative.

By the way, all of this T4G stuff is, to my knowledge, entirely unknown 
in the Hestenes, Lasenby, Doran GA/STA community. I wish that they'd come 
across this, because they'd be the ones far more able than myself to 
complete the T4G program, if there is something here to T4G that can 
be completed.

### Collapse or Updating?

According to T4G theory, the reaosn we get a so-called "collapse of the 
wavefunction" is nothing more mysterious than a need to update our data.
Because all effects of CTCs have to be incorporated into our present data, 
whenever boundary conditions are *known to change* we have to make a data 
update. Ordinarily this is just classical statistical mechanics, but in 
T4G theory we have signals from the future light cone to account for too, 
and because we cannot know this data we are forced to employ 
non-Kolmogorov probability.

The source of the wave-function collapse is however entirely banal in T4G 
theory.  It is just resetting or updating our data on the past Cauchy 
hypersurface according to what measurement data we have available. Time 
travelling geons in T4G cannot change this data, since they are already 
recorded. It is akin to a 4D Block Universe perspective, but with CTC 
effects --- meaning the past light cone data is never sufficient to 
predict our *classically* causal light cone future.

Causality still holds however, locally, it just has to also take into 
account possible CTC effects. Because these effects are presumed confined 
to the Planck scale, there are no macroscopic time travel paradoxes. 
One could poetically and whimsically restate this by saying elementary 
particles have no free will, because they are subject to time travel, 
whereas macroscopic entities like animals and humans can still exert 
free will (whatever that means) precisely (or partly) because we have 
no possible access to time machines to contradict ourselves. The 
experiments of 
[Günter Nimtz and colleagues](https://doi.org/10.1051/jp1:1992236) 
sending Mozart's 40th Symphony forward in time are a case in point. 
The tunnelling electrons had no choice in the matter, they were going to 
play Mozart. Nimtz and his postdocs did have a choice, but could not 
travel back in time to  tell themselves not to send Mozart through the 
barrier.

Notice Nimtz et al only can prove they send wave packets through a barrier 
superluminally, they cannot point to any individual electron. However, in 
a T4G picture the wave packets are composed of elementary geon or quanta, 
so *some of the electrons* had to be travelling along superluminal paths. 
That can only occur in a GR spacetime if there exist closed timelike curves.
Meaning simply that the Nimtz experiments are fully compatible with 
T4G theory (though not a proof of T4G, but certainly a prediction that 
has been born out true).

An omniscient observer who can see the 4D Block Universe as a whole does not 
need to do quantum mechanics of course. They do not need to do any mechanics, 
but if they were to, as a game perhaps, describe the universe mathematically 
as a Hamiltonian time evolution, then they too would be forced to use the 
tools of quantum mechanics.

### Whence the Graviton?

In the GA/STA models, gravity is still a spacetime curvature effect, it is 
not a boson exchange force. The geometric gauge is not "carried" by a 
graviton. Hence there is no need to *quantize gravity*. In T4G we 
recognize this *doubly so*, so-to-speak, because we also recognize gravity is 
already a quantum theory. This is because in T4G quantum physics is all 
spacetime geometry. But not *classical* Classical, it is classical spacetime 
geometry but with all the gnarly effects of CTCs. 

However, if we could localise gravity sufficiently then we would effectively 
have gravitons, rather than gravity waves (a semantic difference?) in which 
case we could write down scattering amplitudes for gravitons and such like. 
I do not know if we could solve them, but we could write them down and 
assume "Nature knows how to" solve them.  What we'd be interested in would 
be whatever approximate methods we could find to compute the amplitudes. 
However, we are unlikely to ever need to do such calculations because we 
cannot yet engineer highly localised gravitational disturbances. (And for 
practical applied T4G most highly localized spacetime curvature 
disturbances would be hidden behind black hole horizons I think.)

But wait! In T4G theory, all the other elementary particles, essentially, 
in a highly based metaphysics ontological way *are* gravitational 
disturbances, just not entirely of curvature, but of topology. 

> This is, I think, **_the_** unifying principle of fundamental physics.  
Susskind was right all along, quantum mechanics *is* gravity.  
Mark Hadley knew this before Susskind.


### A Good Old Laundry Listing 

Hestenes' [review of GTG](https://arxiv.org/pdf/0807.0060.pdf) provides a 
decent enough state-of-the-art up to before Lasenby's breakthrough. 
Hestenes has quite the list of achievements and *changes of view* 
arising from GTG. These were not easily afforded by tensor algebra 
formulations of spin--torsion ECKS gravity, for obvious reasons 
(too darn complicated to spot).

1. As previously alluded to, GTG is a Spin--Torsion theory, so can 
incorporate spinors in a curved spacetime.  This is vital for getting a 
proper Dirac theory compatible with GR (recall for me "GR" is the whole 
class of gravity theories), so is a vital step for unifying gravity 
with electroweak theory. 
2. Black Hole horizons are much better treated and understood in 
GTG context.
3. The Kerr metric has a very simple derivation and form in GTG, 
making numerical simulation exceptionally simple and accessible.
Also illuminating the key idea that the Riemann curvature should properly 
be regarded as a function of position and a bivector. (I write "properly" 
just because it is simpler and more perspicuous.)
4. The Reissner--Nrdström solution reveals how the 
self-energy problem for electromagnetism gets curved with gravity! That's 
pretty awesome, who knew gravity and electromagnetism were so deeply 
compatible? And without resorting to a Kaluza--Klein model.
5. The object of primary focus in GTG is the Dirac spinor, not the 
spacetime line element (shock & horror for the textbooks!).
6. Part of the simplicity of GTG is that one can always use rectilinear 
coordinate frames, all the geodesics and whatnot are handled by the 
gauging. 
7. The Principle of Covariance gets replaced by (perhaps a sharper) notion 
of **Displacement Gauge Invariance** and the Principle of Equivalence 
gets replaced by a (perhaps sharper) notion of **Rotation Gauge Covariance**.

Of course I am just acting as a stenographer here, you'd best not trust me 
and dig into all these claims for yourself.


The latter two principles for GTG are worth stating right now:

> **Displacement Gauge Invariance** --- *The equations of physics are invariant under arbitrary smooth remappings of events onto spacetime.*

> **Rotation Gauge Covariance** --- *The equations of physics are covariant under Lorentz rotations.*

That's it! That's Einstein modernized.

For lay readers, an Invariance in mathematical physics normally refers to 
a general symmetry, or global symmetry. Whereas Covariance refers 
specifically to invariance under coordinate transformations. You might 
well wonder what's the difference here? I'm no expert, but I believe 
the difference is that "an arbitrary remapping" is far more severe and 
radical potentially than mere coordinate transform. 

A coordinate transform is applied globally. An 
*arbitrary but smooth remapping* is a far more general notion, which 
could include a coordinate transform, but does not have to be global.

But the way I think of the two principles, because I guess I am 90% 
physicist and only 10% mathematician, is that the 2nd principle of 
*Rotation Gauge Covariance* 
is about the observers: relative moving observers should agree on the 
laws of physics. You know this because the principle explicitly stipulates 
the Lorentz transforms, **_not_** "arbitrary remappings".

The first principle *Displacement Gauge Invariance* is slightly deeper 
I think, I think others call it diffeomorphism invariance.  It is more 
about the lawfulness of the cosmos in some sense, not about observers 
needing to agree. To permit some poetry, it is about putative gods 
wanting to agree they are running their branch of the universe in 
conformance with fixed laws of Nature. You can remap all the spacetime 
events around smoothly, but untwisting them needs to bring things back to 
normal after Dr Strange or Wanda Maximoff warped everything like taffy. 

But you are not allowed to do a Thanos *Reality Stone* slice & dice, 
that's a no-go. (Not a smooth remapping.)

This sort of Salvador Dali melting or taffy warping metaphor is pretty 
good I think. The important part of it is that everybody who gets 
horrifically warped feels no pain, there are no physical consequences, 
since in some senses it is juts a relabelling of events, like a change 
in dictionary from German to French. Linguists will hate me for that, 
but it's only poetic analogy ok.

To be clear, this warping is in a sense non-physical. It is **_not_** at 
all the same as getting warped and excruciatingly painfully stretched into 
spaghetti when you fall into an extreme gravitational well region like near 
a neutron star or black hole. That would be an actual physical warping, 
which is not "arbitrary" because it'd be seen or inferred in any 
coordinate system and in in any smooth remapping of events.


## To Be Continued?

This post is getting a bit lengthy. Maybe I need a "Lie Beauty" article? 
It's getting ridiculous. However, I do plan to abbreviate all of this 
discussion in the [Theory pages](/t4gu/theory/)
later, where I can be more succinct.


<table style="border-collapse: collapse; border=0;">
    <colgroup>
       <col span="1" style="width: 25%;">
       <col span="1" style="width: 15%;">
       <col span="1" style="width: 25%;">
    </colgroup>
<tr style="border: 1px solid color:#0f0f0f;">
<td style="border: 1px solid color:#0f0f0f;">
<a href="../48_lie_fury">Previous chapter</a></td>
<td style="border: 1px solid color:#0f0f0f; text-align:center;">
<a href="../">Back to Blog</a></td>
<td style="border: 1px solid color:#0f0f0f; text-align:right;">
<a href="../50_lie_beauty">Next post</a></td>
</tr>
<tr style="border: 1px solid color:#0f0f0f;">
<td style="border: 1px solid color:#0f0f0f;">
<a href="../48_lie_fury">Lie Fury</a></td>
<td style="border: 1px solid color:#0f0f0f; text-align:center;">
<a href="../">TOC</a></td>
<td style="border: 1px solid color:#0f0f0f; text-align:right;">
<a href="../50_lie_beauty">Lie Beauty</a></td>
</tr>
</table>

