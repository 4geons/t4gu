---
title: "Wolfemptopy"
date: 2023-08-15
toc_depth: 3
draft: false
katex: true
toc: true
disableTitleSeparator : true
---

Something from Machine Learning Street Talk (MLST) today. Comments on an 
[interview with Stephen Wolfram](https://www.youtube.com/watch?v=dkpDjd2nHgo)
and his attempts to "explain" entropy.

**Note:** maybe I'll only use it once or twice, but I'm going to adopt a 
personal convention of using the word *Physik* for a framewor**k** for thinking 
about physics. I'll use Physics (capital "P") for the actual true physics 
of our realty (which is probably unknowable).

**Sc**ience aims to get at Physics, but only ever hits Physi**k**.

## What is Entropy?

**Vague definition:**
Entropy is a formal measure of the "disorder" of a system. Scrambled eggs 
have higher entropy than uncracked eggs.

If we include gravity then clumpy gas has higher entropy than uniformly 
distributed gas, at a sufficiently large enough scale where gravity becomes 
significant compared to electromagnetism.

**Slightly better definition:**  entropy only arises from description, from 
Physik, not from Physics. It arises when we *choose* macroscopic variables 
to describe a system. Many microscopic arrangements can yield exactly the 
same macroscopic variable values. We then count the number of microscopic 
arrangements yielding a given macroscopic state. Then we take the logarithm 
of that count and multiply by Boltzmann's constant to get SI units for entropy.

That's all there is to it. The tricky bit is doing the counting. It's only 
ever a statistical count, you cannot count microscopic arrangements exactly. 
So you always end up using some theory or another to try to simplify the 
counting. These theories are called statistical mechanics.

For some extremely simple systems (like static black holes) it can be possible 
to make up a toy Physik that approximates reality and do an exact count. This 
is known as the theory of black hole entropy, or black hole thermodynamics.

I'm not going to go into a formal definition because that'd be a mini 
textbook, not a blog ("go look it up!" LOL).

OK. So what's the big deal?

The big deal is that although physicists have managed to turn a dull engineering 
bunch of concepts (heat, Clausius, etc cetera) into a formal definition of entropy, 
there remains a totally different associated "law" of nature.

## The Second Law of Thermodynamics

Once you define entropy, then there are questions to ask. What happens to 
the measure of entropy of a physical system over time?

The answer --- called the Second Law of Thermodynamics (SLoT) --- is that for 
a *closed* system in thermal *equilibrium* with it's surrounding, on average 
(so in any typical time period) the entropy will increase.

The larger your system the more exact this "law", since it is statistical (it is 
not an exact Law of Nature, it is an exact statistical result, not a law --- Hey, 
I did not name the result, don't blame me!)).

It is a fairly limited "law". What system is ever closed and in thermal 
equilibrium? Hardly any.

Nevertheless, plenty of "boxed" system are around for us to study, and 
sometimes a good enough approximation will be "closed and in equilibrium". 
In those cases the SLoT can be applied for engineering analysis.

Any steam engine or electric motor plant is such a system. The engine is not 
the closed system, what is closed is the engine + surrounds (rest of the 
universe). If that sounds a bit silly to you it shouldn't be. The consequence 
is of fundamental importance to industry on Earth. The SLoT says the engine 
cannot produce any useful work without heating up "the rest of the universe".

Yeah... but what is the proximate "rest of the universe" here? It's the 
Earth's atmosphere and oceans, unless we can eject the waste heat to outer 
space. Sure, we do eject the waste to outer space, all the time, or we'd all 
die within a few months or maybe a few days. But that is all the SLoT tells us. 
It does *not* tell us anything about anthropogenic global boiling. 
Global Boiling is a non-equilibrium phenomena that the SLoT has nothing much 
to do with. But a lot of physics related to the SLoT is highly relevant, 
namely the fluid mechanics of atmospheres and oceans. That's a whole lot 
more complex than the SLoT.

Physicists like to use the SLoT in a completely non-engineering manner: as a 
toy model to check consistency of the theoretical foundations of physics. This 
is what black hole statistical mechanics is all about. It is not an experimental 
science. It is theory checking theory. Which is still cool. (That was a joke.)

There is another "Second Law" related to entropy which is important in quantum 
gravity...

## The Second Law of Complexity

Interestingly, this is also related to Wolfram's ideas about computational 
complexity, or the computational irreducibility approach to explaining the 
2nd Law of Thermodynamics.

The First LoT by the way is that you cannot create or destroy energy 
(conservation of energy).

The First Law of Complexity is **_not_** that you cannot create or destroy 
information. It is an esoteric result in quantum circuit theory. The quantum 
circuit complexity is roughly the minimum number of primitive gate switching 
steps (called unitary operations) you need get from one circuit to another 
(so it is a relative measure).

The relation to the naïve idea is that a unitary operation preserves 
information.

The *First Law of Complexity* is that the variation of a quantum circuit 
complexity (for a bounded system) depends only upon boundary conditions.
An example of a bounded system, BTW, is the entirety of anti-De&nbsp;Sitter 
spacetime! No wonder string theorists like AdS spacetimes! (They're not our 
universe unfortunately, or perhaps fortunately... for life!  Physicists do not 
really like "life" --- it is too complicated.)

This is related to the physics of black holes.

It turns out black holes are not static, they are static only in a classical 
approximation, when they equilibrate with the 2nd Law of thermodynamics 
then applicable (reach maximal entropy).

Although it is way off topic today, it's cool physics.  The idea is that 
black holes have a lot more ways to go before they truly settle down. 
Susskind and Brown refer to this extra complexity for black holes as the 
Second Law of Complexity.  They show it is 
[basically an explanation for Newtonian gravity](https://link.aps.org/pdf/10.1103/PhysRevD.97.086015) 
([“Why Do Apples fall?”](https://arxiv.org/abs/1802.01198))

What is the basic Physik behind this? It is that matter inside a black hole 
is always entangled with matter outside, which implies ER bridges from the 
interior to the exterior. A macroscopic black hole might then be 
simplistically treated as just a single big wormhole, the ends are two 
black holes. (This is just a theoretical construct, as just noted, a real 
black hole has many gazillions of wormholes, not just one big one.)

Why is this known to be the case?

It was to solve a problem. The problem in black hole statistical mechanics 
was that including quantum mechanics made an inconsistent black hole theory. 
Thermodynamic equilibration could not explain the theoretical Page Curve, 
which is a relation between a black hole's entropy and time. 
As a black hole forms it's entropy increases, then when it evaporates it must 
decrease back to zero.

I will have to hand-wave here because this is off topic, but the problem was 
quantum field theory could not produce a sensible Page Curve, most accounts 
led to apparent absurdities, one of which became known as the black hole 
Firewall paradox.

To describe a black hole evaporation process consistently meant dropping one of 
a few cherished assumptions about physics. But physicists found ways to justify 
these moves.

A superior move, imho, was Maldecena and Susskind's, which is the ER=EPR 
Conjecture. If you work through it (more than an afternoon --- it's hard!) 
the approach of Susskind's leads to a puzzle in information theory. 
The rise in entropy of a black hole cannot account for features of the 
geometrical evolution of the black hole interior. What Susskind and colleagues 
found was a new measure that accounted for this extra information, it was the 
growth of the size of the wormhole connection between the interior and the 
exterior.

The growth in the black hole wormhole interior (geometry) relation to the 
Page Curve (entropy) is, I believe, the essence of the Second Law of Complexity,
if not a precise statement.

They later found this was near enough to equivalent (I am not sure how 
precisely equivalent) to an account for "why things fall".

Entropy alone is not enough. You do not get gravity from a general increase 
in disorder. What "explains" (or maps onto an explanation for) gravity 
is growth in complexity, not just growth in entropy.

IMHO it had to be this way. What is gravity after all? It is geometry. 
It is not just merely information (entropy).


## The Computationalists View

I don't think I can do Wolfram's hypergraph research group justice. To me it's a 
bit loopy (in the bad sense!) So I'd say "go read it yourself" and form your own 
opinion.  But examine their assumptions before their conclusions and claims. 
I think you will find their claims fine, since they have ample degree of freedom 
to conform with physically known facts. But I think you will find their 
assumptions quite balmy and unhinged.

Correct conclusions do not make your assumptions valid my dudes.

In fact correct conclusions do not even make your assumptions more valid than 
some other gals assumptions that give false conclusions. Why not? Because she 
might have 9 out of 10 assumptions right, and the one fly in the ointment spoils 
things, whereas you have 8 out of 10 right but the two incorrect assumptions you 
have "cancel" each other in some sense, giving you reasonable empirical predictive 
accuracy.

Or... in other words... **_Science is a tough mistress_**. Do not ever think 
you've mastered Her.


### Hot Takes on Freezing Hell

Here was my comment on the computational supremacist folks and their ideas 
about explaining physics. (They are a joke.) Timestamp is the MLST episode.

> @23:00 you can't have a computation (or h-g re-write) without time to being with. So the h-g re-writing is not the 
emergence of time. It is evidence of a time 
coordinate. Check out Jon Oppenheim who has a bet with some other dudes that 
spacetime is not discrete. fwiw I think if there is ever a winner it'll be 
Jonathon, not that we'll ever know. The problem with computational approaches is 
that they always work.  You're just saying "math works". It is not informative 
about any physical ontology. If you guess the right physics ontology, ... man... 
you were lucky.

Jonathon Oppenheim's group is an interesting bunch. I think they are right for
maybe the wrong reason, but iI can't say so for sure. Perhaps if I dug deeper I'd 
find their work agrees with mine? In any case, they have a tonne more intellectual 
firepower than I have, so if one were to place bets I'd say they are more likely 
to be right than myself. But I agree with them spacetime is probably a continuum, 
and so does not need to be "quantized".

My T4G approach is relatively unsophisticated (but profound): it is that to 
quantize spacetime you only add non-trivial topology, nothing much else needed.

((Maybe you have to do other stuff too, but I'm not yet aware of what 
that'd be.))



### Entropy is Cryptography

Well, of course a computationalist is going to use encryption to try to 
"explain" entropy.  Let's see how that goes?

As one youtube commentator (I think usefully) tried to summarize:

> @Anders01:
Exciting to hear what Stephen Wolfram has discovered. I believe he is at 
least on the track that entropy is like encrypted information rather than actual 
randomness, that it looks random because of the difficulty of measuring all the 
details, if that's still his view.

Right... ok.  But "encryption" here is a metaphor.  The physics is simply that we 
have little option other than to use macroscopic variables to communicate 
information about any reasonably large system over any reasonable time period. 

((And thanks to Planck, the smaller the time period... well, it gets no better!))

I had a reply to that:
> Randomness is relative.  If you know all the bits in a string it's not random to 
you.  You just can't usefully compress it to communicate beyond the Shannon 
bounds. That's also the essence of the 2nd LoT.  To usefully communicate a high 
entropy state of stuff in a box (up to anti-de Sitter space) you have to grossly 
over-simplify --- meaning you've chunked a lot and used macro variables, not 
micro, and 
many micro can realize the same macro.  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;It has nothing to do with computers and 
hypergraphs _per se._  It is computational by default, by definition, since it's 
just mathematical description. That doesn't mean anything profound. How else are 
you going to describe physics? With poetry? (Been done.) The math always works if 
you get the inputs right.

I actually think the Planck scale question is more interesting than Wolfram's 
hypergraph theorising in the dark.

How come we cannot gain a mastery over disorder at the Planck scale?

That's in a way another way of stating the big mystery of quantum mechanics.
So... who knows?

But in T4G theory we'd at least offer something, which would be to say if you 
are at the Planck scale as a sort of Maxwell or Laplace daemon, then you 
are actually gazing on wormholes (ER=EPR bridges). It does not take more than a 
moment to realise this does you no good in terms of being able to compress 
information, since you see closed timelike curves all over the place, 
so you realise you have to know the future. Otherwise it's half guesswork, 
and so entropy rears it's head again.

Funny thing is this is a little bit like what Wolfram says here @23 minutes 
in to the MLST episode. Funny. Not surprising. It never surprises me when 
different appearing mathematical approaches converge when they are ostensibly 
attempting to describe the same *physics*. They have to converge, or one or 
both possess wrongness.

### The Multivers "Ruliad"

One thing I particularly think is hilarious (not in a good way) about Wolfram 
research is that they've just reinvented God, then vulgarized it, then 
computerized it, into meaningless nonsense.

This is the hole idea of how they think they've accounted for quantum mechanics 
with a branching hypergraph, or "set of all rules" called "The Ruliad". It 
contains all possible computations. These maniacs actually think this is a 
concrete reality. It is their non-ironic model of cosmology.

Never mind what machine it is running upon. I guess they'd say it is it's own 
machine or something roundabout like that? Hard to say.

Here was one comment I posted (to get some politics into it):
>@43:00 if it really is a multiverse "Ruliad" then "we" are not "doing" 
anything. All that's happening is "we" are experiencing a branch of the ruliad. 
There is nothing else to it all. This is of course completely barking mad 
cosmology, or as I prefer to call it the neoliberalization of cosmology.  It boils 
life down to consequences of not even a rule, but mere happenstance of what branch 
of the rules your mind happens to be on. Completely random. Basically satanism 
(chaos) for agnostics. I can explain quantum mechanics with a multiverse.   
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;For me (or any theories of similar nature to 
those I am developing --- which could be many) the multiverse is an abstract 
concept, so is platonic, same for this ruliad. It's not necessarily concrete. 
Which is to say, even if there are infinitely many concrete universi (like de 
Sitter spacetime expansion bubbles), not all possible universi need be realised.

My comments get mysteriously deleted from MLST. Perhaps they've tagged me as 
a troll. If so, sad for them.

I say they are maniacs, but I regard them as pretty benign. I'd say chances the 
Ruliad ever becomes proper physics is zero. Absolute zero. But that's only a 
hunch. Obviously an "absolute zero chance" hunch is itself slightly mad. How can 
I know? I don't know. I'm not using reason and logic here, only a touch of it, 
the rest is faith. Just like Wolfram has sure faith in the supremacy of the 
Ruliad and Hypergraph, but never admits his is all faith-based reasoning.

He does indirectly admit this though. Since the Ruliad contains all possible 
computations, it contains all universes too, on the discrete physics assumption. 
(I reject discrete physics as mere theory and model, we do not know it is our 
physics). Thing is, once you admit your Physik is "all computations get realised" 
then you've explained nothing. It's a tautology.

Since every computation occurs in this sort of model universe, you've 
explained everything, except the source of it all. So you've explained 
nothing. 

The key beauty of proper physics is precisely that we have severe constraints 
on what is possible. Not all things are possible in proper physic. Not even 
consciousness.

Beware of your Physik having too much power. It makes it God-like, and so 
utterly ineffective as science.

If Wolfram can give us the One Rule for our cosmos, then they're lying. 
A hypergraph rule can break down at any subjective moment, because there is 
also another rule in the Rulaid that is that One Rule (rule-43053001965012294 
say) but only up to tomorrow, after tomorrow the rule moves to 
Rule-127406021303857.

This is in fact what'll occur with any attempt to discover "the One Rule". 
Tomorrow it will inevitably become invalid, and if you have to piecewise 
change your rules to describe our physics, you do no have a theory.

There is however a sense in which this Ruliad computationalist paradigm can 
become proper metaphysics. It just can't ever be Physics. The way it can 
become reasonable metaphysics is by,
* dropping the assumption the stuff of reality has to be computable (there is 
no reason for this axiom).
* make it platonic, so a potential in nature, not actual nature.

In T4G theory we can hove both these modifications, and still get quantum 
physics. So I think that's way more beautiful.

Constraints are beauty.  Multiverse (anything goes) is fugly.

Is this "beauty is in the eye of the beholder" thinking?

Maybe, but I think not. I think there is a sense (not scientific, but poetic 
as well as logical) that beauty or aesthetics (however you define it) is partly 
about what is *not* present rather than just what is present.


### Bounded Computation

The Wolfram idea to explain constraints is that people are computationally 
bounded. I again think this is barking mad.

Physics is constrained (energy constraint, Heisenberg constraint, chief 
among others). But the human soul is non-physical (probably ok, not being 
an ideologue here) and we therefore do not know the bounds on human 
activity. We know our physical actions are highly constrained, but the 
space of all possible human actions is so truly vast this constraint is of 
no great metaphysical importance.

Far more diabolical are ordinary constraints of material life.

But here you must remember the cry of all political prisoners across all 
history: you may chain my body but you cannot chain my mind.

Putting people's minds in chains is accomplished every day, under 
neoliberalism, or whatever the dominant cultural paradigm, but 
neoliberalism in particular being viciously insidious --- you do not know 
you are a neoliberal pest until you're not a neoliberal.

I also have a soft spot for Sir Roger Penrose. I see no need to assume physics 
is computational. Maybe it is, maybe it isn't, but why make that an assumption?

The reason for assumptions in physical science is to explain what does not 
occur, more than what does occur. So why assume computability in physics? It 
does not get us anything in terms of explaining why some things do not occur. 
It is too blunt an axiom.


### Observers Needed for GR?

At another point about @24 mins, Wolfram seems to be asserting that 
theories like general relativity (so space + time theory) are due to the 
existence of observers who "think" they are persistent in time.  In 
other words we are really hallucinating a sense of "time" (I think that is his 
claim, hard to say for sure).

What's with this "thinking" yo'?

I think his idea is that the hypergraph re-writing is the "cause" of all 
this. But there s no re-writing absent time. So Wolfram is using time to 
infer there must be time. Well done Sir!

((Maybe I'm miss-interpreting his prattle?))

What about the Hypergraph in the first place?  Is that a more parsimonious 
Physik than a spacetime manifold? I think not!  It's worse.



I think that's all I have for today.

<table style="border-collapse: collapse; border=0;">
    <colgroup>
       <col span="1" style="width: 25%;">
       <col span="1" style="width: 35%;">
       <col span="1" style="width: 25%;">
    </colgroup>
<tr style="border: 1px solid color:#0f0f0f;">
<td style="border: 1px solid color:#0f0f0f;"><a href="../40_thequantum">Previous chapter</a></td>
<td style="border: 1px solid color:#0f0f0f; text-align:center;"><a href="../">Back to Blog</a></td>
<td style="border: 1px solid color:#0f0f0f; text-align:right;"><a href="../42_bulk_forms">Next post</a></td>
</tr>
<tr style="border: 1px solid color:#0f0f0f;">
<td style="border: 1px solid color:#0f0f0f;"><a href="../40_thequantum">Quantum of Qualia</a></td>
<td style="border: 1px solid color:#0f0f0f; text-align:center;"><a href="../">TOC</a></td>
<td style="border: 1px solid color:#0f0f0f; text-align:right;"><a href="../42_bulk_forms">Bulk Forms</a></td>
</tr>
</table>

