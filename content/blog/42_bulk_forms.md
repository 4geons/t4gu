---
title: "Bulk Forms"
date: 2023-08-16
toc_depth: 3
draft: false
katex: true
toc: true
disableTitleSeparator : true
---

The blog posts are informal, but this one is probably going to be even more 
impressionistic than usual, since I'm writing today about some fairly inchoate ideas. Friendly warning.

## An Appeal

If you are an expert on this topic, and see I've got something horribly wrong, 
please let me know.

## Arkani-Hamed's Amplituhedrons

Longer time readers will know I am a big fan of the Amplituhedron program, 
which I consider to be the rightful heir of the defunct $S$-Matrix program of 
the 1960's.  What is great about it is that it makes manifest the particle 
view of nature. Particles are where it's all at, and the "quantum fields" 
are fictional, but useful, accounting tools.

This raises natural questions about why the $S$-matrix program failed, and 
how the Amplituhedron program can succeed. Although I am not qualified to 
supply any answers, maybe I can give some impressions.

### Kinematic Doom

One reason the $S$-Matrix program was doomed is that it was essentially 
a kinematic view of the world, and was trying to deduce the things going on 
inside the black box of a particle collider (generalized collider, meaning 
any system in our world where particles go into, and others come out of, a 
closed box) by only looking at what went in, and what came out.

It was a fair enough Hail Mary to suppose this was possible. But it was the 
enlightened pessimists prerogative to assume it would fail. There is not 
enough information in scattering amplitudes to deduce what's going on inside 
the box. It is an ill-posed problem, a nasty Inverse problem, or like having 
$n$ equations but $m>n$ unknowns. But particle physicists did not know this, so 
it was not stupid to try.

### The kinematic variables

The amplituhedron program as presented by Arkani-Hamed, you'd be forgiven 
for thinking, is one of those "emergent spacetime" theories.

It is no such thing.

In fact, I truly cringe at the way Arkani-Hamed at times seems to imply 
the "doom of spacetime" and amps up the "kinematic variable supremacy."

The thing is, the kinematic variables are defined from the momenta. But the 
momenta imply a spacetime already, you cannot emerge a spacetime out of the 
kinematic variables. It's cheating.

What the Amplitudista's are seeing is a more beautiful geometric 
structure in kinematic space (KinSpace) compared to real spacetime. 
But so what?
Greater beauty does not imply greater ontological primacy.

You only ever know all the positive geometry amplituhedra correspond to 
physics because you've associated them with real momenta.

But what does "real" mean in this context? It is all real. The kinematic 
variables are just a different way of organizing our knowledge about events 
in spacetime. The primitive notion all kids can understand is the massless 
case where the sum of the momenta are zero, so a closed bounded shape is 
formed. When you sum up the momenta cyclically in order the result is a 
polytope. 

It's the physics driving the geometry here, not the other way around. There 
is no cause to revert to Pythagorean metaphysics yet my friends! The 
physics is still the physics of spacetime.


### Amplituhedra Duals

Amplituhedra are dual geometries to Feynman diagrams, very roughly speaking. 
The scattering amplitude is (impressionistically) the volume of the 
associated polytope. This is not a perfectly accurate description, but gives 
you the right kind of impressionistic flavour, which is mostly all I need 
for this blog post.

More precisely, the amplituhedron "lives" in kinematic space, not the 
--time $(t,\vec{x})$ space of the Feynman diagrams.  So they're not really 
duals to Feynman diagrams. If we draw the scattered momenta in kinematic 
variable space (KinSpace) then mess around a bit, identifying boundaries 
of polytopes in KinSpace with poles in the scattering amplitudes, then we 
find areas or vilume forms associated with the polytopes in KinSpace are 
the amplitudes, or forms for the amplitudes.

Slicing up the amplituhedron into geometric simplicies enables relatively 
simple expressions for the volume. How we carve up the volume has to conform 
to basic physical principles. 

