---
title: "Dirac Solver"
description: ""
date: 2019-02-08
lastmod: 2019-02-03
cover: ""
coverAlt: ""
toc: true
tags: []
katex: true
---

The generally advised method for exploiting geometric algebra spinors to 
numerically solve the Dirac equation is to advance the wave-function in 
frequency space.

The spinor is after all a field with multivector values defined across all 
space. The solution can then be advanced via a Fourier Transform with a time 
update.

## The dirac++ code

Doran, Gull, Lasenby and Somaroo developed a geometric algebra solver in the 1990's 
but their code is not available. However, 
[Mocken and Keitel](http://dx.doi.org/10.1016/j.cpc.2008.01.042) published a 
GA based FFT Dirac solver in 2008, which is happily recent enough that it complies 
on GNU/Linux.

First download the code here: [43v3vvkwwf-1.zip](https://prod-dcd-datasets-cache-zipfiles.s3.eu-west-1.amazonaws.com/43v3vvkwwf-1.zip)

If that link is now dead (it was alive c.2023) try the Elsevier journal resource page here: 
[AEAS_v1_0.html](https://cpc.cs.qub.ac.uk/summaries/AEAS_v1_0.html)

Unzip the archive to a convenient development folder, and open a bash terminal 
in that location.  The minimal GNU software you need to install are the GSL library 
and the FFTW library. I had trouble getting the `fftw3.h` header file, 
eventually finding a debian package (`mffm-fftw-dev`) which had it.  
The apt command I used was
```bash
sudo apt install gsl-bin libfftw3-3 mffm-fftw-dev 
```
But you know I have a tonne of other packages installed on my home computer, 
so I cannot guarantee you'll get `dirac++` up and compiling with just those extra packages.

In the build directory you just unzipped, you should now be able to run,
```bash
./compile_fftw3
```
If you get errors for header files not found, then simply try to locate the debian 
packages with them included, they have to be around circa 2023, since I managed 
a successful compile just back in December 2022.

You get a whole bunch of ugly compiler warnings, especially from `MyMath.h` but 
just ignore them, or use a less verbose compiler flag for the `g++` 
command in `compile_fftw3` so for instance remove the `-Wall` flag. 
This is not a good idea if you are the developer, but since we are users of this 
code I think it's fine.

In any case, you should now see the executable named `d++`.
```bash
$ ls
compile_fftw2   d++          main.cp   Parameter.h  ReadMe.txt    sample_4a.txt  Spektrum.cp  Vector_Classes.cp
compile_fftw3   IgorPro.pxp  main.h    Particle.cp  sample_1.txt  sample_4b.txt  Spektrum.h   Vector_Classes.h
compile_fftw3f  Laser.cp     MatLab.m  Particle.h   sample_2.txt  sample_4c.txt  Threads.cp
compile_fftw3l  Laser.h      MyMath.h  Prefix.h     sample_3.txt  SampleData     Threads.h
```

The `ReadMe.txt` file has some bare bones instructions on how to run a simulation.


### Pair Production in Oscillating EM Field

The command to run the "sample_3" (particle pair production) simulation is, 
```bash
$ ./d++ -read=sample_3.txt -dirac > log3.txt &
```
The appended `&` starts the process off in a hidden shell. It takes a helluva long 
time to run. I am not sure, but examining the parameter file I think you can 
expect about 750 ".bin" files to be generated. (1500000 time steps, but updates saved 
only every 2000). Total run time was 5 hours 40 minutes. 

You can periodically check progress just by listing the folder, or 
```bash
ps aux |grep d++
# or 
ps aux |head -n 1 && ps aux |grep d++
```
The output files `Dirac_x_<index>_density.bin` are spewing data output. 
They are only about 43K in size, so no need to be alarmed that a lot are generated. 
The Elsevier [journal article](http://dx.doi.org/10.1016/j.cpc.2008.01.042) describes 
the output formats.
If you do not have an Elsevier subscription, donate a couple of dollars on 
[Ko-Fi](https://ko-fi.com/achrononmaster/) 
to keep me awake and then I can send you the pdf.

The time increment is `1e-07` and the final time is `0.15` so that's a whopping 
1.5 million time steps, each time step a bunch of FFT and inverse FFT transforms. 
Most modern home computers can handle this, but for starters you might want to 
run shorter sims while you figure out how to view the output using free-libre 
software, like gnuplot or python matplotlib. So just go and edit the `sample3.txt` 
file and change, 
```
#0.15		#final time (in atomic units)
# replace with...
0.05		#final time (in atomic units)
```

The interesting thing about this example is the electron-positron pair get created 
right on top of each other, and yet do not spontaneously annihilate. I mean to say...
did you expect the Dirac equation to say anything different? No. But still, 
it's a curious point of note that it is a highly localized phenomenon, and the 
T4G account would be a spacetime topology change.

The other simulations that are previewed in the 
[Mocken and Keitel](http://dx.doi.org/10.1016/j.cpc.2008.01.042) article show 
similar highly localized spinors. It is hard to look at the results and think of 
the Dirac spinors as anything but localized elementary particles. 

You might ask why the heck is that if the "wave" equations describe ultimate reality.
You already know my answer for that, but there is a nuance.

The nuance is that the Dirac Theory simulations are for single electrons, 
and we know empirically that the more generic case is that electrons will be 
entangled, and we know that QM, by pure logic (which is of course backed by 
screeds of empirical data) admits only pair-wise entanglement (the exceptions 
being rare GHZ states, which are never fully coupled). 

If we were to write software for allowing entanglement to form then the pictures 
would be different. We would be able to visualize ER=EPR states and notice how 
the coupling yields interference phenomena. 
To write software for two-electron systems is beyond my current prowess though, 
and the compute demands are certainly beyond my home computer to run. 
So this is where I will leave the numerical simulations for now.


### todo

Gotta do some more sims. Guide on visualization with matplotlib.
```
TODO: Work in progress on the visuals.
```


## Caveats

The method described here, and the code, solves the Dirac wave-equation for a 
single electron for the given electromagnetic fields, but we have to make the 
approximation that the electron has no back-reaction (that would change the fields). 
This is a fair enough assumption for most practical circumstances we are likely 
to consider.

I further imagine in 50 years from know the bigger computer labs will have the compute 
power to run simulations for whole atoms, with the entanglement. Then we would 
have nice visualizations of how entire atoms can be passed through "two slits" 
(more likely around two poles) and see interference patterns.
It would be quite remarkable work, but would be fascinating to understand the 
guts of how pair-wise entanglement between the quark pairs and between electrons 
is all we need to account for the empirically observed "superposition" 
of whole atoms. Another fifty years after that, being pessimistic about computer 
speed-up advances, we might see interference of entire molecules. 

For a T4G enthusiast (or anyone really) that would be a remarkable human 
accomplishment. 
it would also allow chemists to get more fine grained than their current 
state-of-the-art in density functional theory simulations. Who knows what 
technological progress that might spur.
Maybe nothing much more other than icecream that doesn't ever get spikey iced-up, 
but I'm betting a bit more than that. 

[Next chapter (TBD)](./)  
[Previous chapter (Quantum Logic, Part-1)](../099_quantum_logic)  
[Back to Theory TOC](../)



<table style="border-collapse: collapse; border=0;">
    <colgroup>
       <col span="1" style="width: 30%;">
       <col span="1" style="width: 15%;">
       <col span="1" style="width: 35%;">
    </colgroup>
<tr style="border: 1px solid color:#0f0f0f;">
<td style="border: 1px solid color:#0f0f0f;"><a href="../22_mmtfornow">Previous chapter</a></td>
<td style="border: 1px solid color:#0f0f0f; text-align:center;"><a href="../">Back to Posts</a></td>
<td style="border: 1px solid color:#0f0f0f; text-align:right;"><a href="../099_quantum_logic">Next chapter</a></td>
</tr>
<tr style="border: 1px solid color:#0f0f0f;">
<td style="border: 1px solid color:#0f0f0f;"><a href="../22_mmtfornow">MMT for Now</a></td>
<td style="border: 1px solid color:#0f0f0f; text-align:center;"><a href="../">TOC</a></td>
<td style="border: 1px solid color:#0f0f0f; text-align:right;"><a href="../099_quantum_logic">Quantum logic</a></td>
</tr>
</table>

