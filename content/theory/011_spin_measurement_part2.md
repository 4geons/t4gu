---
title: "Spin Measurement, Part-2 - Simulation"
description: ""
date: 2016-12-06
lastmod: 2016-12-06
cover: ""
coverAlt: ""
toc: true
tags: []
katex: true
---
 
Building on [Spin Measurements Part-1](../006_spin_measurement_part1) and 
everything else in-between, we now take a look at numerical experiments that 
help justify T4G theory as a realistic theory which derives most of quantum 
mechanics from gravity + CTCs.

However, in this chapter I'm not going to do anything original. 
What we'll do is take a look at Doran & Gull's work on 
[simulating Dirac wave packets,](https://arxiv.org/pdf/quant-ph/0509178) 
which help show that *any* statistical interpretation, along the 
lines of [Ballentine\'s,](https://doi.org/10.1103/RevModPhys.42.358) will have a Stern-Gerlach filter effect that 
_looks like **intrinsic** discrete spin_ but which can be taken instead as 
"revealing"$^\ast$ the spin current of an electron, or any charged particle, 
is a statistical polarization effect. 

$^\ast$ I'm not yet sure what that means. Something like "shows it is plausible that...".

There are other prior authors who have written about classical origins of fermion "spin." 
For example [Baylis and Cabrera,](https://arxiv.org/pdf/0710.3144) and probably many others I'm not deliberately neglecting. 
The ideas of Baylis & Cabrera are worht looking into, they suggest the "phase factors" 
of QM should be interpreted as "projected rotation operators" and that 
"physical space can be derived from fermion creation and annihilation operators." 
That's a lot like [Mark van Raamsdonck\'s](https://arxiv.org/pdf/1005.3035) 
"spacetime from entanglement" meme. 
I'm not much into that approach, I think it's backwards. But I could be wrong. 
I am probably wrong. But I'm not admitting it as a certainty.

This is all crucial, since it brings us in a virtuous "full circle" back to the 
promise of T4G theory --- which was that most of the *weirdness* of 
quantum mechanics dissolves when we try better to see quantum mechanics as a 
theory of gravity but endowed with particle-like topological 4-geon structure 
down at the Planck scale.
This last bit of weirdness we try to eradicate in this chapter concerns supposedly 
"discrete angular momentum" and "discrete spin".

((Actually, it's not the *last* weirdness, since we still need to account for the 
extra symmetries seen in the Standard Model which are beyond the Poincaré group. 
All that in good time, hopefully. 
And I am not even going to sniff at cosmology.))

## Measuring Spin Orientation

Let's refresh what we looked at in Part-1 of spin measurement.


```
[TODO: unfinished.  Work in progress.]
```

What we are now going to do is try to reproduce the results of 
[Gull, Doran, Lasenby, Challinor and Somaroo](https://arxiv.org/pdf/quant-ph/0509178) 
that show electron streamlines from the solutions to the Dirac equation 
*suggest* electrons statistically speaking follow pretty deterministic trajectories, and thus are not in any statistical sense ontologically restricted to  either a "spin up" or "spin down" state. 
Rather, the magnetic field polarizes the electrons, and this is why they deflect 
either with or against the magnetic field orientation in the centre of the apparatus.

Why are we just reproducing the results of Gull *et al.*? 
No great reason, but when I asked they had lost their software, so I saw this as a chance to give you some software to do this sort of physics hacking. It's fun ok? No other reason.

The reason for the chapter is however profound. It's more confirmation bias in 
favour of T4G theory. Once you see more and more "quantum" effects getting explained 
as a consequence of spacetime topology it just gets that little harder to say 
these T4GU people are lunatics.
Also, I promised this chapter back on Part-1.



## Caveats

What Gull *et al.*, showed is just that an alternative mental model for electron 
spin is possible, one that does not need to assume the "spin" is discrete.

This is not the entire mystery of quantum mechanics of particles, 
because there is also single-particle interference (which we've previously discussed) 
and electron barrier tunnelling.
It is the very non-classical tunnelling that we turn to explaining next. 
Although, by "explain" we merely mean, "give an account for in terms of T4G theory." 
Whether it's an ultimate explanation or not is for future physicists to judge.


[Next chapter (Electron Tunnelling)](../012_electron_tunnelling)  
[Previous chapter (Hestenes Spinors)](../010_hestenes_spinors)  
[Back to Theory TOC](../)