Because the amplituhedron is dual (in some sense) to Feynman diagrams, they 
capture particle dynamics, not just kinematics. It is not just an 
input--output black box Rube-Goldberg machine. 

By the way, "amplituhedron" is now, I think, a little passé. It was the 
early incantation of what might be now simply 
"Positive Geometry of Scattering Forms".  Today also Clusterhedra --- which 
occupy a slightly different abstract space to the kinematic variables --- 
are to the fore.

But I still often use "Amplituhedron" for the umbrella term for al these 
ideas.  So "amplituhedron" and "positive geometry of scattering forms" are, in 
my head, synonyms.

### Positivity

Why is this notion of *positivity* thrown around all over the custerhedron 
program? 

I cannot yet explain this perfectly clearly, but roughly speaking it is about 
the poles in the Feynman propagators. Things go "on-shell" at the poles, 
meaning the amplitudes "blow-up" and become the significant components in 
the Feynman expansions.

There are many other ways to think about this, say in terms of dominant Fourier 
modes, or in terms of resonances (longer lived virtual particles, more likely 
to get promoted to real out-going particles). The classical physicists seem 
to have known more about this than today's students! They understood the 
Fourier components in frequency (energy) space had to have good analytic 
properties otherwise in the time domain it'd be an exponential blow-up, and 
so unphysical. In quantum mechanics that all translates impressionistically, 
back to the requirement for simple pole structure.

Positivity (in the kinematic space, KinSpace) is thus mostly all about 
the pole structure being "well-behaved".

In more rigorous terms, what it boils down to is requiring the poles sit 
on the boundaries of physical KinSpace. So then, if there is smoothness or 
analyticity, either everything inside the boundaries is negative, or it's 
all positive. The convention is that we take it to be positive. 

What about the pay-offs?

This is the remarkable thing. The way Nima Arkani-Hamed lectures i sound 
almost like miracles, but this positive geometry point of view seems to 
"know about" more than just Locality + Unitarity + Causality. It seems to also 
know about projective invariance and few other hidden symmetries.

These are what seem to allow the Feynman diagram calculations to drastically 
simplify down from the 500 page variety to a single line.

## A Wild Idea

While casually, very casually, studying Nima Arkani-Hamed's program, I 
keep running into a coupe of mental blocks.

1. One is that I want to get my hands dirty and recast all of the 
amplituhedron mathematics into spacetime algebra. I want to thoroughly banish 
all the index notation crap. But I know this is a tedious 
task, so I demure. However, it still gnaws at me.
2. I cannot help wondering how T4G wormholes, or ER=EPR bridges come into the 
amplituhedron picture?

A very cool thing about Task 1 is that we can use Projective Geometric Algebra 
tools for this, which are so elegant and simple they make me almost want to 
orgasm.

It is the second musing I want to write more about.

The issue for me is that we should not need amplituhedra nor Feynman diagrams 
if the world were classical. But upon initial impression the scattering 
amplitudes do not seem to be exploiting much quantum mechanics. A lot of it 
has a very classical kinematic and conservation law flavour to it.

In fact, as Arkani-Hamed points out every set of lectures, the Amplituhedra 
make "Locality manifest".

That means no action at a distance. No fields. All is just point-like 
scattering amplitude, or string worldsheet geometry if you prefer.

The quantum fields arise as computational tools when we demand Hamiltonian 
time evolution, or desire a Lagrangian description. Something has to 
propagate the information off the past Cauchy hypersurfaces, and if there 
are closed timelike curves or loops involved in the dynamics --- as there must 
be if we adopt a sum-over-histories formalism, taking it seriously (there are 
off-shell processes viewed from a strict Minkowski space approximate stand-point) 
--- then we simply cannot tell a relativistic particle-only story, and the 
string worldsheet story has to get totally messed up.

