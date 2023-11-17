---
title: "Singular Limits"
date: 2023-05-10
toc_depth: 3
draft: false
katex: true
toc: true
disableTitleSeparator : true
---

Came across a couple of good Machine Language Street Talk episodes that had me 
thinking about limits of computer generated "intelligence". One was a short talk with 
Prof. Walid Saba that touched on issues of the infinite and the stark difference 
between recursion and recurrence, 
[“Can ChatGPT Handle Infinite Possibilities?”](https://www.youtube.com/watch?v=4KIQH1VEwBI). The other was an interview with author David Foster on his 
expansive knowledge of ML and 
[“Future of Generative AI”](https://www.youtube.com/watch?v=CTA7-Bsa9U4).

This will take a while to flesh out, but I hope you bear with me.

**Reading Level:** Young geek.

## Turing Machines Can Recurse

A cornerstone of (theoretical, not practical) computer science is the universality 
of a certain type of computation, a type that allows infinite memory space and true 
recursion. Such computers are abstractions, they do not exist on Earth, but you could 
argue The Universe as a whole *might* be one of these "machines" (I'd think you are 
bonkers, but I could not prove you wrong). So it is wrong to even call these concepts 
"machines" but in some sense they are, because even granted infinite memory, they do 
nothing but implement canned instructions.

A TM does not have infinite words, and needs only two, say a 0 and a 1, the bits. 
The input program also has to be finite, but the run-time can be infinite (in fact, 
sort of, *has* to be infinite). Alan Turing at least added that bit of realism 
because he was aiming to model, roughly speaking, the most powerful mechanical 
computers that we could ever hope to build. It turns out these are the same as 
quantum computers, but a classical computer (one we can build without exploiting 
quantum mechanics) is far more limited in the *speed*${}^\dagger$ with which it can 
run some algorithms compared to some sufficiently high qubit capacity quantum 
computer.

"Nothing but," I say, but within that space is at least all the AI machine learning 
technology currently being developed on little old Earth. So these abstract concepts 
are at least this powerful! This is far more mind blowing for our computer 
technology: they are amazingly powerful from our limited perspective (they can 
perform computations we cannot) and yet are not even Turing machines.

${}^\dagger$It turns out speed of a computer is incredibly qualitatively important. 
I don't want to get into this here, but it matters a lot! Suppose "conscious thought" 
requires some insanely high computational complexity, so much that it must exploit 
quantum mechanics if it is to perform the computation in real-time (which you could 
say is like a requirement for a form of "life"). Then it is likely no classical 
computer can ever become "conscious" --- whatever that might mean (no one knows what 
it means in formal terms).

This is because although classical computers can perform any calculation a quantum 
computer can, they cannot do so with the same algorithmic power, which means they are  
far more limited in real-time.

Regardless of what I think, it's a fascinating branch of mathematics. It has to be 
mathematics because we know of no Turing machine and likely never will (unless you 
conceive of The Universe or something as potentially infinite in capacity as a 
likeness of a Turing machine, or at least an approximant in some sense if The 
Universe were digitized --- some physicists think our universe is discrete, so 
there's that going for you).

The fascinating thing, or one of them, is that the concept of a Turing machine has a 
provable theorem using the concept of a Universal Turing Machine (UTM). The concept 
is that a Turing Machine exists that can simulate any other Turing Machine given 
arbitrary input to the other TM.
The theorem is that such Turing machines exist (mathematically). They are platonic 
Ideals, but they do exist, ok. 

The awesome thing, another theorem, is that Alan Turing proved that there is no 
program that exists which can be run on a UTM that can determine whether that program 
will ever stop. (Hence my remark that UTMs need the possibility of infinite time --- 
even if they reach no stopping point to solve a problem, along the way they might 
solve many sub-problems you wish them to compute.)

This is a profound result in mathematics, and shows computation is 
fundamentally incomplete: there are programs that have no determined output. This 
turns out to be equivalent to Kurt Gödel's famous Incompleteness Theorems, which 
prove that no formal language (so no formal mathematical system) can be *both* 
**consistent** and **complete**. This means, because we demand mathematics is 
consistent, that Mathematics (all possible formal mathematics) is Incomplete. 
We can never prove all the true theorems.

Not even if we allow ourselves infinitely many axioms and an infinite amount of time. 

However, related to my main topic in this blog today, is that there is a singular 
limit that escapes Gödel Incompleteness. If we allow ourselves an 
Absolute Infinite${}^\ddagger$ resource, then all mathematics is contained in this 
resource and so is Complete & Consistent. But alas, it is not a formal system of the 
type mathematicians want, (a) because it's of no use, because to prove any particular 
theorem becomes simply a look-up, of an Absolute Infinite space, so is impossible for 
any mortal mathematician. And (b) it is not "interesting" in the sense simply 
looking-up results is no fun!

Well,... no fun for us. If you had an Absolute Infinite Mind then I guess all the fun 
that can ever be formally *and* informally thought about is forever available to you 
--- which is one helluva lot of fun. Inexhaustible fun. (Egregious 
anthropomorphisms here, I admit!)

${}^\ddagger$The Absolute Infinite is a concept, not a number, which is why it is 
beyond computation and formal language, or if you wish to think of it as a number 
then it is the largest limit Ordinal, or the "size" of the universe of Sets. 
Or, more poetically, it is the amount of information you need to know everything there 
is to know. Mathematicians can define the Absolute Infinite, but cannot know all Its 
properties, which is why I said it is beyond formal language. Being able to define a 
concept is not the same as knowing what it is, not even close.  Why not? Because 
definitions can be complete, but are not generative: they do not contain all true 
theorems about the concept. You have to add a whole bunch of other stuff (the other 
axioms of your system of thought, and language symbols, &c.) to deduce anything at 
all from a definition.

A lot of literature has been penned about UTMs, it is worth checking out Roger 
Penrose (*The Emperor's New Mind*) and Rudy Rucker (*Infinity and the Mind*) for 
starters, if you are interested in what could be called "hard" philosophy (in the 
sense of being close to science, not in the sense of being difficult).

Today, the critical thing I want to highlight is that Turing Machines are fully 
recursive, which means you can write programs for a TM with functions that feed their 
output back into the same function, endlessly. This is an important part of Turing's 
proof of the "incompleteness" properties of UTMs. 

It is a scifi thing, but pure good mathematics! (Whoever said science *is* 
mathematics? Whoever they were they were fools.)


### Intelligence is Not Thought

When people talk about "machine intelligence" or even more general "intelligence" 
they usually mean a type of *behaviour*. This is thus *not* what I mean by thought 
or wisdom or *subjective intellect*.

* **Subjective awareness** is a mental phenomena unknown to science or mathematics 
(no theory for it, not even a scratch). It is possible to be subjectively aware and 
totally stupid (most people?). 
* **Intelligence** is the capacity to solve difficult tasks, so is always a relative 
concept, not an ontological state of being. It need not have anything to do with 
sentient conscious awareness. 

Human beings are incredibly intelligent in part because we have a unique (on Earth) 
special type of subjective awareness, namely the awareness and abstract thought 
capacity for thinking about platonic concepts --- about things that do not exist 
physically.

Because such things (like *Infinity* or *perfect circles* or the number $\pi$) do not 
exist physically, our mental comprehension of them is, I believe, not of physical 
origin. Our outward communication capacity to talk about these concepts with other 
people *is* physical, is behavioural, and can be mimicked by any computer.


### Recursion is Not Recurrence

Real computers here on Earth, hence all the current AI machine learning systems, 
can implement recurrence, but not recursion. A recurrence is a simple repetition of 
some tasks. So a real computer can stuff the output of one function back into the same 
function, some number of times. But not infinitely many times, so cannot be 
recursive. Apart from lacking infinite memory registers, this is another reason why 
real computers are not as powerful as Turing machines.

The next question for today is who tf cares? Why does this matter?

After all, you might say, if a computer can just compute "enough" recurrences then it 
should be able to approximate any desired recursive function?

Not so. And this is the crux of what I want to write a bit more about today. 
*Why is 
approximation not good enough?*

I think this is super important, because I think a lot of dopey AI nerds are getting 
things wrong about hopes for building some putative Superintelligence that could 
conquer humans and rule the world. That's the fun stuff for later, but I will get 
to it. For a bit of initial politics: if *you* think a sentient Superintelligent 
robot is possible, then _yes **you**_ for one should be worried about regulating the 
AI tech industry to ensure no such monster will ever be built.

But that's like trying to keep the lid on a genie bottle. I don't think you can, so 
*if* you believe that crap, then you surely must believe we are already doomed. 
I do not believe that hype for a lot of reasons, some I've written about, but here I 
will mention a new one that I don't think I have written about before in T4GU pages.

This is the sentience and empathy conjecture.

## Sentience and Empathy

I doubt this is original, but I haven't seen anyone write it before, at least not 
recently (glut of news and hysteria swamp my memory). I think you should be able to 
find this idea in journals where academic philosophers were debating Nick Bostrom's 
spate of letters on existential threats to human existence. The idea is that any 
putative sentient Mind more powerful than any human mind is going to be impossible if 
it lacks empathic reasoning. 

This is a conjecture, but there are good philosophical, not scientific, reasons to 
suppose it is true. One is the philosophical idea that in order to be truly sentient 
(*to be someone it is like to be*) an entity will need not only a formal syntactical 
Theory of Mind but will also have to have an actual mind that can think about other 
minds, and have a good idea when some *other* entity it can observe is *probably 
conscious too*.

The whole point I keep harping on about is that this can only ever be a probabilistic 
knowledge. No mind can know *what it is like to be* some other mind, by definition. 
The definition used is that whatever else a "mind" is, it at least entertains 
subjective experiential qualia. These are ill-defined concepts unknown to 
mathematics and science, which is why this is mostly philosophical. But it is 
politically important, I think.

You might think it a big "if", but if I am right, then a hypothetical 
Superintelligence will need to be empathetic, and so is highly unlikely to vaporize 
humanity. You could argue they'll treat us like ants, but that's a bit of a stretch, 
because, if you ask me, since they are so superintelligent they'll be able to see 
value in the human species that even we cannot see.

They will treat ants like ants. They will treat humans like humans. They will treat 
each other, we might suppose, with caution, and if they really do become more 
superconscious than any human, you are reasonable in supposing they might treat each 
other more compassionately than we treat other humans. If not, then it would be a 
good idea to invite them to piss off in their supertech spaceship to some other 
planet.

Not convinced? Then I won't be able to convince you, but I am pretty darn sure of 
all this.

Not that it really matters, because for entirely *other* reasons I do not think a 
computer-based conscious being is possible. It is not a logical possibility, and 
so clearly not a physical possibility. Even if logically possible, it still will 
not be physically possible.

### Further Politics

This is not to say advanced AI, or AGI (artificial general intelligence) is not a 
menace to humanity. It *is* a menace in precisely the same way (qualitatively 
different outcomes) that nuclear weapons are a menace. Even if no Superintelligence 
Singularity emerges from robots, other human beings could be malicious enough and 
stupid enough, to cause some sort of cataclysmic disaster by deploying dumb AI, dumb 
but extremely powerful.

The second political worry is that even short of wiping out humanity, some powerful 
oligarchs might just desire to use some beta release AGI to clamp down like fascists 
on everyone else (so I guess I mean not "like" fascists but "as fascists"), hold 
government to ransom, that sort of thing, and create a general 
techno-fascist dystopia. This is more far-fetched perhaps, total scifi, since a few 
cannot easily overpower the many, since we know from history human beings when pressed 
to extremes are quite capable of sacrifice and martyrdom. But these are just my 
opinions. I alone cannot stop people being dicks.

I have to cut this politics stuff short here, because as juicy as it is, it is hot 
air, because no such threat seems yet credible${}^\ast$, and my interest today is on 
other aspects of AGI and the putative "Superintelligent Singularity."

${}^\ast$One reason being the Meta LLaMA model is already leaked, so the 
free licence software community has already started democratizing the LLM generation 
of advanced AI. Establishment chads were laughing at the free software community 
having "given away" all their software to Microsoft and OpenAI, but free software will 
always have the last laugh.

Did the anarcho-capitalist chads ever pause to think the free software developers 
always wanted this to happen? You don't release your software under free licence if 
you don't want it copied and re-used. (Excuse the double negative there, but I think it suits.) Which Neo is inside which Agent Smith here?


## The Recursion Kicker --- Apple Worms

Back to recursion versus recurrence. This is another source of singular limits.

Most compsci nerds you meet in the street or AI labs probably naïvely believe they 
can approximate any recursive computation with recurrence. They are dead wrong. The 
smarter nerds know they cannot effectively compute all recursive functions because 
they know the difference between recursion and recurrence.

Why is this such a  big deal?

Well, here even the smarter nerds, I suspect, do not realise why it is so important. 
The issue is that if you can genuinely recurse, then a  whole lot of results become 
available to you that were *not even approximations* before. This is because 
recursion allows a limit to be achieved, not merely closer and closer approximated.

Why is this important? It is super important because the limit of a sequence (of 
anything, but here a recursive computation) might **_not_** be remotely close to 
the best approximant you can ever reach, even with infinitely many recurrences.

The physicist Michael Berry, a very creative and original thinker himself, came up 
with a funny little example to illustrate.

> Consider an apple you take a bite out of. If you then see half a worm inside you 
know you had a bad apple, and swallowed half a worm. What if you take another apple, 
take a bite, and see a quarter of a worm? Berry says define this to be a "worse 
apple" because same bite gave you more worm in the mouth. Now iterate, each time 
halving the amount of worm left in the next apple. (Someone obviously set these 
apples up for you, Laplace's daemon or whoever.)  <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;So what do you say when you get to the end of 
this diabolical infinite experiment? 
You'd naïvely say the last apple with no worm in it is the "worst possible apple". 
But the daemon placed no worm in this apple, so it is in fact the nicest apple.

Point made?  The furthest approximation of an infinite sequence you care to imagine 
is not necessarily the limit. If not, then we have what mathematicians define to be a 
**Singular Limit**.

For a singular limit the approximants never get closer to the true limit.

For mathy nerds, this is a topological issue. In trivial homotopy smooth geometry 
any closed bounded sequence has a smooth continuous limit. But if your geometry is 
punctuated by "holes" (of any dimension) these nice limits are no longer guaranteed, 
and singular limits may abound. Indeed, in physical nature singular limits are 
abundant.

Another example is say (in impure water) cooling water from say room temperature down 
to $0^\circ$C by halving the temperature. It's not important, but give yourself a 
time cut-off for the sake of argument. If you cut the temperature in thermal 
equilibrium somehow (gedankenexperiment) by half every next half of the time 
remaining then by the alarm bell the water will have frozen, but at no earlier stage 
was the water ever frozen. You never got close to approximating the end state of the 
water.

There is an online article by Berry where he gives 
[a few more exmples, here.](https://pubs.aip.org/physicstoday/article/55/5/10/1016396/Singular-Limits)

Due to supercooling effects, if there is no impurity in the water it will 
not freeze, so this is a physical example that engineers will get hung-up on like 
the useful pedants they are, but in nature there are plenty of other proper Singular 
Limits.

But even the singular limits we do not observe are theoretically important, in 
mathematics for instance.

One other great example is Planck's constant $\hbar$ --- necessary for quantum 
mechanics. In classical mechanics the singular limit is $\hbar=0$. Because this is a 
singular limit, we lose all quantum effects like sudden magic in classical mechanics, 
and if you "turn on $\hbar$" just a tiny amount, you get back unavoidable quantum 
effects (at some scale).


### Thoughts About Programs

Walid Saba gives a couple of examples that resonate with what I've been describing, 
but does he know he is talking about singular limits? He is.

He uses the idea recurrence is not recursion. But this is just another example of a 
singular limit. A recurrent function can get arbitrarily close in desired output to a 
recursive function, provided the limit of the recursion is not singular.
But not all recursive functions are non-singular. So not all computation using real 
computers (constrained to using recurrence) can be Turing universal. Another way of 
putting it is that *here are some natural things machines cannot do*.

((By "machines" I mean physical digital computing devices.))

I claim it is highly plausible sentient beings are not even Turing machines. But 
suppose we are, then it is plausible we are not real computers in the case we need 
to implement singular limit recursive functions, in order to exhibit sentient 
consciousness.

((The whole idea physics can produce subjective phenomena is of course bizarre to me, 
or not bizarre so much as silly. But I'm going with the mainstream dullard opinions 
on this for now, for the sake of argument.))

Saba's example is how programmers (the people, not the AI) can quite easily think and 
coherently reason about completely abstract concepts like "infinity". He points out 
that no programmer can write a proper language compiler without thinking about 
infinity. Here we mean actual infinity, not some approximant, not some super large 
finite number, but *actual infinity*. Why? It is because, as Saba explains, the 
compiler programmer has to allow for any possible finite program. If they do not, 
then they have not written a language compiler.

The GNU C compiler is a proper compiler, because it includes allowance for any finite 
program code. (There may be other bugs, but they are not of this variety, the gcc/g++ 
compiler truly does support any finite code file.) Saba's point is that the set of 
all finite programs is an infinite set.

This may seem trivial to most professional programmers, but if they do think it is 
trivial it's probably because they are too close to the software. From a respectable 
distance we can appreciate how extraordinary it is that human beings can think so 
abstractly as to be able to write a *proper* language compiler!

No statistical neural network can ever do this. A neural net AI can by chance write 
a proper compiler, but it would be a fluke. The way human beings think about programs 
makes all the difference. We can conceive of a space of all possible finite programs. 

It does not matter at all that we cannot describe or list all finite programs. All we 
need to do is think there is such a set in a platonic sense. This is what allows us 
to write a decent C compiler or Python interpretor without it being a fluke.

The way I summarise what Saba was saying is that just to think of writing a computer 
language compiler is to be *not a machine* because you have to, by necessity, think 
abstract thoughts that are *about* non-physical reality. I don't wish to shove 
platonism down your throat though, so you can imagine the platonic realm is some sort 
of fiction, and human beings are only constructing pieces of it in their heads, but I 
would say that is very unlikely the truth about things. Symbols referring to 
physically impossible Ideals are just not  in the realm of physical computation, 
period, as a point of logic.

A statistical software system spitting out syntax that to a sentient creature 
interpreting the output looks like "an understanding of how to write a language 
compiler" is not a semantically aware system. The human doing the interpretation of 
the statistical output is the entire source of all the semantics here (them and the 
sentient being who wrote the software).

These days the AI nerds are getting into a trap. They now have software writing other 
software, but seem to forget the first software, the origin code, was always written 
by a human (or some other sentient creature, not a statistical look-up bot like 
Copilot).

The rejoinder I often hear from the nerds and other materialists, like Marxists, is, 
"But humans are only doing the same thing, using statistical inference to come up 
with our syntax, so there is no semantics here."

I just have to roll my eyes. If you want to be a Chalmers Zombie, by all means, go 
ahead. Force yourself by habit to say "there is no meaning in existence, and so on, 
and so forth." Maybe one day you will even deep down truly believe it.


### The Force of Infinity

I am not sure Saba recognizes the full force of his reasoning. But it is only a 
short clip I referenced, so I cannot really say this for sure. I do infer from 
previous MLST episodes that Saba is still basically some kind of physicalist, even 
if he has platonist tendencies. His is just another opinion of course, so I won't 
hold him to his beliefs.

The interesting discussion point is *why* I think Saba does not see the full force of 
his reasoning.

The full force is that in recognizing human beings can think abstractly, so can know 
true things about platonic forms, especially mathematical forms, we demonstrate 
non-physical thought capacity. We cannot be simply behavioural beings. There is 
something more to human cognition than computation, in other words.

A physical materialist can always make the philosophical argument that some sort of 
mystical *emergence* can occur, whereby physical machines can evolve or emerge to 
*become* subjective conscious beings, even when their computational basis is not 
subjective, and has no subjective inputs nor origins (upon the *no panpsychism* 
assumption).

Saba's reasoning has a lot of force to me, because I do take the *No Panpsychism* 
assumption seriously.

It is important to appreciate where materialists and AI nerds who hold to physicalism 
could go wrong in their philosophy. There are many ways they can go wrong, and one I 
am writing about today is the subjective/objective hard divide and the associated way 
it can be manifested as a type of singular limit.

The thing is, any machine can obviously arbitrarily accurately mimic a human. Mimicry 
in the physical plane is just motion of atoms, and one need not bother inquiring as 
an engineer into the causes. You just get the job done.

AI engineers are in this respect "only engineer" --- they are not scientists, because 
they are merely solving a problem and not bothering about the causal mechanism 
underlying things. They only need to go as deep as their programming language and 
statistical inference and syntactical natural language processing concerns. These are 
purely engineering concerns, there is very little science involved.

What science is involved in AI is statistical in nature: they make hypotheses about 
the statistical power of their models, and can then test them. But then that's the 
end of it, by their own admissions (or the smarter of them, others among them jump on 
the hype and claim ridiculous assertions about their machines being conscious).

There are AI scientists too, but they are pretty rare. They are the ones wondering 
about whether machines can actually become conscious and what causal processes are 
involved. They are hopeless though, no one even understands causality in basic raw 
physics. So whenever I come across AI scientists of this ilk I have to laugh. They 
think they can understand the causal basis of consciousness when I know physicists do 
not even understand the causal basis for quarks, electrons and the bosons they couple 
to. How to they couple?  No one knows!

We just know that they couple, and know the numerical constants governing the 
strength of the couplings, but then that's it. There is no scientific concept of 
causality involved.  It is therefore absurd for computer scientists to think they can 
comprehend causal bases for consciousness.

But... maybe not completely absurd? They can also try claiming that *thinking* (an 
undefined concept) is genuinely emergent, and so supervenes upon some type of 
substrate logic that need not be physical substrate. In which case, if a digital 
computer can implement the right substrate in a software layer, then there is no *in 
principle* obstacle to machine consciousness. But this is stretching their philosophy 
to an extreme, and it is not good science, it is pure philosophy.

Moreover, it is mysticism (which I am not opposed to, but the scientists don't 
realize they are invoking mysticism). That's because they have no account of 
genuine emergence. Genuine emergence is a completely metaphysical undefined notion.
If evident then it would mean no underlying base physics can explain this magical 
software layer. The software layer sentient consciousness is supposedly 
supervenient on in this paradigm would have to be impossible to objectively describe. 
But there is absolutely (and I use the word "absolutely advisedly here) no scientific 
basis for such intermediate supervenience. All of science assumes all behavioural 
motion supervenes on the base physics.

As I say, all this machine consciousness talk is pure philosophy. Moreover, it is 
highly dubious.

Why?

Because science needs objective data. Mentality, or subjective first person 
awareness, or mental qualia, are not objective phenomena. I can *never* know your 
experience of 
<font style="color: tomato">red</font> qualae is not exactly the same as my 
experience of 
<font style="color: limegreen">green</font> when we both observe a tomato.

Most science still relies upon inference, but not in this way. I can *never* make 
this inference, there is no data I can ever collect that supports the thesis your 
<font style="color: tomato">red</font> colour qualae translates in my mind/brain to 
my <font style="color: limegreen">green</font> qualae. Or similarly for any number 
of other different mental qualia modes.

The other point is to note that "I" would have to collect the data. Thereby knowing, 
again, this is not science. Anyone else would have to collect their own data. This is 
not science. Science is objective, independent of the researcher, independent of 
*who* gathers the data. Note that again we see a singular limit here.

All the data gathering in the world can maybe get a machine closer to mimicking human 
behaviour, or the scientist closer to figuring out a casual basis for consciousness, 
but they can never go the final yards, however infinitesimal they may seem to be to 
a bridge, because the second they do they cease doing science.

Although the Strong AI philosophy is not science, it is not bad stuff to think 
about. I do value philosophy. Today's philosophy topics are not always barred from 
becoming tomorrows science. It is just in any area of subjective phenomenology there 
is a hard barrier, the singular limit to science.

Science can always arbitrarily accurately approximate behaviour through (no 
surprises) behavioural models. But if there is genuine mental subjectivity involved 
in some phenomenon this is a singular limit which no approximants can be guaranteed 
to get even remotely close to.

Note that the behaviour can be arbitrarily closely approached. It is the mentality 
that cannot. If you only *care* about behaviour though, then I guess to you machines 
can be "behaviourally conscious" which is a redundant expression, since if they *are* 
conscious (subjectively aware beings) then by definition they will be some sort of 
behavioural consciousnesses. Only Ideal platonic forms are not behavioural. Anything 
physical is always behavioural.

Perhaps an analogy to help illustrate: liquid phases of materials like water always 
have fluid behaviours, but never solid behaviours. To demonstrate solid behaviours 
they must cease being liquids.

Conscious beings always have some behavioural descriptors, but the same behaviour 
seen elsewhere need not have any consciousness behind it, it could be a Chalmers 
Zombie.

One way the Chalmers Zombie makes sense (even if a metaphysical impossibility) is 
because no account of observed behaviour is ever *complete*. A machine might 
implement Edward Witten up to 2023, but has no chance of mimicking the behaviour of 
Edward Witten from 2024 to 2025. While not a proof the Witten bot is not conscious 
like Witten, this nevertheless shows you how AI machines might not be conscious.

They could be arbitrarily good approximants to some hypothetical entity's manifested 
physical behaviour, but never reach the singular limit of being *actually conscious*.


### Remarks on Automated Assistants

Tools like chatGPT, Copilot and openAssistant are exploiting past human knowledge, 
aggregating it, and using neural nets to organize suggestions. This is intelligent 
behaviour, but not sentience.

It might have been considered tragic the community of GNU+Linux free software 
developers have essentially had their code "stolen" by Microsoft (but fools, they put 
it all on github, which was a proprietary non-free platform, the Linux lusers 
disobeyed Stallman). We hear nowadays gigachad programmers laughing at the GNU+Linux 
and FLOSS community for being so stupid.

However, (a) they should thank the free software community for at least enabling 
chatGPT and Copilot. (b) the FLOSS community will always have the last laugh. 
openAssistant is an open source project along with GPT4All, and many others, who are 
likely destined to surpass OpenAI and Microsoft. 


## The Superintelligence is Singular

(This is now speculative. But pretty cool, I thought.)

This brings me to the main point of this article, which I believe no AI tech nerds 
understand.  They call Ray Kurzweil's fever dream of a sentient AI entity an "AI 
Singularity" not knowing that it might be a more accurate description than they 
realise. This is because I think it is a singular limit, in the mathematical sense.

I know the AI Singularity is described as such not because it is a singular limit, 
but because it is the critical point at which a machine becomes capable of teaching 
itself at an accelerated rate, so rapidly surpasses all human intelligence.

My view is that before we would even get to such a sentient superintelligence, we 
have a big "problem" (or a blessing? recall the politics!) that this limit can never 
be reached. Why not?

It goes back to the limits of real computers compared to actual abstract Turing 
machines.

To compute all the things needed for actual sentient consciousness will almost 
surely require full recursion. Suppose it does.

Suppose one other thing: suppose that some "computations" needed for a sentient 
conscious machine are singular limit functions? Then no finite recurrence can 
approximate them, not ever. We thus lose capacity for building sentient machines, 
and no AI Singularity will ever emerge.


### What About Humans?

Exactly. Begs the question, doesn't it? I said this is all speculative philosophy, 
so suppose I am right. Then humans are simply "obviously" not machines. Somethin' 
else to us thar be.

What about the Gödel--Rucker escape clause? Maybe we can evolve conscious machines 
even if we cannot build them from mechanical parts and deterministic programs with 
random number generators? I have not yet looked into this carefully, but I don't 
think this helps evade the singular limit problem, if indeed there are such obstacles 
blocking non-sentient systems from becoming more approximately sentient.

I think the singular limit here is hard, that's because I regard subjective phenomena 
as distinct utterly from objective phenomena, thus we cannot "emerge" anything 
subjective from purely objective systems and processes.

However,... you know... the *panpsychists*. Bloody panpsychists. Off their rockers.

Although I have zero appetite for panpsychism, you can entertain the idea I grant 
you, in which case "little quanta of psyche" exist in physical reality, and so there 
is no singular limit going to a putative AI Singularity superintelligence.

One interesting thing about being alive today is that all the LLM ".ai" hype is very 
close to nerds "promising" AGI and a superintelligence before Kurzweil's schedule 
(2040). I personally cannot wait for their deadline. I think it'll be face plants all 
around. Not that they'll admit it, it will be another, 
"Oh, but we are now only 5 years away..." every 5 years.

Only with sentient machines I think it's far worse than "cold fusion" or just 
"fusion" or Star Trek teleportation --- I don't think we *ever* get there, not with 
brute force computation, for the reasons given (and among others I have not yet 
given). But we can get arbitrarily close.  That's the awesome thing.

The up-side of it all is that we will have some incredibly productive 
technology, if we can manage to scale to low electricity usages. The sort of tech 
that can solve truly difficult problems without drinking coffee. That could be 
enormously labour saving for humanity, freeing up people to do better things (See my 
[Macroeconmics blog](https://smithwillsuffice.github.io/ohanga-pai/) on why 
machine automation is a productivity gain story, not an unemployment story.)

As a parting shot after listening to Geoffrey Hinton on [Amanpour and Company](https://www.youtube.com/watch?v=Y6Sgp7y178k) I posted this comment, which I hope 
gets politics fixed, yeah, that's right: "Fixed your politics!"

> To a compsci nerd "every problem is a code."  Hinton doesn't realize humans are not 
machines. Subjective thought is not the same  as behavioural output. Any robot can 
arbitrarily accurately mimic known human behaviour. But if we do not think of the AI 
as conscious, then there is no moral qualm in shutting them down. There is a moral 
problem in thinking we need advanced AI to solve critical problems for the planet's 
survival. But we do not. Humans can solve the ecological crises without AI, we just 
need more empathy and compassion. The AI systems can help for sure at the margins 
(energy efficiency solutions and whatnot). Ironically the hypothetical "hair on fire" 
fear of advanced AGI might also help us all become more empathetic to each other, but 
that'll be ourselves solving our own problem.  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@1:50 Hinton really has no clue. Surprising. A 
Bot "explaining" why jokes are funny is not thinking, it is constructing syntax from 
reams of data where humans have already explained why jokes are funny. The syntax is 
not the semantics. If, say, a rebooted Monty Python came up with a new trope sketch, 
the AI would have no idea why it was funny. But it has to be a new trope. A new 
original joke using an existing trope within the Bot's data set has a good chance of 
being syntactically "explained" by the Bot.

The AI shills all seem to be Skinnerian behaviourists, in that they see some 
appropriate (in their eyes) behaviour as all one needs to infer consciousness. They 
all forgot Behaviorism was discredited decades and decades ago, and no serious 
psychologist uses Behaviorism any more, except for some animal experimentation stuff 
of dubious ethical validity.

Guys. Chads. You are making the same mistake as the mega-chad who thinks a 
beautiful woman staring at them is a sign of their sex appeal. It is not. It is a 
superficial sign of their virility (an objective biological trait, not an aesthetic 
subjective sex appeal trait). Sex appeal goes into all sorts of other inner 
subjective stuff beyond things like your income, such as your kindness, your empathy, 
and yes, for *some* women, your strength and "manliness". But none of that tells you 
that you are a Good person, in the Aristotelian sense. Of course, you chads don't 
care. I know. I'm writing this for the string-bean arm nerds here.

((And a superior sign of your manly sex appeal is *other guys* staring at you and 
drooling.))



### My main thesis --- consciousness is singular

I really should go full-academic and write this all up more technically, but T4GU is 
free licence and so any reader can take this thesis and run with it, that'll spare 
me the pain of publish & perish.

The thesis is that I reckon we can come up with very good reasons to suppose the 
above suppositions are true. The tricky bit is to show they are true without knowing 
what the metaphysical source of consciousness happens to be. I do not have that 
part fully figured out yet, I intuit it but cannot formalize it.

The idea is that we only need to minimally characterise what we mean by 
"consciousness" using a few attributes that can be formalized. We do not need a 
complete definition, a partial definition should work, or negativa (what 
consciousness is *not*). Then you show human beings "have" consciousness 
(whatever that means, I take it to mean we display the objective attributes 
associated with a system that is partially conscious).

*Partially conscious* here does **_not_** mean a bit drunk or asleep! It means 
fully conscious but only verified by incomplete objective behaviour. I have 
elsewhere written why this is a restriction, because attempts to completely 
formalize Consciousness using behaviour and other objective metrics is doomed, 
as the IIT theory championed by Koch and Tononi has shown by failure.
Someone drunk might not even count as conscious by such criteria, which is 
precisely why the criteria are criteria for only partial consciousness. 
The drunkard is certainly conscious, but might fail the partial test. False 
Negatives.

What I propose though, which is the interesting bit, is that even this incomplete 
characterisation of consciousness should involve recursive cognitive abilities. 
Or some other singular limit. Then we'd know a Turing machine could become conscious, 
but not a real computer. 

It is yet another far bridge to further define what we mean by consciousness to get a 
proof no Turing machine can ever be conscious. This is very difficult, because it is 
really asking us to go beyond behaviouralism, and hence beyond objective science. So 
it is not, to my mind, a scientific question. It is still a good question. Just not 
a science question.

Such conjectures that are at the intuitive stage take me several days, weeks, 
sometimes years of dreaming to formalize. I have not dreamt enough lately.


#### Other Secret Sauce

I have a few ideas about how human beings, and other alien species, can breach the 
physical limits imposed on non-recursive machines. Closed time-like curves, à la 
T4G theory, of course. 

<div style="text-align: center; color: hotpink;">À la recherche des trous de vers perdus.</div>

A closed timelike curve permits an infinite loop in 
spacetime, that's recursion, proper full-blown Turing machine-like recursion.

It's interesting that this ought not to even be radical. Most physicists who know 
anything about quantum mechanics will admit spacetime at around the Planck scale has 
to *almost certainly* suffer topological break-down, which is to say Planck scale 
wormholes, or "foamy spacetime", is almost inevitable.

Some quantum gravity theorists will disagree, because they have other models that do 
not have wormholes, such as causal triangulations and whatnot. So they are good 
competing theories that limit these ideas on how human beings or other systems can 
get to full recursive effective physical-side cognition.

As a good platonist I also think subjectively aware creatures have non-physical 
cognitive capacity too, but I am trying to keep that out of this current conjecture.
I want to try to focus on the physical-side.

It's kinda' funny too. I used to think folks like Stuart Hameroff and Roger Penrose 
were barking mad. I still do. But I still appreciate their work. I just don't think 
there is anything to the proposal that microtubules are vehicles for non-computable 
quantum effects in our brains imparting consciousness.
It is still objective process, and so cannot "become" subjective.

But the T4G idea of closed time-like curves permitting true recursive function 
computation in physical spacetime is *a little bit quantum mechanical wacky* I have 
to admit. The trouble for the new-age band-wagoners is that this is not a theory of 
mind or consciousness. It's just a partial aspect, and utterly speculative. I do not 
see how anyone can construct a theory of mind from such physics. 

What I am saying is that without such physics you *really* have no theory of mind.

Of course this also implies, if I am correct, the LLM models and all the 
computational systems coming out of current AI research, have no hope of emerging 
consciousness. But if they start exploiting quantum computers in interesting ways, 
allowing infinite recursion to actually occur (lord knows how!) then I guess 
I am committing to the theoretical possibility a machine can "become" conscious in 
partial aspects. But I have not defined what conscious mind is in completeness, so I 
am also under no compulsion to admit a machine running a fancy algorithm can truly 
gain subjective phenomenal qualia.

This hypothetical quantum computer trajectory for genuine Strong-AI is a big problem, 
because the type of wormholes a quantum computer can generate are severely 
restricted. There is no engineering way to use them to send data backwards in time 
yet, to get full recursion. This is because all our QC algorithms have to use 
classically prepared data. The QCs exploit entanglement in a highly restricted way, 
via quantum gates. The effect being exploited is really just superposition, not 
closed time-like curves.

The QCs generate CTCs, but we are not using them as time machines. I have no idea 
how we could. Engineers can stick information into a region of spacetime, and get 
the information back before they put it in, as has been done by 
[Günter Nimtz and colleagues](https://www.wiley.com/en-ca/Zero+Time+Space%3A+How+Quantum+Tunneling+Broke+the+Light+Speed+Barrier-p-9783527407354), 
but we cannot loop that Mozart symphony. It's one-way only. 

Maybe some bright spark youngster will have the flexible enough mind to see how to 
get a QC to turn the tunnelling into a genuine feedback-in-time loop? I hope so.
Current QCs do not work this way, they use entangled qubits and perform logic gate 
operations on them, there is no explicit tunnelling involved.

But then you ask me, "So how are humans doing it then, huh? If this really is part of 
the secret sauce?" All I can say is that we are able to exploit closed timelike 
curves to gain a variety of top-down causal agency, which you can call "free will" if 
you like, but there is the rub --- we are not doing so consciously!

That's right, human consciousness is not conscious of how it is conscious. Who 
could've known?


### AGI "in 18 Months"

Although an AI Singularity is scheduled for 2040, there is a shorter run deadline for 
AGI --- artificial general intelligence, which is meming.  AGI is not a 
superintelligence, but is loosely defined as a computer system self-contained with sufficient functionality it can perform any "intellectual task" that a human or any other animal could perform. We are talking about behaviour here:

* image recognition,
* speech recognition
* speech generation
* image generation
* commentary on speech
* painting pictures, composing music, doing algebra
* checking logic
* maze solving
* playing e-games and competitively (any random new e-game, not just one special 
game it has been trained on! This is not yet achieved)
* filling in tax forms (a tricky one! harder than solving chess ;-)
* giving advice as an expert assistant on a known topic.
* rapid blood and antigen analysis
* solve protein folding
* ... plenty of other cognitive tasks.

Aside from general e-game playing, there are plenty of tasks on the AGI list that 
no AI can do right now. This makes the claim 
[we will see AGI within 18 months](https://www.youtube.com/watch?v=YXQ6OKSvzfc) an 
interesting speculation.

The AGI will not be able to cure cancer --- that would be a hypothetical 
Superintelligence task. The AGI will not be able to predict the Stock Market a year 
out, nor the weather, but it should have good guesses the same as meteorologists.
Even a Superintelligence will not be able to predict the weather a year from now 
better than seasonal guess work, nor predict the Stock Market a year from now.

Nor will the AGI nor Superintelligence be able to read your mind (to do so would 
require a CAT scanner wrapped around your head.)  But it will be able to recognize 
your intent from your body language, if you are not faking. If it can see your eyes 
it might be able to guess you are faking.

You might think I have been writing to stake a claim against the possibility of AGI, 
but if you think that you are wrong. All I claim is this putative AGI will not be 
sentient, and will not be conscious. It will just be task-powerful, very 
task-powerful, but that is all. That is what AI developers are coding their systems 
to be, and yeah, maybe in 3 years we will see a general purpose AI system similar in 
power to humans, and a lot more powerful than us in all the usual tasks computer 
software can already do (browse the web; implement fast-sort on a million word list 
in a second; crack weak codes; render cartoon video; &c.).

I am not sure why everyone is surprised at the recent openAI advances. Browsing the 
web with a hunk of metal in a box sitting next to you was already a superhuman task. 
[“Solved your task!”](https://www.youtube.com/watch?v=MO0zP-SB5hk&pp=ygUPZml4ZWQgeW91ciBmbGFn)

What we are getting is more of the same, in more interesting and useful ways. It is 
good. Don't resist. Embrace.

### The Exponential Speed-ups

A lot of the tech nerd basis for both AGI soon and Superintelligence soon-ish (within our lifetimes) are based on exponential growth in the power of the algorithms. While this is algorithmic complexity power, sometimes it also naïvely refers to a vague general growth in "intelligence" --- which is unscientific, since it cannot be clearly defined, but it can be qualitatively estimated, so it is fair enough "social science" I suppose.

Well, as any physicist or biologist will tell you, these tech claims are pretty 
dubious. No physical system can exponentially grow for very long. They always hit 
physical barriers.  Some barriers are obvious (food for animal, electricity for 
machines). Others might not be obvious and we have not thought of them. What is the 
natural limit on growth in algorithmic complexity power for example? No one knows. 

Here I can only speculate, but for what it is worth, I suspect there is a plateau for growth in algorithmic complexity, even for a neural network.

I do not think bigger and bigger networks scale up easily in any intelligence metric you care to define.

But this is not an issue I am a pessimist about. My claim here is mainly just to be 
an annoying contrarian. I do not have any metaphysical philosophical objections or 
proof that an algorithmic complexity barrier exists, except for the P$\ne$NP 
barrier.

I believe in the (unproven) P$\ne$NP conjecture, so no Superintelligence is ever 
going to be able to solve NP hard problems in polynomial time.


### "Humans Do Not Really Understand Anything"

David Shapiro (previous video reference) makes the counter to the philosophers who 
think the LLM systems and LangChain models "don't truly understand anything" by 
claiming, "Well humans don't either."  So he calls the "do not truly understand 
anything" argument frivolous.

Does Shapiro have any self-awareness? The whole argument form: "humans do not know 
anything either," is worse than even frivolous itself, it is slightly facetious (best 
can be said for it) but also mostly inane. If we do not understand anything then 
Shapiro does not understand anything, therefore he does not understand machines 
cannot be conscious, or even the possibility computations cannot generate subjective 
mental qualia. By the way, I am *not* a human by Shapiro's standards. I do understand 
a little bit of stuff. Just so you know. (But you of course cannot know since you are 
human and so why are your reading this? Your brain (and "society") forced you to, 
obviously.)

I think he just doesn't get it. It is not about understanding when it comes to 
consciousness, it is about subjective awareness. The machines are incapable of 
subjectivity. They can mimic the behaviour of subjectively aware thinkers, but 
without being subjectively aware creatures.

This is not a problem for AGI. Most definitions do not demand an AGI has to be 
conscious. We only demand an AGI should be able to arbitrarily closely mimic 
conscious driven behaviour.  We will be programming them to do so.

By chaining various AI system together to form a "society of AI" we are today within 
technical reach of a weak AGI, but not a true AGI.  So here is my stake for fun:

> I bet we will *not* get AGI in 18 months, not even in 10 years.

Why? Because I see the number of purely behavioural tasks humans and animals can 
"solve" as far larger than the lists you have seen.

Humans of course do not understand everything, but we understand our own mental 
qualia . No one else can do this. I cannot understand your mental qualia. This is an 
impossible task for a machine. How does it gain awareness of any qualia? It cannot, 
since computation cannot generate mental qualia, because computation is objective 
phenomenology, and there is a singular limit to the consequent behaviours.

If a type of long term behaviour *requires* thinking about one's qualia, then that is 
no a computable task for an artificial neural network nor for any computation.

I guess the interesting question is whether humans do perform tasks that require 
thinking about mental qualia? Knowing your own qualia. I do not know the answer, 
which is why betting against true AGI is only a bet. In some ways I hope I am wrong, 
because it tells us something if an AGI can be spiritual.

It might suggest mental qualia are epiphenomenal. Which is a long-standing question 
in philosophy of mind.

Note that true or strong AGI cannot be a proof of this conjecture (that mental qualia 
are epiphenomenal) but it would be a strong suggestion. It might simply mean 
biological evolution could not produce intelligent beings like humans any other way, 
but we will have discovered a non-biological way, which would be fascinating.

It would be near to a new pinnacle of human science. A true Einstein level moment in 
the science of cognition. But that science is all behavioural science, it tells us 
nothing about consciousness. 


### The neo-Behaviourists

Dave Shapiro mentions a reddit post complaining about all the debate about whether 
the bots are conscious or not. I have some sympathy for such complaints. But it all 
depends upon what your purpose and interests are. 

For AI tech enthusiasts like myself we do not *need* to care about whether the 
machine is conscious or not, we care about behaviour only,

For panic and dread moral philosophers, they *do* need to care, because they might 
worry it is unethical to turn off such electricity guzzling machines. Do they ever 
worry the very fact they are guzzling electricity that could otherwise be used to 
heat or light homes for the poorest households or house the homeless is immoral!?

For geeks who are into philosophy of mind, also like myself, we also do care, because 
there are interesting negativa associated with claims about machine consciousness or 
zombiehood. These are important for advancing non-stupid metaphysics.

Here is the synopsis of the reddit poster:
> \[Dave:\] ... there was actually a great Reddit post where it's like, "can
we stop arguing over whether or not it's sentient or conscious or understands
anything that doesn't matter. What matters is it's its physical
objective measurable impact and it whether it is objectively or measurably 
correct or useful."

This is a dumb-dumb materialist take. However, it is the correct approach if you 
are only interested in engineering and science.

If you are also interested in philosophy it's a dumb take.

Dumbness and stupidity can be relative.

When such behaviourists (which is the philosophy and ideology this reddit poster 
is expressing) start to impose their worldview onto the rest of us, I have to 
take issue with them. It is a type of spiritual violence. Is the reddit poster a 
twelve year old? Intellectually they almost certainly are. Really frikin' smart and 
fast coder I bet. Knows a lot of words and e-gaming rules. Philosophically, 
intellectually, and spiritually a baby.

Let me be crystal clear:
> (Bijou, c.2023) You cannot measure consciousness, since it is not an objective 
property of beings. You *can* measure broad intelligence, using standard metrics.   
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;However, cognitive scientists sure do want to 
*think* they can measure consciousness. So they invent behavioural metrics. These 
are never measuring consciousness. They are measuring neural correlates and whatnot. 
But science can never know if the neural correlates indicate subjective mental 
content. It is entirely plausible if we measure analogous neural correlates in AI 
systems they will have no subjective content backing them at all, total zombiehoood.  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;As much as we scientists would like to bring 
consciousness studies out of philosophy and metaphysics and into the realm of 
science, we will never be able to do so, not without completely redefining the meaning 
of Science to include subjective mental states and metaphysics.  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I suggest we agree to not redefine science. Let's 
keep some category theoretic boundaries here, because they serve a useful 
classification purpose.

You could complain to me that I am being silly and infantile wanting to keep science 
objective. But it is not really that, since I am free to read science research and 
reclassify it for myself if I think it reeks of subjective nonsense. The bigger issue 
is that I also want to participate socially in science, and separately in philosophy, 
and not muddle the two together too much, because it clouds clear thinking.

Yeah, I am a muddleophobe. You got a problem?


### Everything in Its Right Place

I love the prospect of democratically distributed AGI technology. It has a rightful 
place in the world, relieving human beings from a massive amount of tedious 
mind-numbing labour, opening up creative spaces, showing that normal commercial 
artists and speech-writers are not really geniuses, they're just specialists.

I love the idealist's hopes for the prospect of AI Superintelligence too, because if 
we can engineer *that* then we would show physics contains *new* possibilities 
for human intellectual advancement that can go beyond the limits of our brains. 
Hand-held calculators back in the 1970's already did this, lets not forget, long 
before the 
Apple Macintosh came around.

I still do not think a computation can generate subjective phenomenal qualia, and so 
the machines will never be conscious, so there is no moral dilemma in building them. 
We can choose to shut them down if they show a hint of running amok.

If we are not fast enough in shutting the SkyNet thing down, well... more fools 
be us.

In the latter case: universe gives hint human beings were never fit to last long.

Is this an existential threat? No. But that is only my opinion. People should respect 
the opinions of the doomsayers, because they can help prevent doom.

If I am right the doomsayers still have a use, they can prevent the doom and despair 
that excites those who believe machine superconsciousness is possible and inevitable. 
It is not a bad thing to show people how to avoid "the inevitable".

That is a paradox. How to prevent the inevitable. I should write a book with that 
title. 

The thing is, what we often say "is inevitable" is often rhetoric, designed to 
excite exactly the prevention of whatever we are alerting people to, it's a kind of 
inverse Murphy's Law. Whatever you claim is inevitable will never be, because you 
can't be so prescient.

Jokes aside, I don't see an AI Singularity as possible, so it is not only *not* 
inevitable, it is fantasy. But if *_you_* think it is next-to-inevitable and only a 
slim chance we can avoid fabricating such a machine, then shouldn't you show a bit of 
loyalty to your species and prevent such technology?

This sounds like going back to before WW-II to try to prevent all nations from 
developing the nuclear bomb. Not gonna happen. But note that I am under no personal 
compulsion to help you solve your AI Singularity near-inevitability problem, because 
I don't believe in it. But I want to help you, because I don't want you doing silly 
things like blowing up AI research labs and that sort of general Ted Kaczynski 
nonsense.

Apart from governments getting some sensible enforceable regulations in place, and 
researchers being held to codes of ethical conduct, and the new types of Asimov 
Rules, and kill switches, and loads of other safeguards, I'd also suggest typing into 
chatGPT-9 (the version before the superintelligent one),

> "How can we (humanity) completely prevent an AI superintelligence getting beyond 
human control? Also, how can we eliminate the threat of catastrophic climate change 
and nuclear war without relying upon an AI superintelligence? And while you are at 
it, since I'm a fantasy world neoclassical economist, how do we eliminate hunger and 
poverty without massive birth prevention and eugenics methods?"

The answers are already out there, so chatGPT-9 will give you the answers, and 
probably several options, and will probably miss several others. Although by then 
it will be flossAssistant-9.

I am an MMT economist btw, so I'd be modifying that prompt to read:
> "How can I convince neoclassical economists they are wrong, and that the present 
monetary system is an MMT system? But give me a solution that is logically tight and 
with a psychologically convincing narrative, not too much jargon, because 
neoclassical economists are ideologues who never like to admit their economics is 
flawed and fantastical."

This is not the end of my thoughts on singular limits, they are critical to a lot 
of ontology and metaphysics, and need to be revisited for several topics.

## Caveats

I write all my blogs on-the-fly, and they are unfunded and not peer reviewed, so 
you cannot take any of my technical statements for granted. Please feel free to check 
them, and let me know, if you are so inclined, if I made any booboos. (This does not 
apply to my philosophical remarks.)

I also wish to remark on some deflationary nuances. I am not writing these blog 
articles in the hope of convincing the AI nerds they are wrong. I am rather staking 
my claims. It is "for the record." 

In the MMT (Modern Monetary Theory) community we also do this all the time. We 
recognize the state currency systems are simple public monopolies, but the policy 
makers running these system do not know this, so they are using the monetary system 
in a terrible tragic way. It is important for an MMT advocate to point out a better 
way to design policy using the current system. We thus stake claims that run counter 
to reality, because they are a base case for analysis if one is given an MMT system, 
but no government anywhere is implementing the MMT base case. Instead they are all 
acting as if the full available policy space is far narrower, and they do so by 
self-imposing needless austerity constraints.

The monetary system in New Zealand (or the USA, or Australia, Canada, Japan, the UK, 
several countries) is objectively an MMT system (you only need to examine the Law of 
each nation to check this, you do not need any economics.) The economic policy, on 
the other hand, is not informed by this MMT understanding of the legal and 
operational reality.

Likewise with the current fake AI crisis and 
<font style="color: orangered;">hair on fire moments</font>. (Moral
philosophers, who are greedy and hence immoral, eyeing a chance to get funding? OK, 
maybe they are not all greedy, some could be sincere. Just allow me a little bit of 
cynicism.) But who knows?  Maybe I am on the wrong side of this, certainly by survey 
numbers I am in the rapidly shrinking minority, so maybe governments should clamp 
down on AI research. I am just staking a claim they do not need to. The regulation 
needed is to open and democratize the technology, impose binding ethical guidelines 
for fair and safe uses, and limit the electricity consumption involved. I am pretty 
sure that is the only regulation needed, it is minimalist and gives research the 
appropriate freedom to explore and innovate.

Reason being, with such regulations we prevent abuse of the technology. It does not 
prevent an AI Singularity from emerging, but I think we should not want to prevent 
that. If you disagree then you should be trying to convince governments and engineers 
to impose further restrictions. As I have tried to explain, we do not need to limit 
the ethically appropriate research because there is a singular limit preventing 
sentient machines from emerging.

People panic about the existential threat of superintelligent AI, without any 
understanding of whether it is physically possible to build superintelligent systems. 
I stake the claim it is not possible. But just as it *is possible* to build nuclear 
weapons that could, in principle, if well-coordinated, wipe out all life on Earth, so 
it is possible advanced non-sentient AI systems could cause mass death and disaster, 
if allowed to run amok with pre-programmed goals and zero empathy.

If such an AI system was built, it would almost be proof advanced statistical machine 
intelligence is incredibly dumb, and totally lacking in a spiritual quality we call 
empathy (basic subjective awareness of theory of mind 
*and the consequences thereof*). 
It would be a real shame then if humans were no longer around to write that 
empirical proof up in the great cosmic arXiv.


<table style="border-collapse: collapse; border=0;">
    <colgroup>
       <col span="1" style="width: 38%;">
       <col span="1" style="width: 40%;">
       <col span="1" style="width: 40%;">
    </colgroup>
<tr style="border: 1px solid color:#0f0f0f;">
<td style="border: 1px solid color:#0f0f0f;"><a href="../29_retrocausalityschmality">Previous chapter</a></td>
<td style="border: 1px solid color:#0f0f0f; text-align:center;"><a href="../">Back to Blog</a></td>
<td style="border: 1px solid color:#0f0f0f; text-align:right;"><a href="../31_antituring">Next chapter</a></td>
</tr>
<tr style="border: 1px solid color:#0f0f0f;">
<td style="border: 1px solid color:#0f0f0f;"><a href="../29_retrocausalityschmality">Retrocausality-schmality</a></td>
<td style="border: 1px solid color:#0f0f0f; text-align:center;"><a href="../">TOC</a></td>
<td style="border: 1px solid color:#0f0f0f; text-align:right;"><a href="../31_antituring">Anti-Turing</a></td>
</tr>
</table>
