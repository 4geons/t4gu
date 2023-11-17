---
title: "The Aharonov–Susskind Hand Wave"
date: 2023-04-14
toc_depth: 3
draft: false
katex: true
toc: true
disableTitleSeparator : true
---

This week I get to comment on my almost all-time favourite physicist, Lenny Susskind. 
And no need to think me weird for watching Susskind lectures as my dominant form of 
entertainment --- the rest of you are watching HBO, Disney and Netflix saccharin, so 
how is that less weird?

The excerpt is from TTM 
[Lecture-2](https://theoreticalminimum.com/courses/particle-physics-3-supersymmetry-and-grand-unification/2010/spring/lecture-2) 
of the course 
[“Particle Physics 3: Supersymmetry and Grand Unification”](https://theoreticalminimum.com/courses/particle-physics-3-supersymmetry-and-grand-unification/2010/spring/lecture-2).

This post is also a bleeding of my theory pages into the blog. I should always 
apologise for that, I try to keep the blog at the philosophical level, but what else 
am I to do with my lunchtimes when I get a writing itch to scratch? 


## Spin is Not Spin

Astute quantum mechanics (proper noun) will immediately know what I'm about 
to describe, but I promise you it's not the familiar normie theorists${}^\dagger$ 
version of fermion spin. So please read onwards.  (Although if you have read T4GU in 
the past you probably will know what I'm going to describe, but a little repetition 
won't hurt your brain, and might help you explain this stuff to your students.)

${}^\dagger$ Textbook well-read-can't-think-for-themselves physicists.  Hey!... I'm 
not saying you boys and girls, deers, dolphins, wolves, bunnies, unicorns and lynxes 
(did I miss any animal spirits?), aren't smarter than me, it's just you have orthodox 
biases that I have inoculated myself a little bit against, and worked quite hard at 
it and at considerable personal and career costs. Which I am happy--sad to admit makes me 
off-the-bat quite mad and insane by normie standards.

All right. So Susskind is trying to explain fermion spin. The distinguishing features 
of which are that,

1. fermions are spin-coupled, meaning if we rotate one of an entangled pair and not 
the other, we will observe interference effects.
2. If we rotate one of them by $2\pi$ radian we still observe interference effects 
(this is a supposedly "deeply quantum mechanical" aspect of reality --- but it is 
not, it's pure classical physics, which is what this blog post hopes to explain, and 
this is something even Susskind does not yet know).
3. If we rotate by $4\pi$ radians the interference goes away (we perform an effective
identity rotation).

On the inflammatory Point 2 here: I have to deflate a little. I am not going to 
afford myself the time and web page space to fully explain how classical mechanics 
can account for interference, because it doesn't!  You need General Relativity to get 
"quantum" interference, but more than that, you need topologically non-trivial 
spacetime, so Classical general relativity does not suffice. 
I won't try to explain all that here because that's what most of the rest of T4GU is 
all about, so read all the rest of my stuff. But do not read like a fanboi. Read like 
a sincere good-faith critic, and let me know where I am wrong, then I'll count you my 
friend.

On Point 3: the rotation by $2\pi$ is still the identity rotation --- for geometric 
objects. But fermion *wave-functions* are not physical objects, they are mathematical 
operators, or Multivectors, and there is no reason at all why mathematical objects 
should obey the identities of physical--geometric objects. And indeed they generally 
don't. Which is not "quantum mechanics" it is just standard mathematics. Most 
geometric (Clifford) multivectors are not physical things. I will elaborate more on 
this in due course.

What?  Did you think $\pi$ is a physical number?  LOL.

OK, but to warm you up, a good example is a mirror reflection.


### An Example of a Non-physical "object"

The mathematical operator for a mirror reflection in geometric algebra is pre-and 
then post-multiplication by a unit vector, let's say $\vec{n}$. The vector $\vec{n}$ 
completely specifies a reflection *in any space dimension or signature*. How? Well it 
is any unit normal to the plane of your desired reflection. We have to chuck in a 
minus sign too. So the reflection of any arbitrary multivector say $A$ 
is the transform,
$$
 A \longmapsto A^\prime= -\vec{n} A\vec{n}.
$$
Check this works, for your homework if you please.

If $A$ was a vector then you could use a matrix instead, to "avoid" the double-sided 
Clifford multiplication. But why-tf would you want to do that? It'd only work for 
vectors. The above geometric algebra (GA) description of a reflection works for 
*any* multivector, in any dimension, vectors, tensors, pseudoscalars, and anything 
else you care to specify. If you are a computer scientist, especially if you do 
robotics or vision, you will instantly appreciate why you should not be using a 
matrix algebra library. You should be using a Clifford algebra library. But such 
libraries are not well-supported, so maybe think about contributing to computational 
Clifford algebra software development for the [GNU FSF](http://www.gnu.org) stuff?

My point is that the reflection is not a physical thing. It is a description of 
an abstract process. The reflection matrix is an illusion, or rather, it is not a 
physical thing (I am a platonist, so I don't think it is illusory). The "proper" 
way to perform a reflection is with the above geometric algebra product. This product 
is not physical. There is no entity or daemon or ex-machina you can point to here that 
"carries out  the reflection."

Which, when you think about it, makes perfect moral sense. An actual physical 
reflection transform would involve instantly turning your body back-to-front 
(excruciating agony for a split second if time is involved) and jumping instantly 
across space without a wormhole. It's an impossible operation, it is non-physical.

"Huh?" you say. 

When you look at your image in a mirror you do not see a transformed reflected
self, all you see are photons that *look like* what your surface would look like *if 
you had* miraculously "performed" an actual metaphysical reflection.

Of course, reflection operations *theoretically* are extremely handy, because they are 
symmetries of Nature. You generally want physics to remain invariant if we 
hypothetically could "perform" a reflection on the entire universe. (At least you 
would if you did not understand chirality in the Standard Model and why left--right 
symmetry is *not* something you want to perfectly preserve, if you wanted your 
universe to be inhabited by biological creatures.)

Why do we care about such symmetries? It is thanks to Emily Noether that we care. 
She showed us that spacetime dynamics are comprehensible only because Nature 
preserves certain symmetry groups --- meaning the laws of physics are invariant under 
certain simple symmetry transformations. Without such invariants there are no hard 
laws of physics.

Why does Nature preserve the symmetries it does? Do not ask me. Lord only knows. 

All that scientists can give you here is an anthropic argument: *the symmetries are 
preserved otherwise we would not exist*. (Note it is *not* valid to say "the 
symmetries are preserved *because* we exist," since that muddles correlation with 
causation.)

Now, as a good honest Satanist, you might object that we should not expect there to be 
any "Laws" to speak of! Emily Noether was one of those infantile holier-than-thou 
Believers in the Divine!  Well, yes. You'd be right if Satanism (playing random dice 
with the world) was a true thing. But it isn't. (The Devil damn those annoying 
empiricists!)


### What are the Spinors?

The first thing to straighten out before we knot things back up again, is that 
the mathematical objects we call "spinors" are just mathematical objects. They are not 
ontological. The fermions they describe are something else entirely, we know not what 
exactly (but they are simple, like stringy things).

Trying to figure out what quarks and electrons are exactly is like trying to 
picture what an alien creature on a distant planet looks like who has no advanced 
technology to send us images (we've only just picked up their whole civilization's 
metabolic heat signatures perhaps). We know a lot about what they cannot be like. 
They can't be a hundred feet tall and have glass bones. Actually, electrons and 
quarks are a whole lot simpler, but it's just being so far removed from their 
characteristic length scale makes it hard to have confidence about what their 
geometric and topological structure actually looks like.

Anyway, what quantum mechanics (QM) does is provide us a theoretical formalism for 
describing measurements. QM does not tell us anything about what happens in-between 
measurements. So QM is a **_boundary theory_**. 

General Relativity and classical mechanics are bulk phase space theories, they do 
(purport to) tell us the structure of the entire spacetime cobordism between 
measurement boundaries. QM does not. We "learned" not to ask why not! (I have had to 
un-learn this.)  Orthodox QM only worries about the boundaries.

This is essentially why people have this insane idea that there is a "collapse" of 
the wavefunction. To my mind there is no such thing, but if all you describe are two 
timelike separated boundary regions then naturally your theory is going to look like 
magic, since "anything at all" can happen in-between your measurement boundaries 
(including entire lifetimes and cycles of religion and collapses and falls of whole 
Roman Empires), and the best you can have is a statistical description, and claim 
those events are a bit unlikely. Nevertheless, if you are an orthodox person you will 
still think all those wild events do occur, they're just not the ones you "measured."
This is in the case you take QM seriously as telling you anything can happen. I don't. 
You are on the path to multiverse madness there my friend.

No one of sound mind ever said the orthodoxy of academia is completely sane.


### A Spinor Seen in the Wild

The way to understand spinors is to write down the spacetime (Dirac) or the Pauli 
algebra. I'll stick to the 3D Pauli algebra, where the time dimension is Newtonian 
(non-relativistic). Then we have a basis frame for any fundamental particle or wee 
little system, that we chunk together as a whole for measurementation (a made-up 
word, but I like it) purposes. Here the space index is $k\in\\{1,2,3\\}$.
$$
1,\quad \sigma_k=\gamma_0\gamma_k,\quad I\sigma_k,\quad I=\sigma_1\sigma_2\sigma_3.
$$
The implied products above are all *geometric products*, which means in the full 
algebra in general they are going to be mixed grade (William K. Clifford's great 
insight was that this mixing  of grades, so incommensurate dimensions, was an ok 
thing to do, if you do it right, and in fact very powerful and efficient).

The base $k$-blades above are of course pure grades. For general 1-vectors 
however, the geometric product is a simple sum of an inner plus outer 
product,
$$
ab = a\cdot b + a\wedge b
$$
and so is mixed grade unless $b$ is orthogonal to $a$ (in which case $a\cdot b = 0$) 
or they are parallel (in which case $a\wedge b = 0$).
The first term is a scalar (same as the traditional vector inner product), and the 
second term is a bivector (it does not exist in traditional vector algebra, but has 
analogues in the $2$-forms or tensors.)

Scalars are $0$-grade by the way, and vectors are $1$-grade. A spacetime four-vector 
is still $1$-grade, as is any vector in $n$-dimensions. Vectors are one-dimensional 
objects in all geometries.

Geometrically the bivectors are oriented elements of area. So are perfect for 
describing periodic orbits or particle helical motions, what was previously called 
"vector curl", circulating planar currents, and whatnot: anything that in olden times 
was said to have a "complex structure" --- which in fresh modern geometric algebra 
times we say is simply a *bivector algebra*.

The pseudoscalar $I$ is an *oriented* relative-3-space volume element, so is a 
multivector of *relative* grade-3, and since it is only grade-3 we call it a pure 
3-blade. That means only relative to the Pauli algebra, which has the spacetime 
*bivectors* $\sigma_k$ as basis vectors. This is a source of some confusion for 
beginners, so pay attention.

So in the proper Spacetime Algebra (STA) or 
Dirac algebra, the pseudoscalar is actually an oriented 4-volume, a spacetime volume, 
$I=\gamma_0\gamma_1\gamma_2\gamma_3$. In the non-relativistic Pauli algebra it is 
however fine to think of it as an oriented 3-volume. (The terminology "relative 
vector" here just means we include a $\gamma_0$ factor to have some formal agreement 
with the traditional old-school Pauli matrix algebra --- a bow to traditionalism and 
our ancestors.)

The Pauli vectors $\sigma_k$ above are thus actually strictly speaking *bi*vectors 
from the Dirac spacetime algebra, which is the Lorentz algebra of the $\gamma_\mu$. 
But in non-relativistic physics the timelike vector $\gamma_0$ is pretty passive, we 
don't bother with Lorentz boosts, and in order to conform to the orthodox Pauli 
matrix algebra making the Pauli base vectors actually STA bivectors is superior (for 
the garage variety quantum mechanics to not lose their sh$\ast$t).

Because the Pauli basis "vectors" $\sigma_k$ are really bivectors, we call them 
*relative vectors*. They are vectorial only relative to a given fixed time direction 
$\gamma_0$. Hopefully that relieves the confusion.

The *relative* space trivectors $I\sigma_k$ are in fact actual bivectors in the Dirac 
algebra. (There are two $\gamma_0$ in each of them, so they vanish to a sign with 
the geometric product: $\gamma_0^2 = -1$. East Coast signature my dudes. It's the only 
correct one.)

The natural elements for rotation generators are thus the space bivectors 
$I\sigma_k$. Maybe you can now see where the fermion spinors come in?


### Rotations

In geometric algebra the rotation of *any and all* physical objects is accomplished
the same way as the Greeks or Gauss might have discovered:
two mirror reflections make a rotation, and *all* rotations can be described by a pair 
of mirror reflections --- in any space dimension. (Euclid knew this, right?)

(Again, you could ask a textbook nerd: why with the clumsy matrix algebra? You only 
need a pair of simple unit vectors to describe any rotation. Impress your friends at 
dinner parties.)

To compactly write the rotation for an arbitrary multivector, say $A$, we can make use 
of Euler's formula,
$$
e^{I\theta} = \cos\theta + I \sin\theta.
$$
Which follows purely algebraically from the pseudoscalar's property $I^2 = -1$. No 
"complex number" here in sight. It's all real physical geometry, with real numbers. 
The geometric things are graded.  The grades imply the olden times "complex 
structures."  But in the geometric algebra we have far superior power here, because 
we immediately see that there are several distinct "complex structures," one for $I$, 
one for the lightcone $\gamma_0^2=-1$, and one for each bivector.

We should not even call the latter "complex structures" it is a bad misnomer.  They 
are *bivector algebra* structures, pure and simple. While $\gamma_0^2=-1$ is lightcone 
structure. And $I^2=-1$ is spacetime bulk structure.

All right! Now you are somewhat smarter than Lenny Susskind and Edward Witten.
Pretty good days work huh?

The rotation operation is then computationally,
$$
A \longmapsto A^\prime = R A \tilde{R}
$$
where $R$ is called the rotor, and $\tilde{R}$ is it's *reverse*. So what are those?

I like to first use the two mirror normal vectors, let's call them $n$ and $m$.  Then the rotor is simply their geometric product:
$$
R  = nm.
$$
Remember that is mixed grade generally, it has a scalar part ($n\cdot m$) and a bivector part ($n\wedge m$). The reverse is $\tilde{R}  = mn$.

Expanded out then, the rotation could be written,
$$
A \longmapsto A^\prime = nm A mn
$$
How does this connect with Euler's formula?

**Homework?**  I mean, *please* try it for homework. It's one of those rare times in 
life when you can simulate independent discovery, standing on the shoulders of only a 
pygmy (that's me).

First, just recall the scalar product is the old vector inner product, so we have 
the angle $\theta$ say, between $n$ and $m$:
$$
 n\cdot m = |n||m|\cos\theta = \cos\theta
$$
Second, the outer product, although an oriented area, has a magnitude, namely the area 
of a parallelogram you can form with the two unit vectors, so we also have,
$$
|n\wedge m | = |n||m|\sin\theta = \sin\theta.
$$
(In fact this is half the *definition* of the outer product, which I neglected to 
provide above, the other half would be the plane of $n$ and $m$.)

Thirdly, the last ingredient, is that the plane of $n$ and $m$ is a bivector, 
$$
B = n\wedge m
$$
but I will go ahead and unit normalize it, by redefinition:
$$
B = \frac{n\wedge m}{\sin\theta}
$$
then $B^2 = -1$. As you can check for homework.

See how awesome this is?

Not only is the real geometric bivector giving us a 
"complex structure" it is not a dumb one, it "knows about" the oriented plane of the 
rotation in it's native Euclidean or Riemannian (flat gauged) space.

The coup de grâce to olden vector algebra infantilism is now the Euler expression 
for the general rotation, via a rotor:
$$
R = e^{-B\theta/2}.
$$

"But hangabout? What's that?" you say. Where'd the factor of a half-angle the 
devil come from? 

Well... I've been ultra lazy and not drawn any pictures. You can find the picture 
version in the [theory pages here](/t4gu/theory/3_geometric_algebra/).
But **_if I had drawn the picture_** even only in 2D, you'd have been convinced the 
double reflection $A\mapsto nmAmn$ is a rotation in the plane of $n$ and $m$ by 
**_twice the angle_** between $\vec{n}$ and $\vec{m}$.

So the rotor can be dialed back a tad by reducing the angle in the Euler formula. 
Effectively that'd mean using two different unit vectors for the two mirror 
reflections, with a spread between them of $\theta/2$. It's just a rescale of the 
bivector in other words.


## Demystifiction of the Fermion

Now we can see why fermions need a $4\pi$ rotation angle to return to the identity.

The mystery was due to the fact *all the textbooks and experts* (except 
[David Hestenes](http://geocalc.clas.asu.edu/) and colleagues) for over 80 years 
have ben treating electrons and quarks as *being the actual rotor!*  How stupid was 
that! (Not a question.)

Of course, I'm just as stupid${}^\ddagger$. I didn't realize the rotors are in fact a 
rotation instruction until I read Hestenes and 
[Lasenby and Doran](https://www.cambridge.org/core/books/geometric-algebra-for-physicists/FB8D3ACB76AB3AB10BA7F27505925091).

${}^\ddagger$I never consider it a terribly bad character flaw to be as stupid as 
Dirac, Pauli and Gell-mann.

The spinor (for quarks, electrons, all the fermions) is a mathematical instruction, 
not a fundamental physical particle of any sort.  The instruction is to rotate your 
algebraic quantity representing a "measurement observable" onto the rest or co-moving 
frame of the fermion.

Because fermions (probably) physically circulate some energy (we know not what form) 
all measurements made on them will often need to take this circulation into account, 
unless it's a spin insensitive measurement like position or linear momentum.

The quark or electron doesn't give a fig what your spinor does, it is not a spinor. 
But if you wish to describe the measurement outcomes, then you'd better damn well get 
the orientation of frames right if the measurement is rotation sensitive.

So one way or another, for a circulating flux of energy, you need to use a rotor in 
the spinor. The spinor really is *mostly rotor*.

Of course, spinors also are useful for describing entanglement, and probability 
density, so there are other statistical factors multiplying a rotor to yield the full 
spinor, plus a tensor structure if it is entangled.

However, for unveiling the mystery of "quantum spin" we only need to care about the 
rotor part, and the entanglement (to describe the interference effects).
Once you do this, perhaps don't go around in public claiming you are smarter than 
Feynman or Witten, but if you privately confess to me that you feel like you've had a 
fleeting glimpse into the Mind of God, well then, I won't deny you that jouissance.


### Try rotating a rotor!

I tried to prime you up for this, but I can't help it if you still end up thinking 
I'm "pulling a fast one." But I'll have one more go at priming your intellect.

Recall, only physical or intrinsic connected geometrical objects, have to return to 
the identity upon a $2\pi$ rotation. If you craft some composite object that is not 
simply connected, then there is no Gödel-given or other deity, reason to expect that 
it'll be invariant under a $2\pi$ rotation. (SCRIPT: Susskind performs coffee cup 
trick without a coffee cup.) In fact, the abstract group of rotations 
SO(3) does not demand such invariance, since it is not a simply-connected group. 

It does not work in strictly 2D because rotations in 2D are simply connected. 

In 3D space there is connection: the coffee cup trick shows there is a smooth path 
in the space of rotations from $2\pi$ to the identity rotation, but you can only get 
there by going through $4\pi$.

((The Lie group SO(3) is connected, you can get to any rotation smoothly from any 
other, but it is not simply connected, meaning there are loops in the space of 
rotations than cannot be shrunk down to the identity. This is the source of the 
"weirdness" we are about to uncover. Of course, it ain't weird, because Lenny 
Susskind and oodles of others before, just waved their hands about to show you that 
you can do the coffee cup trick. I mean to say, the coffee cup trick always looks 
weird, like magic without magic... like... "did I just blink for too long there?"))

To obtain the proper associated connected group you need to use the universal cover, 
or SU(2). This is *simply* connected. As a double-cover it's identity transform is a 
$4\pi$ rotation. Bear in mind, this is pure classical Euclidean geometry. There is 
nothing "quantum" about this.

The reason these fermion groups do not show up in classical mechanics and GR is 
because classical mechanics employs a bulk spacetime cobordism, or phase space 
evolution, formalism. Classical mechanics seeks (or pretends to) track all the 
particles all the time. QM does not.

Why is this important? (Apart from the empirical observations that we are unable to 
track particles precisely as Newton and Laplace had thought one could.)

It is important because if we cannot keep track of particle motions (or equivalently 
their field modes) we'd better have something else invariant to be able to make any 
predictions at all. Absent the phase space trajectories then, the only thing left for 
the garage variety grease-stained quantum mechanic is the fundamental symmetries. We 
need to know what symmetries are obeyed to have any hope of doing quantum mechanics.

In classical mechanics the same symmetries hold, but we do not need them so 
desperately. Tracking motion in phase space is overkill --- it is also employing the 
symmetries, but assuming a whole lot more. Heisenberg came along and said, 
"Tsk! Tsk! You may not (always) assume so much!"


### Really, for real this time, let's try!

I can go over this bit anew every time I write about it, and I still find it 
annoyingly obscure.  But it is very basic and simple. Maybe if I tell you it is 
super elementary and basic you will digest it better than I ever have.

The problem is to determine how we have to transform one rotor, say $R_\alpha$ which 
encodes a rotation by $\alpha$, when we also perform some *other* rotation of our 
system in some other plane, say $R_\theta$.

It's the simple and elementary problem of how to compose rotors.

The "big" (conceptual) problem being that rotors are not full rotation matrix 
operations. A rotor acts double-sided in the general case. (For scalars or pure 
even-blade objects the rotor commutes through with a sign and one can do a 
single-side multiplication like you'd do with a matrix, but the general case is that 
you need to do the double-sided multiplication, which comes inherited from the 
fundamental mirror reflection operation.)

So let's calmly think about this.

Initially it seems too simple. To perform one rotation then another is a simple 
composition by the geometric product:
$$A^{\prime\prime} = R_\beta R_\alpha A \tilde{R_\alpha} \tilde{R_\beta}
$$
Note the wedge product term in the geometric products is anti-symmetric: 
$a\wedge b = - b\wedge a$, which is where the non-commutativity of rotations in 
$D\ge 3$ comes from, or is encoded, in the geometric algebra.

But that's how the multivector $A$ gets rotated, which is representing some 
"real" geometric quantity. It is not how a *rotor itself* gets rotated.

To see why, we have to think carefully about what we mean by "rotating a rotor".

A rotor, in *this particular context* is not just some physical or real geometric 
object. No. It is an instruction for a rotation. So we have to shift mental frames a 
bit and think about what happens to one rotation instruction if we rotate a frame 
first by some *other* arbitrary rotation. 

It matters because the individual rotor itself is not the full rotation instruction, 
it's only a half of the full rotation operator.

Having just said all this in tedious plain English, I hope you might already figure 
out what has to happen. A half-instruction to rotate will not be fully transformed 
correctly by some *other rotation*.

I am a little bit sorry for what I am about to write, but it's the only way I can 
concretely grasp the proper result.  This is to imagine rotating a real geometric 
object, say $A$, by any arbitrary rotor $R_\theta$, and then "watching" what happens 
to a *particular fixed* inner rotor $R_\alpha$. Whatever happens to $R_\alpha$ will 
then tell us how we should transform $R_\alpha$ so that it remains the same rotor 
as it was before the general rotation.

((I want to re-write all that so it is simpler and more comprehensible, less seemingly 
like sophistry, but I do not know how.))

Here we go.

First let's again write the expression for rotating any multivector, first by 
the rotor 
(i.e., "fermion" but not really a fermion) of interest $R_\alpha$, then by some other 
arbitrary rotation $\theta$ in the plane of a bivector $B$,
$$
\begin{array}{rl}
A^\prime \\!\\!\\! &= R_\theta R_\alpha A \tilde{R_\alpha} \tilde{R_\theta} \\\\
&= e^{-B\theta/2} R_\alpha A \tilde{R_\alpha} e^{B\theta/2}
\end{array}
$$
Then what is the operation in the rotated frame of acting by $R_\alpha$?  It is whatever gives us $A^\prime$ back, so it has to be,
$$
A^\prime = R^\prime_\alpha A \tilde{R_\alpha}^\prime 
$$
which, using the rotor composition law above, implies,
$$
R^\prime_\alpha = e^{-B\theta/2} R_\alpha.
$$
Good.

But now suppose the arbitrary rotation was a full circle of $A$ around $2\pi$ 
radian?  This would take,
$$
R_\alpha \longmapsto e^{-B2\pi/2} R_\alpha = e^{-B\pi} R_\alpha = -R_\alpha
$$
That is recalling $e^{-B\pi} = -1$, for any bivector $B$, by Euler's formula.
In other words "rotation by $2\pi$" takes a rotor to it's additive inverse, or itself 
but rotated by $\pi$. 

Thus, rotors get acted upon like fermion spinors.  In fact, the electron and quark et 
al, are not such objects.  The fermion is not the spinor.  The spinor is the 
instruction telling you how your measurement apparatus (represented formally by 
unitary operators) has to be transformed to yield a measurement result on the actual 
physical system.  The spinor is not the physical system though, it is a measurement 
operator description of part of the process of "making a measurement."

Let me reapeat: the rotor is not a physical geometric object. It is an instruction, 
and half of a reflection. A weird half though, one full reflection is a full 
double-sided geometric product, $-nAn$, whereas the rotor is two reflections but only 
one-side of the geometric product! The $(nm)$ in the full $nmAmn$. This is the guts 
of why fermionic wave-functions appear to be strange and "un-classical". They are in 
fact purely classical. They just aren't corresponding to any physical stuff.

Would some metaphor or analogy help?  ((For those who distrust mathematics?))

I already offered the mirror reflection analogy, which is better than an analogy 
because it is totally related. There is no physical process of 
mirror reflection, it cannot occur in nature. (Or would require some weird f**k 
Boltzmann brain fluctuations, which you have no hope of ever observing or producing 
by sheer will power or engineering.)

So it is not the quark or electron that is weird under $2\pi$ rotations.  The 
"weirdness" derives simply from the non-simply connected SO(3) rotation group, 
not from "quantum mechanics."  (High school students find the fact the rotation group 
is not simply connected to be weird, and no one claims *they* are doing quantum 
mechanics.)

The geometric algebra rotors are, after all, pure real geometry, there is nothing 
quantum mechanical about them *per se*.  As I noted before, the quantum mechanics is 
the coupling of particles through entanglement (minimal wormhole bridges) and the 
subsequent possibility of interference, and *that* has nothing overtly to do with the 
spin or rotation group symmetries and their algebra.

The quantum mechanics comes into play because we can spin--couple elementary 
particles and thus perform interference experiments. This happens for bosons too, and 
is thus not related to the spin-$\tfrac{1}{2}$ phenomenology, which is purely 
classical physics, but in the context of a measurement formalism, rather than a phase 
space trajectory tracking formalism.

Here's a silly sloppy metaphor which might jog you: suppose you observe a fish 
withdrawn from a body of water. "Oh look, it's got weird gills and is trying to 
breath air with them, and move about by flapping it's fins and tail. Looks pretty 
quantum aquatical to me! Let's base some new age movements and Lacanian psychology 
upon on this creature."

An annoying underground topological biologist like me comes along and says, 
"No, it's not weird! It came from classical water you dolt."


### Discrete Spectrum

At this point I have to try answering the nerds who claim spin measurements always 
end up giving a discrete eigenvalue spectrum. Is that not thoroughly weird and 
"quantum mechanical"?

I mean heck, you don't get discrete spin angular momentum from a Globetrotter moving a 
basketball on their fingertips, do you?

Yeah, but not so fast Dr Meadowlark Lemon. 

1. We never measure the electron angular momentum, so we do not know it is discrete. 
Orbital angular momenta in atoms are totally different, and are due to symmetry 
invariants, not discrete angular momentum.
2. The spin plane turns out discrete but only because we need to use a honking great 
magnetic field (from the pov of an electron), which naturally cannot help but 
polarize the electron beam, so we are enforcing a discrete spin measurement, we are 
not "seeing" any intrinsic discreteness.
3. Same goes for hyperfine splitting of energy in atoms: the atom sets up the magnetic 
field in this case.
4. We'd get the same with basketballs if they were charged and we used a teraguass 
magnetic field.
5. We can spin-couple electrons, but this sort of discreteness is just a conservation 
principle. When we measure one of the pair we are polarizing them again. So the other 
has to, by conservation, align (or anti-align) the same way.
6. Ahh... but then you invoke the magic words "Pauli Exclusion." Or the more elite words "Spin--Statistics."

I will not give myself the space here to explain Pauli Exclusion, but the gist of it 
can be explained by isotropic spin-coupling. I have explained this in the 
[theory pages here](/t4gu/theory/6_pauli_ex_entanglement/). But I have not truly 
completed the explanation using pure T4G theory, it is on my TODO list.

Pauli Exclusion is more fundamentally not about discreteness, but about symmetry. 
Rotational symmetry to be precise. There is nothing intrinsically discrete about 
this. It is just that to get wave mechanic effects that do not destructively 
interfere, the electrons occupying the same energy level have to, for symmetry 
reasons, go into opposite spin states. 

Now why do they do this? Who is telling them to be exclusive? What metaphysical 
fermion dating agency ordered this rule book up? The answer is pretty ordinary: 
All sorts of interactions and Feynman vertex processes occur between the boundaries 
of any spacetime cobordism. The net effect is described by summing the amplitudes, 
as Feynman showed us --- or equivalently solving the wave equation. 

If you bump one of them out of the atom it can have any orientation you care to 
suppose. In the atom it is bound, it is no longer a truly independent "particle," 
and so cannot just have any old orientation for too long. Certainly not long enough 
for you to see such fluctuations. 

When you account for all that stuff going on, you might realize there is no way we 
can control these darn fundamental particles, so many interactions occur that we have 
to account for pretty much everything that can happen. But... they all obey the 
symmetries!

The symmetries control and regularize everything you see, and that is all Pauli 
Exclusion is telling us: all manner of crazy stuff happens, but the net effect 
cannot violate the spacetime symmetries. Because all the crazy sh$\ast$t happens, 
there is a boatload, or several mega-tanker loads of interference. How we explain 
*all that* is the proper explanation for Pauli Exclusion. But no one really knows how 
to explain it. I have had a go in this T4GU website, but I don't want you to trust 
that I have incredible insights. T4G is just a theory. A pretty cool theory, but not 
certain truth.

((The interference and need for summing Feynman amplitudes derives, by T4G accounts, 
from the presence of wormholes, or closed time-like curves, which T4G postulates are 
ubiquitous at the Planck scale. F**king crazy sh$\ast$t really can occur in the 
cobordism region, but it's not Many Worlds crazy sh$\ast$t. It is more awesome and 
humble than Many Worlds.))


### Commutators

For any freshmen, or freshdoves or whoever, reading this, you probably have already 
had to drink some of the orthodox QM koolaid. So there is a chance you might have 
heard (likely from some low rank stressed out high school teacher) that quantum 
mechanics is weird because things do not commute.

We should immediately disabuse you of this false psychology.

Ordinary classical rotations in 3D do not commute.

Good enough?

Probably not good enough, am I right? Because you are probably still thinking that 
there are still observables in QM that do not commute but which commute in classical 
mechanics. But this is not true.  Why do they not tell you this in school?

The fundamental commutation relations for all the groups associated with 
measurement operations are the same in classical mechanics and in quantum mechanics. 

The difference in quantum mechanics is Heisenberg Uncertainty. We recognize that for 
sufficiently fine-grained systems, like electrons in atoms, atomic nuclei, elementary 
spins, single photons, and whatnot, we cannot make two measurements in a sequence 
that are "incompatible" and also expect the second measurement will not alter the 
measured value it produces from the metaphysical "value" (or probability distribution 
thereof) of the observable prior to the first measurement.

But this is true in classical mechanics too! You cannot perform two incompatible 
measurements in succession in classical mechanics either! (Say a position followed by 
a momentum.) Probably that's another thing they forgot to tell you in school.

So, again, what is the difference in QM?

The difference is that there is a fundamental scale of action (meaning basically a 
chunk of evolution through spacetime) called Planck's constant, or $\hbar$, which 
everyone knows about, which sets a limit on the degree to which fine grain 
incompatible measurements can be treated as compatible. If you go down to too small a 
length scale, or up to too high an energy scale, then you may not use the 
"everything is compatible" approximation. 

The *everything is compatible* approximation is *Classical* classical mechanics (CM 
with trivial spacetime topology).

If you can write down a Hamiltonian or Lagrangian describing your system well-enough 
for your desired precision, and can avoid inserting terms in $\hbar$, then you can do 
classical mechanics.

"But hang-on a damn minute there son! What about using units where $\hbar=1$ huh?"

What about it? When you set $\hbar=1$ you do not get rid of those terms that are 
sensitive to incomensurate operators. You get rid of them only by setting $\hbar=0$. 
But we know $\hbar > 0$ in any system of units. Which just means Classical classical 
mechanics is just wrong, and is a good physics model only when you are able to safely 
ignore fine-grain measurements or black holes, and the like.

In case you are still dumbfounded by all this, let me point out how classical 
mechanics (CM) achieves the approximation. In CM we do not even bother worrying about 
"measurement"!  That is how. "Measurement" is an inapplicable concept in classical 
mechanics.

It is typically only when you introduce general relativity that we get severe 
kick-back from "making a measurement" that alerts us to worry about setting up 
experiments. That's because in GR the gravitational influence takes time to 
propagate, it is not instantaneous like Newton's classical theory. This is called 
gravitational back-reaction. But if you looked closely into electrodynamics you'd see 
there is also back-reaction there too.

I'm being a bit sketchy here, for the sake of brevity.

But the gist of it all is that both general relativity and electrodynamics truly 
imply a non-zero Planck constant. So if you "did classical mechanics properly" you 
would end up with most of quantum mechanics, at the scattering theory level. (You 
would not have entanglement, or might not be forced to include entanglement, if you 
don't account for superposition and interference that is.) On the latter 
parenthetical remark: you might even arrive at entanglement if your classical 
mechanics had a theory of photons, rather than Maxwell theory --- because you would 
have to explain interference of light without using fields and waves.

I might be over-stating the case for theorist awesomeness here. I doubt anyone has 
the mental capacity to have ever performed this sort of "derivation" of QM from CM. 
I can only see that it was possible with a hundred year hindsight. Maybe someone like 
Edward Witten could have? I don't really know. But old Witten has not even recognized 
it was possible in the way I have described, so maybe not even Witten.

You know what though? I reckon Albert Einstein could have. He had the right sort of 
mind for it. (God does not play dice. The non-satanic mindset.)


### The Dirac Lagrangian

More elite garage quantum mechanics will ask further niggling questions, all of 
which T4G theory can answer (LOL, like I would know!), but I won't go through 
them all. But one pathetic nerd might point out the Dirac field $\psi$ has 
dimensions, so cannot be a pure rotor. 

But I already wrote that the spinors $\ket{\psi}$ are *not* pure rotors, they have 
dimensions of $L^{3/2}$ in the Lagrangian, and must of course obey unitarity, so have 
normalization factors too for the statistical probability density in space. We 
usually will write,
$$
\psi = \rho^{1/2} R.
$$
The $\rho$ is a statistical factor and has dimensions for fermions and vector bosons.
The Lagrangian is,
$$
 d^4x\\,\left( \bar{\psi}\gamma^\mu \partial_\mu \psi + m\bar{\psi}\psi\right)
$$
which by dimensional analysis gives the $L^{3/2}$ for $\[\psi\]$. Normie physicists 
get a bit puzzled by the half-integer dimensions, for what they believe is a real 
quantity, $\psi$.  To the Geometric Algebraicist there is no such puzzlement, because 
we understand $\psi$ is not a physical quantity, it is foremost a rotor (with other 
statistical factors). While the rotor part is dimensionless, it acts double-sided on 
other objects like $\gamma^\mu\partial_\mu$ to rotate them, and so any physical 
factors multiplying the rotor $R$ part of $\psi$ will have to be dimensionally square 
rooted, if they are not absorbed instead into an overall normalization constant.

For the even more pathetic nerds who know about the Hilbert space structure and the 
imporance of a ray representation, the Dirac field has to exhibit interference, so 
there must be geometric factors and an ambiguity in $\psi$ "up to a phase." In T4G 
theory this phase factor is also geometric in origin, arising as it does from 
non-Kolmogorov probabilistic processes associated with closed time-like curve 
dynamics. So you would normally also include a separate undetermined phase factor 
$e^{i\alpha}$ in the above expression for $\psi$ whenever there is entanglement and 
hence superposition and possibility for interference.

For multiparticle QM we would also want to tensor each $\psi$ with it's 
spin-coupled pair, which is again entanglement, and so an unnecessary complication 
for simple scattering theory. For multi-loop Feynman scattering theory the 
interference has to be inserted again to get the proper cancellations in the path 
integral.

For everyday low-brow garage QM scattering experiments we don't need to bother 
accounting for interference and then $\psi = \sqrt{\rho} R$ would suffice.


## The Aharonov Susskind Hand Wave

Oh yeah! Why did I start writing this post in the first place?

It was just to explain a joke.

About 1 min 40 sec 
[into the lecture Lenny demonstrates](https://youtu.be/-nBOCF0sPgU?t=48) 
the coffee cup trick: you can rotate a cup full to the brim with coffee on the flat 
palm of your hand around $720^\circ$ keeping your palm level without moving your 
feet. It's also called the Dirac belt trick. It also "proves" a genuine rotation of 
$2\pi$ does not necessarily return a localised sub-system of the universe back to the 
beginning. Proving that needing coffee is not a requirement of the theorem can be 
tricky. Water should work too, and even air, and invisible cups. In other words, we 
have a general proof. Susskind is such an Alpha he doesn't even need a cup of coffee. 

Lenny notes that he did not mathematically prove this topology theorem about SO(3), 
but he did give a rigorous hand-waving proof. The first such thing known to mankind ;-)


<table style="border-collapse: collapse; border=0;">
    <colgroup>
       <col span="1" style="width: 35%;">
       <col span="1" style="width: 25%;">
       <col span="1" style="width: 35%;">
    </colgroup>
<tr style="border: 1px solid color:#0f0f0f;">
<td style="border: 1px solid color:#0f0f0f;"><a href="../26_nonkolmogorov">Previous chapter</a></td>
<td style="border: 1px solid color:#0f0f0f; text-align:center;"><a href="../">Back to Blog</a></td>
<td style="border: 1px solid color:#0f0f0f; text-align:right;"><a href="../28_susy">Next chapter</a></td>
</tr>
<tr style="border: 1px solid color:#0f0f0f;">
<td style="border: 1px solid color:#0f0f0f;"><a href="../26_nonkolmogorov">Non-Kolmogorov Models</a></td>
<td style="border: 1px solid color:#0f0f0f; text-align:center;"><a href="../">TOC</a></td>
<td style="border: 1px solid color:#0f0f0f; text-align:right;"><a href="../28_susy">Susy C</a></td>
</tr>
</table>