Introducing field variables allows us to avoid all that mess: we can ignore 
closed time-like curves, put everything back on-shell in the final result 
(think of the messy stuff as "virtual particles") and smooth out the string 
worldsheet.

But the field variables are a fiction, a crutch. Well... that's what 
Arkani-Hamed thinks, and I agree.  Probably Feynman would too.

It is a bit of an important psychological hurdle to overcome. Most mathy 
nerds tend to think that the more elegant simpler mathematics is a clue to 
the real physics. But this is simply not true.

In any case, I think introducing fields makes the mathematics worse, less 
elegant. If you listen to Arkani-Hamed's online presentations you will hear 
him talk about this in terms of the need in the field theoretic picture for 
polarization tensors. He points out these are truly nasty. They introduce 
gauge redundancy, which is a sure indication you have not described the 
physics correctly.

Young theoretical physicists might not comprehend the problem, since they 
get educated these days to swallow gauge theory whole cloth, without 
critical thought. But a humdrum plain old engineer knows the deal here. Even 
a humble plumber.

The theoretical physicist thinks gauge fields are so cool, after all, the 
associated symmetries seem to describe nature so well, it has to be right, 
right?

Yes, but you can still have the symmetries without needing the gauge freedom.

Inserting gauge fields is a way of getting the correct interactions into 
your Lagrangian. But what they are describing ultimately are the lower 
level scattering processes. In a very broad brush sense, you have to then 
permit gauge redundancies because you have given up on tracking the 
fundamental particles.

The humble plumber knows they have a pressure gauge, but they also know 
absolute pressure is still a thing. The gauge is a convenience, not ultimate 
reality. Pressure in a fluid does ultimately depend only upon motion of atoms.
The humble plumber is thus implicitly an Amplituhdronista, not a QFTista.

What is the wild idea?

Well, I wanted to see how ER=EPR wormholes can get into amplituhedra?

Obviously I think the injection of wormholes has to have something to do with 
the topology, which in an ampituhedron picture has something to do with 
the quantum mechanical aspects of the amplituhedra, not the classical aspects. 
I have not really grasped what these are yet.  Still learning.

In the Feynman diagram picture of reality this has a lot to do with 
off-shell processes, hence the virtual particle stuff. In some ways, I suspect, 
this is *almost all* it is!

Everything on-shell, after all, is classical. At least up to superpositions.

In the T4G theory, the superpositions are epistemological though, and also 
arise due to ER=EPR topology, via the closed timelike curves. It's the CTCs 
that provide the means for off-shell processes to be realized. (As in real, 
not virtual).

As Lenny Susskind put it one time in his TTM lectures (I paraphrase):
> "What happens if the virtual particle  ends up getting bumped out of the 
loops?" --- without much pause he answered, nonchalantly with no great 
emphasis, "Then it has become a real particle."

((Sorry, no timestamp and no link for that.))

Which means the virtual particle was never truly virtual to begin with. But 
the accounting tools of the off-shell processes need to still be summed, because 
of the mere *potential* for inside-the-black-box topology mess to pop out 
odd stuff in the out-going scattering.


### Impressions in the Spacetime Fabric

Again impressionistically, the way I am currently thinking about the 
ER=EPR wormholes, is that they are what provide nature with the capacity 
to explore the entire amplituhedron geometry. The entire kinematical 
momentum--spin space, in other words.

Classically we just cannot have any such complexity. In Newtonian classical 
mechanics the amplituhedra are trivial, generically there is only one way 
things can scatter, so there is only one amplitude and its value is $1.0$.

(Non-generically we can be prepared to admit critical phenomena where Newtonian 
dynamics are not deterministic, which is roughly the Clay Institute 
Millennial Prize problem for the Navier-Stokes equation. But it is the 
completely generic case that is all important here, for fundamental theory.)

Quantum mechanics, the bare formalism, "says" (by axiom) that we must allow 
for anything unitary to occur. Hence sum-over-histories, or the equivalent, is 
what rules.

