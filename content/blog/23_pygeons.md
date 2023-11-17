---
title: "Computational Geons"
date: 2023-03-14
toc_depth: 3
draft: false
katex: true
toc: true
disableTitleSeparator : true
---

No, this is not a post about how the structure of physical reality lives in a 
computer. It is a lot more mundane.


## Do Not Force Your Model

It's always a delight to learn mathematics tricks. Paul Cohen's 
[Forcing methods](https://en.wikipedia.org/wiki/Forcing_(mathematics)) for 
example.  One form of which is: given a model $M$ for set theory (ZFC) there is a 
larger structure $N \supseteq M$ which can form a model of (ZFC + $\neg B$) where 
$\neg B$ is the negation of some desired theorem. This can be used to show the 
desired theorem $B$ cannot be proven in the set theory ZFC. This is roughly how Cohen 
showed the negation of the 
[Continuum Hypothesis](https://en.wikipedia.org/wiki/Generalized_Continuum_Hypothesis) 
was consistent with ZFC.

Or the other way complementary to forcing, the method Gödel used of an 
[Inner Model](https://en.wikipedia.org/wiki/Inner_model_theory),
where a model of set theory is constructed *from within set theory* built from 
certain axioms, say ZFC, assumed consistent  If this model also has some new axiom 
$B$ true but *true as a **theorem** in the model*, this can then be used to prove a 
relative consistency: if ZFC is consistent then $B$ is consistent with ZFC, that 
is, one cannot prove $B$ to be false from the axioms ZFC.  This is roughly how 
Gödel showed the Continuum Hypothesis is consistent with ZFC.

Putting Gödel and Cohen's result together shows CH is not provable in ZFC. \
(Actually Cohen's methods could eventually do both.)


### What is Numerical Theoretical Research?

In numerical experiments *for theoretical research* we have a very different problem, 
but which reminds me of those methods from set theory.

This is the problem of not programming our model to give us the results we want.

Yet, you cannot help but do this!

Every computer model of idealized stylized physics always encodes what you want in the 
event it gives you what you want.

For example, I'm trying to simulate topological 3-geons (2-space + time dimensions) 
to get interference from a stylized GR + CTCs. This is a dodgy project, because 
I am certain I can get interference of geons, just by being clever in how I write the 
program. This would be no great advance in T4G theory!

The trick with doing numerical experiments like this is to write simulations that 
*you do not know will generate the effects you want* and which fail to generate those 
effects!  It is, in other words, a very negative scientific method.

Of course, you *also* need to run the simulations to get the effect seen in the real
world, in my case two-slit interference.

In such numerical experiment it is only the *difference* between your codes 
that helps.  One simulation type $A$ gives interference, but a very similar simulation 
type $B$ does not. In the distinction between those codes is useful information.

Why am I doing this? It is because I'm too dumb to construct an analytical proof 
for T4G interference effects from the T4G axioms. (I do not know how to manipulate 
topological 4-geons very well in symbolic algebra.) So I'm trying the numerical route.



### ``I am No Physics''

The above use of computational models in theoretical research is very different from 
engineering research. In engineering, say fluid mechanics, one is interested in a 
problem more like *what will happen given conditions $\vec{X}(t=0)$*, or 
alternatively, what starting conditions might yield desired conditions $\vec{X}(t)$ 
at some later time.

Here we are not exploring the consistency of the axioms, we just take them as given 
(say the reduced Navier-Stokes equations).

In a more philosophical vein, there is a sort of metaphor in this distinction I 
sometimes like to use to frame issues of consciousness related to metaphysical 
dualism versus the Strong-AI paradigm. 
As [Turing pointed out](https://doi.org/10.1093/mind/LIX.236.433),
it is possible for a computer to arbitrarily accurately mimic a human. That is, to 
display what might fool us into thinking the machine is conscious or "thinking", 
because we are using purely behavioural indications to infer. 

That's a purely computational input-output problem.

The more stupid (but interesting) philosophical problem the computer science cannot 
solve for us is whether such a mimic can be truly sentient conscious? Can one mimic 
consciousness without being conscious (so like a Chalmers zombie)? Turing's idea was 
basically a *yes* to this question --- because he thought human *behaviour* to be 
computational (even though Turing would admit our conscious thought might not be 
computational).

The stubborn philosopher, or working class grunt, like myself, can always say, 
"Well, yes, my behaviour can be mimicked by a 'fraudulent' computation, 
but 'I am no Physics'!"

But that's all an aside for today.

My problem is to code up some 3-geons and get them alternatively interfering and 
not interfering.


<table style="border-collapse: collapse; border=0;">
    <colgroup>
       <col span="1" style="width: 40%;">
       <col span="1" style="width: 35%;">
       <col span="1" style="width: 45%;">
    </colgroup>
<tr style="border: 1px solid color:#0f0f0f;">
<td style="border: 1px solid color:#0f0f0f;"><a href="../22_sabinafail">Previous chapter</a></td>
<td style="border: 1px solid color:#0f0f0f; text-align:center;"><a href="../">Back to Blog</a></td>
<td style="border: 1px solid color:#0f0f0f; text-align:right;"><a href="../24_freebotherations">Next chapter</a></td>
</tr>
<tr style="border: 1px solid color:#0f0f0f;">
<td style="border: 1px solid color:#0f0f0f;"><a href="../22_sabinafail">Sabina Caveina</a></td>
<td style="border: 1px solid color:#0f0f0f; text-align:center;"><a href="../">TOC</a></td>
<td style="border: 1px solid color:#0f0f0f; text-align:right;"><a href="../24_freebotherations">Free Botherations</a></td>
</tr>
</table>