But this is bare formalism: The Merovingian (paraphrasing):
> "You come to me without a reason, without a 'why'. You think you know why, 
but do you? You are here because you were sent here, you were told to come 
here and you obeyed." 

That's orthodox quantum mechanics for you! A means to an end, but you know 
not how and you know not why.

With T4G I am trying to give you a little bit of a how and why. It might not 
be correct, but it is more than nothing. Although who was it in politics who 
said, "If that's all you've got, then we are better off doing nothing!"  --- 
I even forget the context, it was in the UK I think, labour unions perhaps 
confronting the neoliberal power elites? In any case, I think T4G is a darn 
sight better than nothing.

### More Impressions

Nima wants to see if spacetime can "emerge" from the kinematic space 
or *positive geometry* formalism.  But I don't think that's the right way to 
think about the insights. It could be, but I doubt it, spacetime still is 
the arena, I feel.

Why? Just because to tlak about "momenta" in the first place is a 
spacetime concept. You've already admitted there is  a spacetime Nima!
I know the idea he means though: he wants to somehow think of the momentum 
variables as "the stuff of reality" independent of a notion of spacetime. 
That's fine. I just don't quite see it that way yet.


But what's very interesting Positive Geometry seems to encode more than 
standard quantum mechanics + relativity, since we have:

* **Locality** --- the only poles are non-crossing chords in KinSpace. 
Or... the diagrams for the allowed fundamental processes are triangulations of 
the positive geometries.
* **Unitarity** --- the positive geometry diagrams factorize.
* **Projective Invariance** --- amplitudes depend on ratios of momentum 
variables.
* **Polytopality** --- I don't know what Arkani-Hamed means by this, but 
supposedly it's a profound "discovery" that the shapes corresponding to 
interiors of the kinematc variables, have boundaries corresponding to the 
poles, and somehow this is profound that the interiors describe polytopes. 

I think the polytopality is impressionistically, something about compactness 
and completeness or space-filling, or tiling. Up to topological holes that is, 
the clusterhedra have to cover all the possible ways particles can scatter 
yielding the given desired asymptotic momenta, 

All four concepts are "manifest" in the Positive Geometry KinSpace 
formalism. (Nima's favourite word, "manifest".)

Compare with Feynman diagrams: Locality is understood in Feynman diagrams in 
the fact all the vertices are drawn in spacetime (they're localised) so 
locality is "manifest".
Factorization is understood in Feynman diagrams, just in simple terms of having 
to multiply probabilities for independent events.  Unitarity is, in other 
words, the quantum mechanics in Feynman diagrams, the probabilities sum 
to unity.

It is Projective Invariance that Feynman diagrams "do not know about".

So Nima seems to want to not assume causality, locality, unitarity
spacetime, and quantum mechanics, but wants instead to get these out of 
something from the Positive geometry. **_Is this the opposite of the $S$-matrix program?_** Well, maybe that is one way of seeing it.

My taste is to go in the "normal" direction **_from_** locality, unitarity
spacetime, and quantum mechanics, to the scattering rules and 
positive geometry, the opposite to Nima. Except, I have T4G! So I think I 
will not need to put QM in, I can get QM out! In this sense, I am half in 
agreement with Arkani-Hamed, I think, about useful research directions.


## Some Useful Concepts

Another thing I like about Nima's talks is the basic little insights he gives 
into being an informed fundamental physicist.

### Locality for Tree Level

A good example is how he explains at *tree level* in the Feynman diagrams the 
concept of Locality is entirely encapsulated by where poles in the scattering 
amplitudes can be. The answer (for tree level only) is they are where some subset 
of the momenta goes on-shell:
$$
\left(\sum_{\text{subset}} p_i \right)^2 = m^2
$$
but then he explains this corresponds to locality because it's saying 
it's when you produce a particle, it goes a long distance, then decays 
somewhere else.

However, that sounds like factorization to me! So unitarity. But they are 
related. Locality and unitarity are a lot like two sides of a coin.
Another way to see this poetically is that if fundamental processes are 
local, then it's darn hard to "leak probability". If they're strictly local, 
and always factor, so any intermediate virtual particle can go on-shell, 
then you really cannot have leaking or injecting of probability. 
The world is safe!

The mathy way of saying this is that at *tree level* all the poles have to 
be "logarithmic, or simple poles.

At Feynman one-loop level things are already not so simple, since now the pole 
structure is more complicated, and we can get branch cuts as well as simple 
poles.

However, why tree-level is so important is because we must have consistent 
physics even at tree level (in the event no loops occur for whatever dumb 
reason). This is the basis for the Weinberg--Witten soft scattering theorems 
that prove nature cannot have more than the four fundamental forces, 
electromagnetism, Yang -Mills and gravity **_and_** that gravity 
is *universal*.


### Forms and Amplitudes

I personally think it is fascinating and critical that a focus for the 
amplituhedron program is placed on using the scattering forms rather than the 
amplitudes.

The $n$-forms are of course more closely related to geometry --- *and the orientation* -- and the latter is something Nima does not emphasise enough. 
I think that's probably because he comes from a tensor index background, not 
a Clifford algebra background.  But the orientation of the geometric forms 
is critical, I think. 

But why? (Apart from utility.) This I cannot yet quite explain. But I'm 
working (thinking/daydreaming) on how to best express it.

The way Nima says it is that the pole structure of the amplitudes (functions) 
and hence their forms is critical for the physics. But a function (amplitude) 
does not have any residues. It's only the Form that can have a residue (from 
the contour integral). OK, but that begs the question why should we be 
interested in the residues?

Nima does not give much of a physics clue here. Just that both the residues 
and the poles have geometric counterparts in the polytopes and 
positive geometries in KinSpace. Further, it is the Forms associated 
**_with the boundaries_** of the positive geometry shapes which are where 
the amplitudes come from. Furthermore, this all seems to drop out of asking 
certain **_combinatorial_** questions of the KinSpace geometry.

But that's all, not much of a clue. But it's a great start.

However, what we are interested in are the singularities of the functions 
and the forms *of the polytopes and positive geometries* since they are what 
we are drawn to be interested in, since they seem to be what correspond to 
the physics: to the locality, causality and unitarity. 

In a sense this all sounds almost trivial, though, right?

It had to be this way?? If we draw any abstract kinematic space geometry, it 
better have singularities that correspond to interesting physics. For if not, 
then in physics it'd be a crazy world where "anything goes".

Lately I've been wondering a lot about the combinatorial aspects, since 
this is probably what I least understand, or least in connection to 
spacetime physics.  I sort of get, without grokking, the poles and 
singularities connection --- that's just "going on-shell" --- which 
means in plainer English "doing a collider experiment"


The combinatorial aspects of the Form and positive geometry are 
"quantum mechanical" in my mind, they *are* the quantum mechanics.

Why? Because the fact we are talking at all about summing Feynman diagrams, 
means we've got superposition, or sum-over-histories.

The fact T4G theory claims most of the quantum mechanics is spacetime topology 
knits very well with this impressionistic concept that gluing spacetime 
chunks together is what it is all about. But I cannot easily see how the real 
spacetime gluing and topology gets related to the positive geometry KinSpace 
gluing and chunking. I'm not sure I have the time left in life to ever get 
there, but it's what I now think about a lot.


## More Waffle - Clusterhedra

Can I get more vague? Maybe. You see what I cannot help thinking about is 
how connectedness and space-filling polytopes and clusterhedra arise in 
T4G theory.

Clusterhedra are, by the way, a sort of more modern incantation of the old 
amplituhedra. Previously I've used the term amplituhedra only for the brand 
value! The more based idea is *positive geometry*. The idea I get (and I 
cannot be sure this is accurate, so take with a grain of salt) is that the 
*positive geometries* are what we get from geometrizing the kinematic 
momentum variable space for scattering processes.

I mean... this is incredibly impressionistic and vague, but very roughly all 
the following physical ideas are sort-of related:

* We live in a Minkowski space, or pseudo-Reimannian manifold if we're 
doing GR. Thus we live in light cones, unless we are equipped with wormholes 
to traverse.
* Ultimately all scattering outcomes are on-shell, $p^2 = m^2$.
* Unitarity is king --- we don't leak or gain probability.
* Locality --- physics is fundamentally local. Quantum non-locality occurs via 
entanglement, or ER=EPR effects, not via "quantum jumps" and whatnot, there 
are no such things.

The sorts of geometric ideas these concepts should trigger are things like 
compactness, finiteness, conservation or invariance, and local symmetry.

So I have this wild idea that the reason clusterhedra and the like are 
tiling, and that the simplicies of the amplituhedra are composed by building 
up adjacent forms in kinematic space, is because nature cannot just 
arbitrarily implement any old Feynman diagram process.

The idea is that for any particular Feynman diagram process to occur, a 
very closely related diagram has to have been actually realized. Forgive 
the redundancy, it is deliberate for emphasis!

To make a more concrete statement, what I would say is that it is 
*because* the Feynman diagrams are wormhole mediated that we get a regularity 
and connectedness in kinematic space, and also space-filling clusterhedra.
Arkani-Hamed is correct that the Feynman diagrams are a clumsy way of 
classifying the processes, and the kinematic variables in KinSpace are 
more natural for revealing how the fundamental processes are topologically 
connected. In a T4G theorists mind, they *have to be connected* because the 
only way of getting to one sort of Feynman process is from a nearby one, and 
"nearby" has to (from T4G perspectives) be in KinSpace and mediated by an 
ER traversal or similar. 

The cool thing is this is not airy-fairy metaphysics. It is very concrete. 
It's just the way I have presently expressed it all in English language is 
too airy-fairy. I hope you can still see that there is concrete stuff here 
for a bright young theorist to consider working on and formalize (should they 
not be worried about academic promotion and whatnot).

The idea being in nature, if we were a Laplacian daemon, peering down at 
the Feynman vertex level of reality, we would not see some random Feynman 
graph pop into existence, rather we'd see it manifested out of simpler 
diagrams, in "real-time" so-to-speak.

Due to the effects of closed time-like curves in the T4G picture of all this, 
we do not have to assume these real-time constructions of Feynman diagrams 
occurs temporally, they can "emerge" atemporally to some degree. That means 
off-shell diagrams are permitted.

I think this is all suitably crazy to merit "not even being a crackpot". 
Nevertheless, I somehow had to write this all down in case there's even a 
faint germ of truth to any of it which can inspire some younger minds.


<table style="border-collapse: collapse; border=0;">
    <colgroup>
       <col span="1" style="width: 25%;">
       <col span="1" style="width: 35%;">
       <col span="1" style="width: 25%;">
    </colgroup>
<tr style="border: 1px solid color:#0f0f0f;">
<td style="border: 1px solid color:#0f0f0f;"><a href="../41_wolfemptopy">Previous chapter</a></td>
<td style="border: 1px solid color:#0f0f0f; text-align:center;"><a href="../">Back to Blog</a></td>
<td style="border: 1px solid color:#0f0f0f; text-align:right;"><a href="../43_all_forces">Next post</a></td>
</tr>
<tr style="border: 1px solid color:#0f0f0f;">
<td style="border: 1px solid color:#0f0f0f;"><a href="../41_wolfemptopy">Wolfemptopy</a></td>
<td style="border: 1px solid color:#0f0f0f; text-align:center;"><a href="../">TOC</a></td>
<td style="border: 1px solid color:#0f0f0f; text-align:right;"><a href="../43_all_forces">All Forces</a></td>
</tr>
</table>

